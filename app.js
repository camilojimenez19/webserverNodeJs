require('dotenv').config()

const express = require('express')
const hbs = require('hbs');

const app = express()
const PORT = process.env.PORT || 3000

/** Usar Handlebars template */
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

/** Servir contenido estatico */
app.use(express.static('public'))

/** ROUTES */

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Camilo Jimenez',
        title: 'Curso de NodeJs'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Camilo Jimenez',
        title: 'Curso de NodeJs'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Camilo Jimenez',
        title: 'Curso de NodeJs'
    })
})

app.get('*', (req, res) => {
    // res.render('')
})

app.listen(PORT, () => { console.log(`Servidor iniciado en el puerto: ${PORT}`) })