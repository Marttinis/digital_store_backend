const api = require('../src/Api')


let authToken;

beforeAll(async ()=>{
    const response = await api.post('/v1/user/login',{
        email: 'martins@gmail.com',
        password: 'gab123'
    });
    authToken = response.data.token;
    console.log(authToken)
    
});

//GET ID usuarios
test('Consultando um Usuario por ID', async () => {
    try {
        console.log('Token usado:', authToken); // Log do token usado
        console.log('Endpoint chamado:', '/v1/usuarios/2');

        const response = await api.get('/v1/usuarios/2', {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });

        console.log('Resposta recebida:', response.data);
        expect(response.status).toBe(200);
    } catch (error) {
        console.error('Erro capturado no teste:', {
            status: error.response?.status,
            data: error.response?.data,
        });
        throw error;
    }
});

// test('Consultando um Usuario por ID', async () =>{
    
//     const response = await api.get('/v1/usuarios/2',{
//         headers: {
//             Authorization: `Bearer ${authToken}`,
//         },
//     });
//     console.log(response.data)
//     expect(response.status).toBe(200);
// })

//Post usuarios
// test('Cadastro de Usuario', async ()=>{
    //     const response = await api.post('v1/usuarios/',{
//         firstname: "Hellen",
// 	    surname : "Martins",
// 	    email : "hellen@jest.com",
// 	    password: "gab123"
//     });

//     expect(response.data.message).toBe("Usuario cadastrado com sucesso")
// })



//PUT usuarios

//DELETE usuarios