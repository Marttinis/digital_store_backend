const api = require('../src/Api')
const jwt = require('jsonwebtoken')
require('dotenv').config()


describe('Teste de login:', () => {
    test('Retorna um 401 caso o email seja invalido', async () => {
        const response = await api.post('/v1/user/login',
            {
                email: 'emailIvalido@gmail.com',
                password: '1471'
            },
            {
                validateStatus: (status) => true,
            }
        )
        expect(response.status).toBe(401);
    })

    test('Retorna um 401 caso a senha seja invalida', async () => {
        const response = await api.post('/v1/user/login',
            {
                email: 'gabriel@gmail.com',
                password: 'senhaInvalida'
            },
            {
                validateStatus: (status) => true,
            }
        )
        expect(response.status).toBe(401);
    })

    test('deve retornar 200 e um token se o login for bem-sucedido', async () => {
        const response = await api.post('/v1/user/login', {
            email: 'gabriel@gmail.com',
            password: '1471'
        });
        const verify = jwt.verify(response.data.token, process.env.APP_KEY_TOKEN);
        console.log(response.data);

        expect(response.status).toBe(200)
    })


})