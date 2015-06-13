var express = require('express');
var app = express();
 


app.get('/preguntas', function(req, res) {
    
  //El Formulario envía dos valores:
 // - respuesta:    Con el valor introducido por el usuario
//  - pregunta:     De tipo hidden con la pregunta que se ha respondido    
    
  res.send('<html><head><title>Ejercicio P2P - Módulo 4</title></head><body>' +
        '<form method="GET" action="/respuesta">' +
            '¿Quién descubrió América?' +
            '<input type="text" name="respuesta"></input>' +
            '<input type="submit" />' +
            '<input type="hidden" name="pregunta" value="america"/>' +
        '</form>' +
        '<form method="GET" action="/respuesta">' +
            '¿Capital de Portugal?' +
            '<input type="text" name="respuesta"></input>' +
            '<input type="submit" />' +
            '<input type="hidden" name="pregunta" value="portugal"/>' +
        '</form></body></html>');
        
});

app.get('/respuesta', function(req, res){
    
    //Respuestas Correctas
    var respuestasCorrectas = {
        'america':  'Cristobal Colón',
        'portugal': 'Lisboa'
    }
    
    //Mensaje al Usuario
    var mensaje = ""
    
    //Tratamiento de la respuesta
    if(!req.query.pregunta){
        mensaje = "No se hizo una pregunta adecuada"
    }else{
        if( req.query.respuesta == respuestasCorrectas[req.query.pregunta] ){
            mensaje = "¡Respuesta Correcta!"
        }else{
            mensaje = "¡Incorrecto! La respuesta correcta es: '" + respuestasCorrectas[req.query.pregunta] + "'"
        }
    }
    
    //Envío
    res.send('<html><head><title>Respuesta</title></head><body>' +  mensaje  + 
             '<div><a href="/preguntas">Volver</a></div>' +
             '</body></html>');
})




var server = app.listen(80, function(){});