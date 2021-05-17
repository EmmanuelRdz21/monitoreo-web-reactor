//Modulos importados
let express = require('express');
let app = express();
let http = require('http').createServer(app);

//************* Alta del Server*****************//
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/index.html');//requiere el nombre del archivo a mandar
});

app.use('/src', express.static('./src'));

http.listen(3000, ()=>{
	console.log('Server Monitoreo-web-reactor: Activo en 3000')
});