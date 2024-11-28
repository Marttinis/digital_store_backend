const connection = require('../config/connection');
const { DataTypes } = require("sequelize");
const ProdutoModel = require('../models/ProdutoModel')

const ImgDoProdutoModel = connection.define("ImgDoProdutoModel", {
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProdutoModel,
            key: 'id'
        }
    },

    enabled: {
        type: DataTypes.BOOLEAN(0),
        allowNull: true
    },

    path: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: "Imagem do Produto",
    timestamps: false
}
)

module.exports = ImgDoProdutoModel;