const express = require ('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const MongoClient = require ('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const dbName = 'elementos';

const client = new MongoClient(url);
var db= null;

const app = express();

app.engine('handlebars',hbs());
app.set('view engine', 'handlebars');



app.use(express.static('public'));

// Conectarse a Base de Datos
MongoClient.connect('mongodb+srv://cmcampom:<PASSWORD>@cluster0-uukek.mongodb.net/elementos',
{
    auth:{
        user: 'cmcampom',
        password: 'Olimpo123.'
    }

},

function(err, client){
    if(err) throw err;
    db = client.db('elementos');

    //Iniciar Servidor
    app.listen(process.env.PORT || 1234);

}



)


/*
client.connect(function(err){

    if(err){
        console.error(err);
        response.send(err);
        return;
    }
    db = client.db(dbName);
});*/



app.get('/', function(request, response){

    const collection = db.collection('muffins');
    

    collection.find({}).toArray(function(err,docs){

        if(err){
            console.error(err);
            response.send(err);
            return;
        };

        var contexto = {
            products: docs,
            };
    
        response.render('ultcolec',contexto);



    })
});

app.get('/OnlyRealShXt', function(request, response){

    const collection = db.collection('muffins');
    

    collection.find({

        especial: true

    }).toArray(function(err,docs){

        if(err){
            console.error(err);
            response.send(err);
            return;
        };

        var contexto = {
            products: docs,
            };
    
        response.render('ultcolec',contexto);



    })
});

app.get('/Sweet/Low', function(request, response){

    const collection = db.collection('muffins');
    

    collection.find({

        dulce: {
            '$lt': 31
        }

    }).toArray(function(err,docs){

        if(err){
            console.error(err);
            response.send(err);
            return;
        };

        var contexto = {
            products: docs,
            };
    
        response.render('ultcolec',contexto);



    })
});

app.get('/Sweet/Medium', function(request, response){

    const collection = db.collection('muffins');
    

    collection.find({

        dulce: {
            '$lt': 61,
            '$gt': 31
        }

    }).toArray(function(err,docs){

        if(err){
            console.error(err);
            response.send(err);
            return;
        };

        var contexto = {
            products: docs,
            };
    
        response.render('ultcolec',contexto);



    })
});

app.get('/Sweet/High', function(request, response){

    const collection = db.collection('muffins');
    

    collection.find({

        dulce: {
            '$gt': 61
        }

    }).toArray(function(err,docs){

        if(err){
            console.error(err);
            response.send(err);
            return;
        };

        var contexto = {
            products: docs,
            };
    
        response.render('ultcolec',contexto);



    })
});

app.get('/GlutenFree', function(request, response){

    const collection = db.collection('muffins');
    

    collection.find({

        'gluten': false

    }).toArray(function(err,docs){

        if(err){
            console.error(err);
            response.send(err);
            return;
        };

        var contexto = {
            products: docs,
            };
    
        response.render('ultcolec',contexto);



    })
});

app.get('/MyFavs', function(request, response){

    const collection = db.collection('muffins');
    

    collection.find({

        'fav': true

    }).toArray(function(err,docs){

        if(err){
            console.error(err);
            response.send(err);
            return;
        };

        var contexto = {
            products: docs,
            };
    
        response.render('ultcolec',contexto);



    })
});






app.listen(5500,function(){

    console.log('Inicia Proceso');

});