const api = require('../src/Api')
const jwt = require('jsonwebtoken')
require('dotenv').config()

test('Authenticate Testing', async ()=>{
    const response = await api.post('/v1/user/login',{
        email: 'martins@gmail.com',
        password: 'gab123'
    });
    const verify = jwt.verify(response.data.token, process.env.APP_KEY_TOKEN);
    console.log(response.data);
    // )

    expect(verify.firstname).toBe('Ribamar')
    
    


})