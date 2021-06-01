//Modulos importados
let express = require('express');
let app 	= express();
let http 	= require('http').createServer(app);
let io 		= require('socket.io')(http);
let mysql 	=require('mysql');
let datos = {
	CO2: '',
	CH4: '',
	O2:  '',
	H2S: '',
	HR: '',
	time_conc: '',
	ID_conc: '',

	Patm: '',
	Pint: '',
	Pent: '',
	time_pres: '',
	ID_pres: '',

	Tint: '',
	Tgas: '',
	Tatm: '',
	time_temp: '',
	ID_temp: '',

	V1: '',
	V2: '',
	V3: '',
	V4: '',
	V5: '',
	V6: '',
	Vinicio: '',
	time_valv: '',
	ID_valv: '',

	CO2_e: '',
	CH4_e: '',
	O2_e:  '',
	H2S_e: '',
	HR_e: '',
	Patm_e: '',
	Pint_e: '',
	Pent_e: '',
	Tint_e: '',
	Tgas_e: '',
	Tatm_e: '',
	V1_e: '',
	V2_e: '',
	V3_e: '',
	V4_e: '',
	V5_e: '',
	V6_e: '',
	Vinicio_e: '',
	time_edos: '',
	ID_edos: ''
};

//************* Alta del Server*****************//
app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/index.html');//requiere el nombre del archivo a mandar
});

app.use('/src', express.static('./src'));

http.listen(3000, ()=>{
	console.log('Server Monitoreo-web-reactor: Activo en 3000')
});

//********** MYSQL
let dataBase = mysql.createConnection({
	host: 'localhost',
	user: 'admin',
	password: '1234'
});

//********** SOCKET.IO
io.on('connection', (socket)=>{
	socket.on('startup',(data)=>{
		dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
		});
		dataBase.query('SELECT * FROM concentracion ORDER BY ID DESC;',function(err, result, field){
			if (err) throw err;
			datos.CO2 = result[0].CO2;
			datos.CH4 = result[0].CH4;
			datos.O2 = result[0].O2;
			datos.H2S = result[0].H2S;
			datos.HR = result[0].HR;
			datos.time_conc = result[0].time;
			datos.ID_conc = result[0].ID;
			pedir_presiones();
		});
		
			function pedir_presiones(){
				dataBase.query('SELECT * FROM presiones ORDER BY ID DESC;',function(err, result, field){
					if (err) throw err;
					datos.Patm = result[0].Patm;
					datos.Pint = result[0].Pint;
					datos.Pent = result[0].Pent;
					datos.time_pres = result[0].time;
					datos.ID_pres = result[0].ID;
					pedir_temperaturas();
				});
			}
			function pedir_temperaturas(){
				dataBase.query('SELECT * FROM temperaturas ORDER BY ID DESC;',function(err, result, field){
					if (err) throw err;
					datos.Tint = result[0].Tint;
					datos.Tgas = result[0].Tgas;
					datos.Tatm = result[0].Tatm;
					datos.time_temp = result[0].time;
					datos.ID_temp = result[0].ID;
					pedir_valvulas();
				});
			}
			function pedir_valvulas(){
				dataBase.query('SELECT * FROM valvulas ORDER BY ID DESC;',function(err, result, field){
					if (err) throw err;
					datos.V1 = result[0].V1;
					datos.V2 = result[0].V2;
					datos.V3 = result[0].V3;
					datos.V4 = result[0].V4;
					datos.V5 = result[0].V5;
					datos.V6 = result[0].V6;
					datos.Vinicio = result[0].Vinicio;
					datos.time_valv = result[0].time;
					datos.ID_valv = result[0].ID;
					pedir_estados();
				});
			}
			function pedir_estados(){
				dataBase.query('SELECT * FROM estados ORDER BY ID DESC;',function(err, result, field){
					if (err) throw err;
					datos.CO2_e = result[0].CO2;
					datos.CH4_e = result[0].CH4;
					datos.O2_e = result[0].O2;
					datos.H2S_e = result[0].H2S;
					datos.HR_e = result[0].HR;
					datos.Patm_e = result[0].Patm;
					datos.Pint_e = result[0].Pint;
					datos.Pent_e = result[0].Pent;
					datos.Tint_e = result[0].Tint;
					datos.Tgas_e = result[0].Tgas;
					datos.Tatm_e = result[0].Tatm;
					datos.V1_e = result[0].V1;
					datos.V2_e = result[0].V2;
					datos.V3_e = result[0].V3;
					datos.V4_e = result[0].V4;
					datos.V5_e = result[0].V5;
					datos.V6_e = result[0].V6;
					datos.Vinicio_e = result[0].Vinicio;
					datos.time_edos = result[0].time;
					datos.ID_edos = result[0].ID;
					let datjason = JSON.stringify(datos);
					io.to(socket.id).emit('startup',datjason);
				});
			}

	});
});
//console.log(JSON.stringify(concentracion));
			//let Msg= 'Bienvenido El dato CO2 es: ' + concentracion[0];
			//io.to(socket.id).emit('startup',Msg);