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

describe('Teste de consulta da Categoria por ID: ', () => {
  test('Consultando Categoria por ID', async () => {

    const response = await api.get('/v1/categorias/1', {
      headers: {
        token: authToken,
      },
    });

    expect(response.status).toBe(200);
    console.log(response.data);

  })

  test('Deve retornar um 404 pois a categoria não foi encontrada', async () => {

    const response = await api.get('/v1/categorias/300', {
      headers: {
        token: authToken,
      },
      validateStatus: (status) => true,
    });

    expect(response.status).toBe(404);
  })


})


describe('Teste de criação de categoria: ', () => {
  test('Cadastro de Categoria', async () => {
    const response = await api.post('/v1/categorias/',
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

  test('Deve retornar 400 pois faltou algum campo obrigatorio', async () => {
    const response = await api.post('/v1/categorias/',
      {
        name: "Tenis",
        use_in_menu: 1
      },
      {
        headers: {
          token: authToken,
        },
        validateStatus: (status) => true,
      }
    );

    expect(response.status).toBe(400)
  })
})

describe('Testes de atualização da Categoria:', () => {
  test('Atualizando uma Categoria', async () => {
    const response = await api.put('v1/categorias/2',
      {
        id: 2,
        name: "Regata",
        slug: "regata",
        use_in_menu: 1
      },
      {
        headers: {
          token: authToken,
        }

      });

    expect(response.status).toBe(204)
  })

  test('Deve retornar um status 404 pois o id passado na url é diferente da categoria', async () => {
    try {
      const response = await api.put('v1/categoria/200', {
        id: 2,
        name: "Regata",
        slug: "regata",
        use_in_menu: 1
      },
        {
          headers: {
            token: authToken,
          }
        });

    } catch (error) {
      expect(error.response.status).toBe(404);
      console.log(error.response.data.message);
    }
  })
})


describe('Testes de exclusão de categorias: ', () => {
  test('Deletando uma Categoria', async () => {
    const response = await api.delete('/v1/categorias/4', {
      headers: {
        token: authToken,
      },
    });

    expect(response.status).toBe(204);
  })

  test('Deve retornar um 404 pois o ID não foi encontrado', async () => {
    const response = await api.delete('/v1/categorias/169', {
        headers: {
            token: authToken,
        },
        validateStatus: (status) => true,
    });

    expect(response.status).toBe(404);

})
})
