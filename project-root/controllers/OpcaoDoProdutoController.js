const OpcaoDoProdutoModel = require('../models/OpcaoDoProdutoModel');

class OpcaoDoProdutoController {

    //listar as img dos produtos
    async listar(request, response) {
        const dados = await OpcaoDoProdutoModel.findAll();
        return response.json(dados);

    }


    async criar(request, response) {
        try {

            const body = request.body;

            //Validação dos campos
            if (!body.product_id || !body.title || body.values) {
                return response.status(400).json({
                    message: "Todos os campos obrigatórios devem ser preenchidos."
                });
            }

            
            await OpcaoDoProdutoModel.create(body);

            return response.status(200).json({
                message: "Opções do produto cadastrado com sucesso",
              
            });


        } catch (error) {
            console.error(error);
            return response.status(404).json({
                message: "Erro ao cadastrar opções do produto",
                error: error.message
            });

        }

    }


}

module.exports = OpcaoDoProdutoController;