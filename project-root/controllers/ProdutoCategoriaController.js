const ProdutoCategoriaModel = require('../models/ProdutoCategoriaModel');

class ProdutoCategoriaController {

    //listar as img dos produtos
    async listar(request, response) {
        const dados = await ProdutoCategoriaModel.findAll();
        return response.json(dados);

    }


    async criar(request, response) {
        try {

            const body = request.body;

            //Validação dos campos
            if ( !body.product_id || !body.category_id) {
                return response.status(400).json({
                    message: "Todos os campos obrigatórios devem ser preenchidos."
                });
            }

            
            await ProdutoCategoriaModel.create(body);

            return response.status(200).json({
                message: "categoria e produto cadastrado com sucesso",
              
            });


        } catch (error) {
            console.error(error);
            return response.status(404).json({
                message: "Erro ao cadastrar categoria e produto",
                error: error.message
            });

        }

    }


}

module.exports = ProdutoCategoriaController;