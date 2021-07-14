
const mySQL_DB = require('../data_base/db.js')

module.exports = {

    All_queries: {
        //
        customers : mySQL_DB.then(conn => conn.query('SELECT * FROM `PESO_UPDATE`')),

        // //MODULO PARA CosechadorasPropiasActivas
        // CosechadorasPropiasActivas : mySQL_DB.then(conn => conn.query('SELECT * FROM `employees`')),


        // //MODULO PARA CosechadorasAlquiladasActivas
        // CosechadorasAlquiladasActivas : mySQL_DB.then(conn => conn.query('SELECT * FROM `employees`')),

        // //MODULO PARA HorasTrabajadasDeCadaCosechadora
        // HorasTrabajadasDeCadaCosechadora : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),


        // //MODULO PARA LibrasCosechadasPorMaquina
        // LibrasCosechadasPorMaquina : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),


        // //MODULO PARA Cosechadoras
        // Cosechadoras : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),


        // //MODULO PARA TotalLibrasCosechadas
        // TotalLibrasCosechadas : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),


        // //MODULO PARA TotalLibrasHectareas
        // TotalLibrasHectareas : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),


        // //MODULO PARA TotalLibrasHectareas
        // PiscinaMasProductiva : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),


        // //MODULO PARA DuracionCosechaHectarea
        // DuracionCosechaHectarea : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),


        // //MODULO PARA TallaMasPescada
        // TallaMasPescada : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),


        // //MODULO PARA DiasAlquiladosCosechadoras
        // DiasAlquiladosCosechadoras : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),

        // //MODULO PARA TotalCosechadorasPropias
        // TotalCosechadorasPropias : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),


        // //MODULO PARA TotalCosechadorasAlquiladas
        // TotalCosechadorasAlquiladas : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),

        // //MODULO PARA CosechasEnVivo
        // CosechasEnVivo : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),


        // //MODULO PARA Gramaje
        // Gramaje : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),


        // //MODULO PARA LibrasCOsechadas
        // LibrasCOsechadas : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),


        // //MODULO PARA TallasCOsechadas
        // TallasCOsechadas : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),


        // //MODULO PARA Cosechas
        // Cosechas : mySQL_DB.then(conn => conn.query('SELECT * FROM `customers`')),
            }
        }


