const colors = require('colors')
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('¡Respuesta api express!')
})

app.use(express.json());
app.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    //res.send(respuesta)
    res.status(201).send()
})

app.listen(port, () => {
  console.log(`Escuchando en puerto  ${port}`.bgGreen)
})
