const express = require('express');
const app = express();
const cors = require("cors");


const {All_queries} = require('./models/queries.js')

//const PROBLEMA = require('./models/QUE.js')
//SETTING
const PORT = process.env.PORT || 4000;


app.use(cors());


//RUTAS
//app.get('/', function(req, res){
    
   // All_queries.customers.then(([rows, fields]) => {res.json(rows)});
//});

//ARRANCAMOS EL SERVIDOR
app.listen(PORT, function(){
    console.log(`La app ha arrancado en http://localhost:${PORT}`);
    //CONECTARSE A LA BASE DE DATOS
    //FORCE TRUE: DORP TABLES    
});

app.get('/TotalLibrasCosechadas', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/TotalLibras_Hectareas', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/PiscinaMásProductiva', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/DuraciónCosechasHectareas', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/TallaMásPescada', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/DíasAlquiladosCose', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/TotalCosechadorasPropias', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/TotalCosechadorasAlquiladas', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/TallasCosechadas', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/Gramaje', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/CosechasEnVivo', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});
app.get('/LibrasCosechadas', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});
app.get('/Cosechas', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/CosechadorasPropiasActivas', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/CosechadorasAlquiladasActivas', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/Cosechadoras', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/LibrasCosechadasPorMaquina', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

app.get('/HorasTrabajadasDeCadaCosechadora', function(req, res){
    All_queries.CosechadorasPropiasActivas.then(([rows, fields]) => {res.json(rows)});
});

