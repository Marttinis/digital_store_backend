const connection = require('../config/connection');
const { DataTypes } = require("sequelize");
const ProdutoModel = require('../models/ProdutoModel')
const CategoriaModel = require('../models/CategoriaModel')


const ProdutoCategoriaModel= connection.define("ProdutoCategoriaModel",{
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProdutoModel,
            key: 'id'
        }
    },

    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: CategoriaModel,
            key: 'id'
        }

    }

},{
    tableName: "Produto_e_Categoria",
    timestamps: false,
    id: false
}
)

module.exports = ProdutoCategoriaModel;