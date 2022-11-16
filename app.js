const express = require('express')
const hbs =require('hbs')
const app = express()
const port = 8181

app.use(express.static('public'))

hbs.registerPartials(__dirname + '/views/partials', function (err) {})
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

//ruta
app.get('/', (req,res) =>{
    res.render('formulario', {
        nombre: 'formulario'
    })
 })

 //Ruta de Error de pagina no encontrada
app.get('*', (req, res) => {
    res.render('404',{
        nombre:'Página no encontrada'
    })
})

app.listen(port, () =>{
    console.log(`Escuchando el puerto ${port}`)
 })