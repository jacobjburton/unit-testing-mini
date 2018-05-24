let axios = require('axios');

function getCars()
{
    axios.get('/users').then(res => res.data);
}