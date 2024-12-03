const api = require('../src/Api')
const jwt = require('jsonwebtoken')
require('dotenv').config()

test('Authenticate Testing', async ()=>{
    const response = await api.post('/v1/user/login',{
        email: 'gabriel@gmail.com',
        password: '1471'
    });
    const verify = jwt.verify(response.data.token, process.env.APP_KEY_TOKEN);
    // console.log(verify);
  

    expect(verify.firstname).toBe('Paulo')
    
    


})