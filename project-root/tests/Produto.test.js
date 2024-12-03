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

    const response = await api.get('/v1/produtos/1', {
      headers: {
        token: authToken,
      },
    });

    expect(response.status).toBe(200);
    console.log(response.data);

  })

  test('Deve retornar 404 pois o ID não foi encontrado', async () => {

    const response = await api.get('/v1/produtos/598', {
      headers: {
        token: authToken,
      },
      validateStatus: (status) => true,
    });

    expect(response.status).toBe(404);
    console.log(response.data);

  })
})

describe('Teste de criação do produto:', () => {
  test('Cadastro de produto', async () => {
    const response = await api.post('/v1/produtos/',

      {//criação do produto, suas imagens e opções e as categorias relacionadas ao produto
        enabled: 1,
        name: "Calça",
        slug: "calça",
        stock: 500,
        description: "Descrição da calça",
        price: 69.90,
        price_with_discount: 39.90,
        imagens: [
          {
            product_id: 3,
            path: "imagem1.jpeg"
          },
          {
            product_id: 3,
            path: "imagem2.jpeg"
          }


        ],
        opcao: [
          {
            product_id: 3,
            title: "opção 1",
            values: "opção1"
          },
          {
            product_id: 3,
            title: "opção 1",
            values: "opção1"
          }
        ],
        categoria: [3, 5]
      },
      {
        headers: {
          token: authToken,
        },
      }
    );

    expect(response.status).toBe(200)
  })

  test('Retorna 400 caso algum campo esteja vazio', async () => {
    const response = await api.post('/v1/produtos/',

      {//criação do produto, suas imagens e opções e as categorias relacionadas ao produto
        enabled: 1,
        name: "Calça",
        // slug: "calça",
        stock: 500,
        description: "Descrição da calça",
        price: 69.90,
        price_with_discount: 39.90,
        imagens: [
          {
            product_id: 3,
            path: "imagem1.jpeg"
          },
          {
            product_id: 3,
            path: "imagem2.jpeg"
          }


        ],
        opcao: [
          {
            product_id: 3,
            title: "opção 1",
            values: "opção1"
          },
          {
            product_id: 3,
            title: "opção 1",
            values: "opção1"
          }
        ],
        categoria: [3, 5]
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

describe('Testes de atualização do produto', ()=>{
  test('Atualização de produto', async () => {
    const response = await api.put('/v1/produtos/1',

      {
        
        enabled: 1,
        name: "Calça Verde",
        slug: "calça verde",
        stock: 300,
        description: "Descrição da calça verde",
        price: 109.90,
        price_with_discount: 59.90,
        imagens: [
          {
            id: 1,
            product_id: 1,
            path: "imagemVerde.jpeg"
          },

          {
            id:2,
            product_id: 1,
            path: "imagemVerde2.jpeg"
          }

        ],
        opcao: [
          {
            id:1,
            product_id: 1,
            title: "opção escolhida 1",
            values: "opções"
          },
          {
            id:2,
            product_id: 1,
            title: "opção 2 opções",
            values: "opção2"
          }
        ]
        
      },
      {
        headers: {
          token: authToken,
        },
      }
    );

    expect(response.status).toBe(204)
  })

  test('Retorna um 404 caso o produto não seja encontrado', async () => {
    const response = await api.put('/v1/produtos/960',

      {
        
        enabled: 1,
        name: "Calça Verde",
        slug: "calça verde",
        stock: 300,
        description: "Descrição da calça verde",
        price: 109.90,
        price_with_discount: 59.90,
        imagens: [
          {
            id: 1,
            product_id: 1,
            path: "imagemVerde.jpeg"
          },

          {
            id:2,
            product_id: 1,
            path: "imagemVerde2.jpeg"
          }

        ],
        opcao: [
          {
            id:1,
            product_id: 1,
            title: "opção escolhida 1",
            values: "opções"
          },
          {
            id:2,
            product_id: 1,
            title: "opção 2 opções",
            values: "opção2"
          }
        ]
        
      },
      {
        headers: {
          token: authToken,
        },
        validateStatus: (status) => true,
      }
    );

    expect(response.status).toBe(404)
  })
})

describe('Testes de exclusão dos Produtos', ()=>{
  test('Deletando um Produto', async () => {
    const response = await api.delete('/v1/produtos/6', {
      headers: {
        token: authToken,
      },
    });

    expect(response.status).toBe(204);
  })

  test('Deve retornar um 404 pois o ID não foi encontrado', async () => {
    const response = await api.delete('/v1/produtos/169', {
      headers: {
        token: authToken,
      },
      validateStatus: (status) => true,
    });

    expect(response.status).toBe(404);

  })
})