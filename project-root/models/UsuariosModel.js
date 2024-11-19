
class UsuarioModel{

    // vai fazer o papel do banco de dados
    static lista = [
        {nome:'ribamar', login: 'admin'},
        {nome:'Claudio', login: 'admin'},
        {nome:'Gabriel', login: 'admin'},
    ];

    static listar(){
        return UsuarioModel.lista;

    }

    static consultarPorId(){

    }

    static criar(data){
        UsuarioModel.lista.push(data);

    }

    static atualizar(){

    }

    static deletar(){
        
    }


}

module.exports = UsuarioModel;