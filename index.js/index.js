const express = require ('express');
const app = express();

app.get('/', (req, res) =>res.send('Hola Mundooo'));

app.listen(3001);
console.log('Server on port', 3001);