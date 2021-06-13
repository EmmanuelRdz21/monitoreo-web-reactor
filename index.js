//Modulos importados
let express = require('express');
let app 	= express();
let http 	= require('http').createServer(app);
let io 		= require('socket.io')(http);
let mysql 	=require('mysql');
let datosX = {
	x_1: '',
	x_2: '',
	x_3: '',
	x_4: '',
	x_5: '',
	x_6: '',
	x_7: '',
	x_8: '',
	x_9: '',
	x_10: '',
	x_11: '',
	x_12: '',
	x_13: '',
	x_14: '',
	x_15: '',
	x_16: '',
	x_17: '',
	x_18: '',
	x_19: '',
	x_20: ''
};
let datosY = {
	y_1: '',
	y_2: '',
	y_3: '',
	y_4: '',
	y_5: '',
	y_6: '',
	y_7: '',
	y_8: '',
	y_9: '',
	y_10: '',
	y_11: '',
	y_12: '',
	y_13: '',
	y_14: '',
	y_15: '',
	y_16: '',
	y_17: '',
	y_18: '',
	y_19: '',
	y_20: ''
};
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
	socket.on('pedir', (data)=>{
		io.to(socket.id).emit('creado', 1);
	});
	socket.on('report',(data)=>{
		app.get('/descargar/:id', function(req,res){
			res.download(__dirname+'/src/'+req.params.id,
				req.params.id,function(err){
					if (err) {
						console.log(err);
					} else{
						console.log("LISTO");
					}
				});
		});
	});
	socket.on('graf_CO2', (dataCO2, datatime)=>{
		pedir_tiempos_conc();
		dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
		});
		dataBase.query('SELECT * FROM concentracion ORDER BY ID DESC LIMIT 20;', function(err, result, fiel){
			
			datosX.x_1 = result[19].CO2;
			datosX.x_2 = result[18].CO2;
			datosX.x_3 = result[17].CO2;
			datosX.x_4 = result[16].CO2;
			datosX.x_5 = result[15].CO2;
			datosX.x_6 = result[14].CO2;
			datosX.x_7 = result[13].CO2;
			datosX.x_8 = result[12].CO2;
			datosX.x_9 = result[11].CO2;
			datosX.x_10 = result[10].CO2;
			datosX.x_11 = result[9].CO2;
			datosX.x_12 = result[8].CO2;
			datosX.x_13 = result[7].CO2;
			datosX.x_14 = result[6].CO2;
			datosX.x_15 = result[5].CO2;
			datosX.x_16 = result[4].CO2;
			datosX.x_17 = result[3].CO2;
			datosX.x_18 = result[2].CO2;
			datosX.x_19 = result[1].CO2;
			datosX.x_20 = result[0].CO2;
			
			let datjasontime = JSON.stringify(datosY);
			let datjasonCO2 = JSON.stringify(datosX);
			io.to(socket.id).emit('graf_CO2',datjasonCO2,datjasontime);
		});
	});
	socket.on('graf_CH4', (dataCH4)=>{
		pedir_tiempos_conc();
		dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
		});
		dataBase.query('SELECT * FROM concentracion ORDER BY ID DESC LIMIT 20;', function(err, result, fiel){
			datosX.x_1 = result[19].CH4;
			datosX.x_2 = result[18].CH4;
			datosX.x_3 = result[17].CH4;
			datosX.x_4 = result[16].CH4;
			datosX.x_5 = result[15].CH4;
			datosX.x_6 = result[14].CH4;
			datosX.x_7 = result[13].CH4;
			datosX.x_8 = result[12].CH4;
			datosX.x_9 = result[11].CH4;
			datosX.x_10 = result[10].CH4;
			datosX.x_11 = result[9].CH4;
			datosX.x_12 = result[8].CH4;
			datosX.x_13 = result[7].CH4;
			datosX.x_14 = result[6].CH4;
			datosX.x_15 = result[5].CH4;
			datosX.x_16 = result[4].CH4;
			datosX.x_17 = result[3].CH4;
			datosX.x_18 = result[2].CH4;
			datosX.x_19 = result[1].CH4;
			datosX.x_20 = result[0].CH4;

			let datjasontime = JSON.stringify(datosY);
			let datjasonCH4 = JSON.stringify(datosX);
			io.to(socket.id).emit('graf_CH4',datjasonCH4,datjasontime);
		});
	});
	socket.on('graf_O2', (dataO2)=>{
		pedir_tiempos_conc();
		dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
		});
		dataBase.query('SELECT * FROM concentracion ORDER BY ID DESC LIMIT 20;', function(err, result, fiel){
			datosX.x_1 = result[19].O2;
			datosX.x_2 = result[18].O2;
			datosX.x_3 = result[17].O2;
			datosX.x_4 = result[16].O2;
			datosX.x_5 = result[15].O2;
			datosX.x_6 = result[14].O2;
			datosX.x_7 = result[13].O2;
			datosX.x_8 = result[12].O2;
			datosX.x_9 = result[11].O2;
			datosX.x_10 = result[10].O2;
			datosX.x_11 = result[9].O2;
			datosX.x_12 = result[8].O2;
			datosX.x_13 = result[7].O2;
			datosX.x_14 = result[6].O2;
			datosX.x_15 = result[5].O2;
			datosX.x_16 = result[4].O2;
			datosX.x_17 = result[3].O2;
			datosX.x_18 = result[2].O2;
			datosX.x_19 = result[1].O2;
			datosX.x_20 = result[0].O2;
			
			let datjasontime = JSON.stringify(datosY);
			let datjasonO2 = JSON.stringify(datosX);
			io.to(socket.id).emit('graf_O2',datjasonO2,datjasontime);
		});
	});
	socket.on('graf_H2S', (dataH2S)=>{
		pedir_tiempos_conc();
		dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
		});
		dataBase.query('SELECT * FROM concentracion ORDER BY ID DESC LIMIT 20;', function(err, result, fiel){
			datosX.x_1 = result[19].H2S;
			datosX.x_2 = result[18].H2S;
			datosX.x_3 = result[17].H2S;
			datosX.x_4 = result[16].H2S;
			datosX.x_5 = result[15].H2S;
			datosX.x_6 = result[14].H2S;
			datosX.x_7 = result[13].H2S;
			datosX.x_8 = result[12].H2S;
			datosX.x_9 = result[11].H2S;
			datosX.x_10 = result[10].H2S;
			datosX.x_11 = result[9].H2S;
			datosX.x_12 = result[8].H2S;
			datosX.x_13 = result[7].H2S;
			datosX.x_14 = result[6].H2S;
			datosX.x_15 = result[5].H2S;
			datosX.x_16 = result[4].H2S;
			datosX.x_17 = result[3].H2S;
			datosX.x_18 = result[2].H2S;
			datosX.x_19 = result[1].H2S;
			datosX.x_20 = result[0].H2S;
			
			let datjasontime = JSON.stringify(datosY);
			let datjasonH2S = JSON.stringify(datosX);
			io.to(socket.id).emit('graf_H2S',datjasonH2S,datjasontime);
		});
	});
	socket.on('graf_HR', (dataHR)=>{
		pedir_tiempos_conc();
		dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
		});
		dataBase.query('SELECT * FROM concentracion ORDER BY ID DESC LIMIT 20;', function(err, result, fiel){
			datosX.x_1 = result[19].HR;
			datosX.x_2 = result[18].HR;
			datosX.x_3 = result[17].HR;
			datosX.x_4 = result[16].HR;
			datosX.x_5 = result[15].HR;
			datosX.x_6 = result[14].HR;
			datosX.x_7 = result[13].HR;
			datosX.x_8 = result[12].HR;
			datosX.x_9 = result[11].HR;
			datosX.x_10 = result[10].HR;
			datosX.x_11 = result[9].HR;
			datosX.x_12 = result[8].HR;
			datosX.x_13 = result[7].HR;
			datosX.x_14 = result[6].HR;
			datosX.x_15 = result[5].HR;
			datosX.x_16 = result[4].HR;
			datosX.x_17 = result[3].HR;
			datosX.x_18 = result[2].HR;
			datosX.x_19 = result[1].HR;
			datosX.x_20 = result[0].HR;
			
			let datjasontime = JSON.stringify(datosY);
			let datjasonHR = JSON.stringify(datosX);
			io.to(socket.id).emit('graf_HR',datjasonHR,datjasontime);
		});
	});
	socket.on('graf_Patm', (dataPatm)=>{
		pedir_tiempos_pres();
		dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
		});
		dataBase.query('SELECT * FROM presiones ORDER BY ID DESC LIMIT 20;', function(err, result, fiel){
			datosX.x_1 = result[19].Patm;
			datosX.x_2 = result[18].Patm;
			datosX.x_3 = result[17].Patm;
			datosX.x_4 = result[16].Patm;
			datosX.x_5 = result[15].Patm;
			datosX.x_6 = result[14].Patm;
			datosX.x_7 = result[13].Patm;
			datosX.x_8 = result[12].Patm;
			datosX.x_9 = result[11].Patm;
			datosX.x_10 = result[10].Patm;
			datosX.x_11 = result[9].Patm;
			datosX.x_12 = result[8].Patm;
			datosX.x_13 = result[7].Patm;
			datosX.x_14 = result[6].Patm;
			datosX.x_15 = result[5].Patm;
			datosX.x_16 = result[4].Patm;
			datosX.x_17 = result[3].Patm;
			datosX.x_18 = result[2].Patm;
			datosX.x_19 = result[1].Patm;
			datosX.x_20 = result[0].Patm;
			
			let datjasontime = JSON.stringify(datosY);
			let datjasonPatm = JSON.stringify(datosX);
			io.to(socket.id).emit('graf_Patm',datjasonPatm,datjasontime);
		});
	});
	socket.on('graf_Pint', (dataPint)=>{
		pedir_tiempos_pres();
		dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
		});
		dataBase.query('SELECT * FROM presiones ORDER BY ID DESC LIMIT 20;', function(err, result, fiel){
			datosX.x_1 = result[19].Pint;
			datosX.x_2 = result[18].Pint;
			datosX.x_3 = result[17].Pint;
			datosX.x_4 = result[16].Pint;
			datosX.x_5 = result[15].Pint;
			datosX.x_6 = result[14].Pint;
			datosX.x_7 = result[13].Pint;
			datosX.x_8 = result[12].Pint;
			datosX.x_9 = result[11].Pint;
			datosX.x_10 = result[10].Pint;
			datosX.x_11 = result[9].Pint;
			datosX.x_12 = result[8].Pint;
			datosX.x_13 = result[7].Pint;
			datosX.x_14 = result[6].Pint;
			datosX.x_15 = result[5].Pint;
			datosX.x_16 = result[4].Pint;
			datosX.x_17 = result[3].Pint;
			datosX.x_18 = result[2].Pint;
			datosX.x_19 = result[1].Pint;
			datosX.x_20 = result[0].Pint;
			
			let datjasontime = JSON.stringify(datosY);
			let datjasonPint = JSON.stringify(datosX);
			io.to(socket.id).emit('graf_Pint',datjasonPint,datjasontime);
		});
	});
	socket.on('graf_Pent', (dataPent)=>{
		pedir_tiempos_pres();
		dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
		});
		dataBase.query('SELECT * FROM presiones ORDER BY ID DESC LIMIT 20;', function(err, result, fiel){
			datosX.x_1 = result[19].Pent;
			datosX.x_2 = result[18].Pent;
			datosX.x_3 = result[17].Pent;
			datosX.x_4 = result[16].Pent;
			datosX.x_5 = result[15].Pent;
			datosX.x_6 = result[14].Pent;
			datosX.x_7 = result[13].Pent;
			datosX.x_8 = result[12].Pent;
			datosX.x_9 = result[11].Pent;
			datosX.x_10 = result[10].Pent;
			datosX.x_11 = result[9].Pent;
			datosX.x_12 = result[8].Pent;
			datosX.x_13 = result[7].Pent;
			datosX.x_14 = result[6].Pent;
			datosX.x_15 = result[5].Pent;
			datosX.x_16 = result[4].Pent;
			datosX.x_17 = result[3].Pent;
			datosX.x_18 = result[2].Pent;
			datosX.x_19 = result[1].Pent;
			datosX.x_20 = result[0].Pent;
			
			let datjasontime = JSON.stringify(datosY);
			let datjasonPent = JSON.stringify(datosX);
			io.to(socket.id).emit('graf_Pent',datjasonPent,datjasontime);
		});
	});
	socket.on('graf_Tint', (dataTint)=>{
		pedir_tiempos_temp();
		dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
		});
		dataBase.query('SELECT * FROM temperaturas ORDER BY ID DESC LIMIT 20;', function(err, result, fiel){
			datosX.x_1 = result[19].Tint;
			datosX.x_2 = result[18].Tint;
			datosX.x_3 = result[17].Tint;
			datosX.x_4 = result[16].Tint;
			datosX.x_5 = result[15].Tint;
			datosX.x_6 = result[14].Tint;
			datosX.x_7 = result[13].Tint;
			datosX.x_8 = result[12].Tint;
			datosX.x_9 = result[11].Tint;
			datosX.x_10 = result[10].Tint;
			datosX.x_11 = result[9].Tint;
			datosX.x_12 = result[8].Tint;
			datosX.x_13 = result[7].Tint;
			datosX.x_14 = result[6].Tint;
			datosX.x_15 = result[5].Tint;
			datosX.x_16 = result[4].Tint;
			datosX.x_17 = result[3].Tint;
			datosX.x_18 = result[2].Tint;
			datosX.x_19 = result[1].Tint;
			datosX.x_20 = result[0].Tint;
			
			//console.log(datos_CH4);
			let datjasonTint = JSON.stringify(datosX);
			let datjasontime = JSON.stringify(datosY);
			io.to(socket.id).emit('graf_Tint',datjasonTint,datjasontime);
		});
	});
	socket.on('graf_Tgas', (dataTgas)=>{
		pedir_tiempos_temp();
		dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
		});
		dataBase.query('SELECT * FROM temperaturas ORDER BY ID DESC LIMIT 20;', function(err, result, fiel){
			datosX.x_1 = result[19].Tgas;
			datosX.x_2 = result[18].Tgas;
			datosX.x_3 = result[17].Tgas;
			datosX.x_4 = result[16].Tgas;
			datosX.x_5 = result[15].Tgas;
			datosX.x_6 = result[14].Tgas;
			datosX.x_7 = result[13].Tgas;
			datosX.x_8 = result[12].Tgas;
			datosX.x_9 = result[11].Tgas;
			datosX.x_10 = result[10].Tgas;
			datosX.x_11 = result[9].Tgas;
			datosX.x_12 = result[8].Tgas;
			datosX.x_13 = result[7].Tgas;
			datosX.x_14 = result[6].Tgas;
			datosX.x_15 = result[5].Tgas;
			datosX.x_16 = result[4].Tgas;
			datosX.x_17 = result[3].Tgas;
			datosX.x_18 = result[2].Tgas;
			datosX.x_19 = result[1].Tgas;
			datosX.x_20 = result[0].Tgas;
			
			let datjasontime = JSON.stringify(datosY);
			let datjasonTgas = JSON.stringify(datosX);
			io.to(socket.id).emit('graf_Tgas',datjasonTgas,datjasontime);
		});
	});
	socket.on('graf_Tatm', (dataTatm)=>{
		pedir_tiempos_temp();
		dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
		});
		dataBase.query('SELECT * FROM temperaturas ORDER BY ID DESC LIMIT 20;', function(err, result, fiel){
			datosX.x_1 = result[19].Tatm;
			datosX.x_2 = result[18].Tatm;
			datosX.x_3 = result[17].Tatm;
			datosX.x_4 = result[16].Tatm;
			datosX.x_5 = result[15].Tatm;
			datosX.x_6 = result[14].Tatm;
			datosX.x_7 = result[13].Tatm;
			datosX.x_8 = result[12].Tatm;
			datosX.x_9 = result[11].Tatm;
			datosX.x_10 = result[10].Tatm;
			datosX.x_11 = result[9].Tatm;
			datosX.x_12 = result[8].Tatm;
			datosX.x_13 = result[7].Tatm;
			datosX.x_14 = result[6].Tatm;
			datosX.x_15 = result[5].Tatm;
			datosX.x_16 = result[4].Tatm;
			datosX.x_17 = result[3].Tatm;
			datosX.x_18 = result[2].Tatm;
			datosX.x_19 = result[1].Tatm;
			datosX.x_20 = result[0].Tatm;
			
			let datjasontime = JSON.stringify(datosY);
			let datjasonTatm = JSON.stringify(datosX);
			io.to(socket.id).emit('graf_Tatm',datjasonTatm,datjasontime);
		});
	});
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


