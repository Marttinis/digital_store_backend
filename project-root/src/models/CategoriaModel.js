const connection = require('../config/connection');
const {DataTypes} = require("sequelize");


const CategoriaModel = connection.define(
    "CategoriaModel", {
        
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        slug:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        use_in_menu:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: 0

        }
    },{
        modelName: "CategoriaModel",
        tableName: "Categoria"
    }
)


module.exports = CategoriaModel;

