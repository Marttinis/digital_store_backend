const connection = require('../config/connection');
const { DataTypes } = require("sequelize");
const ProdutoModel = require('../models/ProdutoModel')


const OpcaoDoProdutoModel= connection.define("OpcaoDoProdutoModel",{
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProdutoModel,
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },

    title: {
        type: DataTypes.STRING(45),
        allowNull: false
    },

    shape: {
        type: DataTypes.ENUM("square","circle"),
        allowNull: true,
        defaultValue: 'square'
    },

    radius: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },

    type: {
        type: DataTypes.ENUM("text","color"),
        allowNull: true,
        defaultValue: 'text'
    },

    values: {
        type: DataTypes.STRING,
        allowNull: false
    }





},{
    tableName: "Opcao_do_Produto",
    timestamps: false
}
)

module.exports = OpcaoDoProdutoModel;