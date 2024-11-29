const connection = require("../config/connection");
const { DataTypes } = require("sequelize");

const ProdutoModel = connection.define(
    "ProdutoModel", {
        enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: 0
        },
    
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
        slug: {
            type: DataTypes.STRING(45),
            allowNull: false
        },

        use_in_menu:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: 0
        },

        stock: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0


        },

        description:{
            type: DataTypes.STRING,
            allowNull: true
        },

        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

        price_with_discount: {
            type: DataTypes.FLOAT,
            allowNull: false
        }

  },{
    tableName: "Produto"
  }
)

module.exports = ProdutoModel;