const express = require("express")
const path = require("path")
const axios = require('axios')
const { response } = require("express")

const app = express()
app.set('view engine', 'ejs')

app.use("/css", express.static(path.join("node_modules/bootstrap/dist/css")))

app.use("/js", express.static(path.join("node_modules/bootstrap/dist/js")))

app.use("/js", express.static(path.join("node_modules/jquery/dist")))

app.

    app.get('/', (req, res) => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
            res.render('home', { products: response.data })
        });
    })

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/detail/:id', (req, res) => {
    console.log(req.params.id)
    axios.get(`https://fakestoreapi.com/products/${req.params.id}`).then((response) => {
        res.render('detail', { product: response.data })
    });

})


app.listen(3000, () => {
    console.log("Listening on port " + 3000)
})