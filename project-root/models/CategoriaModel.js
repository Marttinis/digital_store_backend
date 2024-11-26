const connection = require('../config/connection');
const {DataTypes} = require("sequelize");


const CategoriaModel = connection.define(
    "CategoriaModel", {
        
        name:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        slug:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        use_in_menu:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false

        }
    }
)

module.exports = CategoriaModel;