function pedir_tiempos_conc(){
	dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
	});
	dataBase.query('SELECT * FROM concentracion ORDER BY ID DESC LIMIT 20;', function(err, result, fiel){
		datosY.y_1 = result[19].time;
		datosY.y_2 = result[18].time;
		datosY.y_3 = result[17].time;
		datosY.y_4 = result[16].time;
		datosY.y_5 = result[15].time;
		datosY.y_6 = result[14].time;
		datosY.y_7 = result[13].time;
		datosY.y_8 = result[12].time;
		datosY.y_9 = result[11].time;
		datosY.y_10 = result[10].time;
		datosY.y_11 = result[9].time;
		datosY.y_12 = result[8].time;
		datosY.y_13 = result[7].time;
		datosY.y_14 = result[6].time;
		datosY.y_15 = result[5].time;
		datosY.y_16 = result[4].time;
		datosY.y_17 = result[3].time;
		datosY.y_18 = result[2].time;
		datosY.y_19 = result[1].time;
		datosY.y_20 = result[0].time;
	});
}
function pedir_tiempos_pres(){
	dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
	});
	dataBase.query('SELECT * FROM presiones ORDER BY ID DESC LIMIT 20;', function(err, result, fiel){
		datosY.y_1 = result[19].time;
		datosY.y_2 = result[18].time;
		datosY.y_3 = result[17].time;
		datosY.y_4 = result[16].time;
		datosY.y_5 = result[15].time;
		datosY.y_6 = result[14].time;
		datosY.y_7 = result[13].time;
		datosY.y_8 = result[12].time;
		datosY.y_9 = result[11].time;
		datosY.y_10 = result[10].time;
		datosY.y_11 = result[9].time;
		datosY.y_12 = result[8].time;
		datosY.y_13 = result[7].time;
		datosY.y_14 = result[6].time;
		datosY.y_15 = result[5].time;
		datosY.y_16 = result[4].time;
		datosY.y_17 = result[3].time;
		datosY.y_18 = result[2].time;
		datosY.y_19 = result[1].time;
		datosY.y_20 = result[0].time;
	});
}
function pedir_tiempos_temp(){
	dataBase.query("USE reactor40", function (err, result,field) {
			if (err) throw err;
	});
	dataBase.query('SELECT * FROM temperaturas ORDER BY ID DESC LIMIT 20;', function(err, result, fiel){
		datosY.y_1 = result[19].time;
		datosY.y_2 = result[18].time;
		datosY.y_3 = result[17].time;
		datosY.y_4 = result[16].time;
		datosY.y_5 = result[15].time;
		datosY.y_6 = result[14].time;
		datosY.y_7 = result[13].time;
		datosY.y_8 = result[12].time;
		datosY.y_9 = result[11].time;
		datosY.y_10 = result[10].time;
		datosY.y_11 = result[9].time;
		datosY.y_12 = result[8].time;
		datosY.y_13 = result[7].time;
		datosY.y_14 = result[6].time;
		datosY.y_15 = result[5].time;
		datosY.y_16 = result[4].time;
		datosY.y_17 = result[3].time;
		datosY.y_18 = result[2].time;
		datosY.y_19 = result[1].time;
		datosY.y_20 = result[0].time;
	});
}