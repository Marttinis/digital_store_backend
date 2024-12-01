const ServiceLogin = require("../services/ServiceLogin");

class LoginController {
    async login({ email, password }) {

        try {
            
            // Verificar se o usuário foi autenticado com sucesso
            const usuario = await ServiceLogin.authenticate({email, password});

            // Verificar se a resposta do authenticate é válida
            console.log("Usuário autenticado:");

            // Retorne apenas os dados relevantes para o JWT
            return { firstname: usuario.firstname, email: usuario.email };


        } catch (error) {
            console.error("Erro na autenticação:", error.message); // Adicione o log do erro
            throw new Error("Credenciais inválidas poha");
        }
    }
}

module.exports = LoginController;
