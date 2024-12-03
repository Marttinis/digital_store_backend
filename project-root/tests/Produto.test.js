const api = require('../src/Api')


let authToken;

// Obter o token de autenticação para testar rotas protegidas
beforeAll(async () => {
  const response = await api.post('/v1/user/login', {
    email: 'gabriel@gmail.com',
    password: '1471'
  });
  authToken = response.data.token;


});

describe('Teste de Consulta do produto por ID', () => {
  test('Consultando um Produto por ID', async () => {

    const response = await api.get('/v1/produtos/5', {
      headers: {
        token: authToken,
      },
    });

    expect(response.status).toBe(200);
    console.log(response.data);

  })

  test('Deve retornar 404 pois o ID não foi encontrado', async () => {

    const response = await api.get('/v1/produtos/5', {
      headers: {
        token: authToken,
      },
      validateStatus: (status) => true,
    });

    expect(response.status).toBe(404);
    console.log(response.data);

  })
})

describe('Teste de criação do produto:', ()=>{
  test('Cadastro de Categoria', async () => {
    const response = await api.post('/v1/produtos/',
      {
        name: "Tenis",
        slug: "tenis",
        use_in_menu: 1
      },
      {
        headers: {
          token: authToken,
        },
      }
    );

    expect(response.status).toBe(201)
  })
})