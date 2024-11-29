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
        },
        onDelete: 'CASCADE' //para deletar a imagem quando for deletado o produto relacionado na tabela produtos
    },

    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
    },

    path: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: "Imagem_do_Produto",
    timestamps: false
}
)

module.exports = ImgDoProdutoModel;