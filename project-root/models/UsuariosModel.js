
class UsuarioModel{

    // vai fazer o papel do banco de dados
    static lista = [
        {id: 1, nome:'ribamar', login: 'admin', senha:'12345'},
        {id: 2, nome:'Claudio', login: 'admin', senha:'54321'},
        {id: 3, nome:'Gabriel', login: 'admin', senha:'67890'},
    ];

    static authenticate(login, senha){
        console.log(login, senha);
        
        const indice = UsuarioModel.lista.findIndex(item => item.login == login && item.senha == senha);
        return UsuarioModel.lista[indice];

    }
    static listar(){
        return UsuarioModel.lista;

    }

    static consultarPorId(id){
        const dados = UsuarioModel.lista.filter(item => item.id == id);
        return dados;

    }

    static criar(data){
        UsuarioModel.lista.push(data);

    }

    static atualizar(id, data){
        const indice = UsuarioModel.lista.findIndex(item => item.id == id);
        UsuarioModel.lista[indice] = data;


    }

    static deletar(id){
        const dados = UsuarioModel.lista.filter(item => item.id != id);
        UsuarioModel.lista = dados;



        
    }


}

module.exports = UsuarioModel;