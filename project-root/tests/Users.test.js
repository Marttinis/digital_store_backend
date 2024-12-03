const api = require('../src/Api')


let authToken;

// Obter o token de autenticação para testar rotas protegidas
beforeAll(async () => {
    const response = await api.post('/v1/user/login', {
        email: 'Rebeca@gmail.com',
        password: '1471'
    });
    authToken = response.data.token;


});



describe('Testes de consulta do usuario por ID:', () => {
    test('Consultando um Usuario por ID', async () => {

        const response = await api.get('/v1/usuarios/2', {
            headers: {
                token: authToken,
            },
        });

        expect(response.status).toBe(200);
        console.log(response.data);

    })

    test('Deve retornar um status 404 se o user não for encontrado', async () => {
        try {
            const response = await api.get('/v1/usuarios/88', {
                headers: {
                    token: authToken,
                },
            });
        } catch (error) {
            // Verifica o código de status no erro
            expect(error.response.status).toBe(404);
            console.log(error.response.data.message);

        }

    });



})

describe('Testes de criação do usuario:', () => {
    test('Cadastro de Usuario', async () => {
        const response = await api.post('v1/usuarios/', {
            firstname: "Mario",
            surname: "Martins",
            email: "mario@jest.com",
            password: "gab123"
        });

        expect(response.status).toBe(201)
    })

    test('Retorna um status 400 pois nem todos os campos foram preenchidos', async () => {
        try {
            const response = await api.post('v1/usuarios/', {
                firstname: "Mario",
                surname: "Martins",
                email: "mario@jest.com"

            });

        } catch (error) {
            expect(error.response.status).toBe(400);
            console.log(error.response.data.message);

        }
    })
})


describe('Testes de atualização do Usuario:', () => {
    test('Atualizando um Usuario', async () => {
        const response = await api.put('v1/usuarios/3', {
            id: 3,
            firstname: "Roberto",
            surname: "Pereira",
            email: "Rebeca@jest.com",
            password: "gab123"
        }, {
            headers: {
                token: authToken,
            }
        });

        expect(response.status).toBe(204)
    })

    test('Deve retornar um status 500 pois o id passado na url é diferente do user', async () => {
        try {
            const response = await api.put('v1/usuarios/78', {
                id: 3,
                firstname: "Roberto",
                surname: "Santos",
                email: "Rebeca@jest.com",
                password: "gab123"
            }, {
                headers: {
                    token: authToken,
                }
            });

        } catch {
            expect(error.response.status).toBe(500);
            console.log(error.response.data.message);
        }
    })
})


describe('Testes de exclusão do Usuario:', () => {
    test('Deletando um Usuario', async () => {

        const response = await api.delete('/v1/usuarios/4', {
            headers: {
                token: authToken,
            },
        });

        expect(response.status).toBe(204);

    })

    test('Deve retorna uma mensagem de que o usuario não foi encontrado', async () => {

        const response = await api.get('/v1/usuarios/88', {
            headers: {
                token: authToken,
            },
            validateStatus: (status) => true, // Permite qualquer status
        });
    
        // Verifica o status retornado
        expect(response.status).toBe(404);




    })

})





