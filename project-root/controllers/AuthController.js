const UsuarioModel = require("../models/UsuariosModel");

class AuthController {
    async login({ email, password }) {
        try {
            // Adicione log para verificar se o email e senha foram recebidos corretamente
            console.log("Dados recebidos para autenticação:", { email, password });

            // Verificar se o usuário foi autenticado com sucesso
            const usuario = await UsuarioModel.authenticate(email, password);

            // Verificar se a resposta do authenticate é válida
            console.log("Usuário autenticado:", usuario); // Adicione o log para depuração

            // Retorne apenas os dados relevantes para o JWT
            return { firstname: usuario.firstname, email: usuario.email };
        } catch (error) {
            console.error("Erro na autenticação:", error.message); // Adicione o log do erro
            throw new Error("Credenciais inválidas");
        }
    }
}

module.exports = AuthController;
