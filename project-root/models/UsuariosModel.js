
const connection = require('../config/connection');
const { DataTypes } = require("sequelize");
const bcrypt = require('bcrypt');


const UsuariosModel = connection.define("UsuariosModel",
    {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },

        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
            // unique: true,  // Evita e-mails duplicados
        },

        password: { //Precisa usar o bcrypt para criptografar a senha
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {
    tableName: "Usuarios",
    hooks: {
        // Hook para gerar hash antes de criar o usuário
        beforeCreate: async (user) => {
          const saltRounds = 10;
          user.password = await bcrypt.hash(user.password, saltRounds);
        },
        // Hook para hash antes de atualizar o usuário
        beforeUpdate: async (user) => {
          if (user.changed('password')) {
            const saltRounds = 10;
            user.password = await bcrypt.hash(user.password, saltRounds);
          }
        },
      },
}
);




module.exports = UsuariosModel;