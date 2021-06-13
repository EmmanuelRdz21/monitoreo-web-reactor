

const socket = io();
let CO2DOM = document.getElementById('CO2');
let CH4DOM = document.getElementById('CH4');
let O2DOM = document.getElementById('O2');
let H2SDOM = document.getElementById('H2S');
let HRDOM = document.getElementById('HR');
let PatmDOM = document.getElementById('Patm');
let PintDOM = document.getElementById('Pint');
let PentDOM = document.getElementById('Pent');
let TintDOM = document.getElementById('Tint');
let TgasDOM = document.getElementById('Tgas');
let TatmDOM = document.getElementById('Tatm');
let CO2_eDOM = document.getElementById('CO2_e');
let CH4_eDOM = document.getElementById('CH4_e');
let O2_eDOM = document.getElementById('O2_e');
let H2S_eDOM = document.getElementById('H2S_e');
let HR_eDOM = document.getElementById('HR_e');
let Patm_eDOM = document.getElementById('Patm_e');
let Pint_eDOM = document.getElementById('Pint_e');
let Pent_eDOM = document.getElementById('Pent_e');
let Tint_eDOM = document.getElementById('Tint_e');
let Tgas_eDOM = document.getElementById('Tgas_e');
let Tatm_eDOM = document.getElementById('Tatm_e');
let datosDOM;
let Vi_value = document.getElementById("Vi");
let V1_value = document.getElementById("V1");
let V2_value = document.getElementById("V2");
let V3_value = document.getElementById("V3");
let V4_value = document.getElementById("V4");
let V5_value = document.getElementById("V5");
let V6_value = document.getElementById("V6");
let CO2_cliente;
let btn_Vi = document.getElementById("btn_acept_Vinicio");
let btn_V1 = document.getElementById("btn_acept_V1");
let btn_V2 = document.getElementById("btn_acept_V2");
let btn_V3 = document.getElementById("btn_acept_V3");
let btn_V4 = document.getElementById("btn_acept_V4");
let btn_V5 = document.getElementById("btn_acept_V5");
let btn_V6 = document.getElementById("btn_acept_V6");
let desc_report = document.getElementById("descargar_report");
let pedir_report = document.getElementById("pedir_report");
desc_report.disabled = true;
let a;
let graf_CO2 = document.getElementById('btn_CO2');
let graf_CH4 = document.getElementById('btn_CH4');
let graf_O2 = document.getElementById('btn_O2');
let graf_H2S = document.getElementById('btn_H2S');
let graf_Patm = document.getElementById('btn_Patm');
let graf_Pint = document.getElementById('btn_Pint');
let graf_Pent = document.getElementById('btn_Pent');
let graf_Tint = document.getElementById('btn_Tint');
let graf_Tgas = document.getElementById('btn_Tgas');
let graf_Tatm = document.getElementById('btn_Tatm');
let graf_HR = document.getElementById('btn_HR');

//*************************************************
//				Tabla
//*************************************************
let gen_tabla = document.getElementById('agreg');
let tabla="";
let contador=0;
let v = [0];
let list_report = ["i"];

gen_tabla.addEventListener('click', function(){
	let sensorOp = document.getElementById('tipo-sensor').value;
	let dataType = document.getElementById('tipo-dato').value;
	let contenid = document.getElementById('contenido-tabla');
	
	if (contador < 34) {
		switch (sensorOp){
		case "1":
			if (dataType==1 && v[0]!=1) {
				tabla += "<tr class=\"tb-r\"><td>CO2</td>";
				tabla += "<td>Tiempo de operación</td></tr>"
				v[0]=1;
				contador ++;
				list_report.push("CO2");
				list_report.push("T");
			}
			else if(dataType==2 && v[1]!=1) {
				tabla += "<tr class=\"tb-r\"><td>CO2</td>";
				tabla += "<td>Gráfica</td></tr>"
				v[1]=1;
				contador ++;
				list_report.push("CO2");
				list_report.push("G");
			}
			contenid.innerHTML = tabla;
		break;

		case "2":
			if (dataType==1 && v[2]!=1) {
				tabla += "<tr class=\"tb-r\"><td>CH4</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[2]=1;
				contador ++;
			}
			else if (dataType==2 && v[3]!=1){
				tabla += "<tr class=\"tb-r\"><td>CH4</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[3]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;

		case "3":
			if (dataType==1 && v[4]!=1) {
				tabla += "<tr class=\"tb-r\"><td>O2</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[4]=1
				contador ++;
			}
			else if (dataType==2 && v[5]!=1){
				tabla += "<tr class=\"tb-r\"><td>O2</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[5]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;
		case "4":
			if (dataType==1 && v[6]!=1) {
				tabla += "<tr class=\"tb-r\"><td>H2S</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[6]=1;
				contador ++;
			}
			else if (dataType==2 && v[7]!=1){
				tabla += "<tr class=\"tb-r\"><td>H2S</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[7]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;
		case "5":
			if (dataType==1 && v[8]!=1) {
				tabla += "<tr class=\"tb-r\"><td>Presión en la atmósfera</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[8]=1;
				contador ++;
			}
			else if (dataType==2 && v[9]!=1){
				tabla += "<tr class=\"tb-r\"><td>Presión en la atmósfera</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[9]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;
		case "6":
			if (dataType==1 && v[10]!=1) {
				tabla += "<tr class=\"tb-r\"><td>Presión interna</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[10]=1;
				contador ++;
			}
			else if (dataType==2 && v[11]!=1){
				tabla += "<tr class=\"tb-r\"><td>Presión interna</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[11]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;
		case "7":
			if (dataType==1 && v[12]!=1) {
				tabla += "<tr class=\"tb-r\"><td>Presión de entrada en la cámara</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[12]=1;
				contador ++;
			}
			else if (dataType==2 && v[13]!=1){
				tabla += "<tr class=\"tb-r\"><td>Presión de entrada en la cámara</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[13]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;
		case "8":
			if (dataType==1 && v[14]!=1) {
				tabla += "<tr class=\"tb-r\"><td>Temperatura interna SCHT</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[14]=1;
				contador ++;
			}
			else if (dataType==2 && v[15]!=1){
				tabla += "<tr class=\"tb-r\"><td>Temperatura interna SCHT</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[15]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;
		case "9":
			if (dataType==1 && v[16]!=1) {
				tabla += "<tr class=\"tb-r\"><td>Temperatura principal</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[16]=1;
				contador ++;
			}
			else if (dataType==2 && v[17]!=1){
				tabla += "<tr class=\"tb-r\"><td>Temperatura principal</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[17]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;
		case "10":
			if (dataType==1 && v[18]!=1) {
				tabla += "<tr class=\"tb-r\"><td>Temperatura ambiental    </td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[18]=1;
				contador ++;
			}
			else if (dataType==2 && v[19]!=1){
				tabla += "<tr class=\"tb-r\"><td>Temperatura ambiental</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[19]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;
		case "11":
			if (dataType==1 && v[20]!=1) {
				tabla += "<tr class=\"tb-r\"><td>Humedad</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[20]=1;
				contador ++;
			}
			else if (dataType==2 && v[21]!=1){
				tabla += "<tr class=\"tb-r\"><td>Humedad</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[21]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;
		case "12":
			if (dataType==1 && v[22]!=1) {
				tabla += "<tr class=\"tb-r\"><td>V1</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[22]=1;
				contador ++;
			}
			else if (dataType==2 && v[23]!=1){
				tabla += "<tr class=\"tb-r\"><td>V1</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[23]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;
		case "13":
			if (dataType==1 && v[24]!=1) {
				tabla += "<tr class=\"tb-r\"><td>V2</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[24]=1;
				contador ++;
			}
			else if (dataType==2 && v[25]!=1){
				tabla += "<tr class=\"tb-r\"><td>V2</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[25]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;
		case "14":
			if (dataType==1 && v[26]!=1) {
				tabla += "<tr class=\"tb-r\"><td>V3</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[26]=1;
				contador ++;
			}
			else if (dataType==2 && v[27]!=1){
				tabla += "<tr class=\"tb-r\"><td>V3</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[27]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;
		case "15":
			if (dataType==1 && v[28]!=1) {
				tabla += "<tr class=\"tb-r\"><td>V4</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[28]=1;
				contador ++;
			}
			else if (dataType==2 && v[29]!=1){
				tabla += "<tr class=\"tb-r\"><td>V4</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[29]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;
		case "16":
			if (dataType==1 && v[30]!=1) {
				tabla += "<tr class=\"tb-r\"><td>V5</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[30]=1;
				contador ++;
			}
			else if (dataType==2 && v[31]!=1){
				tabla += "<tr class=\"tb-r\"><td>V5</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[31]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;
		case "17":
			if (dataType==1 && v[32]!=1) {
				tabla += "<tr class=\"tb-r\"><td>V6</td>";
				tabla += "<td>Tiempo de operación</td></tr>";
				v[32]=1;
				contador ++;
			}
			else if (dataType==2 && v[33]!=1){
				tabla += "<tr class=\"tb-r\"><td>V6</td>";
				tabla += "<td>Gráfica</td></tr>";
				v[33]=1;
				contador ++;
			}
			contenid.innerHTML = tabla;
		break;

		}
	}
	else{
		alert("Ya excedió en número de renglones");
	}
});

//*************************************************
//				Declaraciones
//*************************************************
let btn1DOM = document.getElementById('showDiv1');
let btn2DOM = document.getElementById('showDiv2');
let btn3DOM = document.getElementById('showDiv3');
let btn4DOM = document.getElementById('showDiv4');
let btn5DOM = document.getElementById('showDiv5');
let btn6DOM = document.getElementById('showDiv6');

//*************************************************
//*********		Esconder menu lateral*************
//*************************************************
let menu_lateral = document.getElementById('menu-lateral');
let btn_menu = document.getElementById('btn-menu');

let contenedor = document.getElementById('cont');

btn_menu.addEventListener('change', function(){
	if (event.currentTarget.checked){
		menu_lateral.classList.remove('hide');
		contenedor.classList.remove('complete');

	}
	else{
		menu_lateral.classList.add('hide');
		contenedor.classList.add('complete');
	}
});

//*************************************************
//				funciones propias
//*************************************************
//*************************************************
//				Botones del menú
//*************************************************
btn1DOM.addEventListener('click', function(){
	document.getElementById('div1').style.display = '';
	document.getElementById('div2').style.display = 'none';
	document.getElementById('div3').style.display = 'none';
	document.getElementById('div4').style.display = 'none';
	document.getElementById('div5').style.display = 'none';
	document.getElementById('div6').style.display = 'none';
	document.getElementById('out').style.display = 'none';
});
btn2DOM.addEventListener('click', function(){
	document.getElementById('div1').style.display = 'none';
	document.getElementById('div2').style.display = '';
	document.getElementById('div3').style.display = 'none';
	document.getElementById('div4').style.display = 'none';
	document.getElementById('div5').style.display = 'none';
	document.getElementById('div6').style.display = 'none';
	document.getElementById('out').style.display = 'none';
});
btn3DOM.addEventListener('click', function(){
	document.getElementById('div1').style.display = 'none';
	document.getElementById('div2').style.display = 'none';
	document.getElementById('div3').style.display = '';
	document.getElementById('div4').style.display = 'none';
	document.getElementById('div5').style.display = 'none';
	document.getElementById('div6').style.display = 'none';
	document.getElementById('out').style.display = 'none';
});
btn4DOM.addEventListener('click', function(){
	document.getElementById('div1').style.display = 'none';
	document.getElementById('div2').style.display = 'none';
	document.getElementById('div3').style.display = 'none';
	document.getElementById('div4').style.display = '';
	document.getElementById('div5').style.display = 'none';
	document.getElementById('div6').style.display = 'none';
	document.getElementById('out').style.display = 'none';
});
btn5DOM.addEventListener('click', function(){
	document.getElementById('div1').style.display = 'none';
	document.getElementById('div2').style.display = 'none';
	document.getElementById('div3').style.display = 'none';
	document.getElementById('div4').style.display = 'none';
	document.getElementById('div5').style.display = '';
	document.getElementById('div6').style.display = 'none';
	document.getElementById('out').style.display = 'none';
});
btn6DOM.addEventListener('click', function(){
	document.getElementById('div1').style.display = 'none';
	document.getElementById('div2').style.display = 'none';
	document.getElementById('div3').style.display = 'none';
	document.getElementById('div4').style.display = 'none';
	document.getElementById('div5').style.display = 'none';
	document.getElementById('div6').style.display = '';
	document.getElementById('out').style.display = 'none';
});


//Cambiar nombre de esta vriable
//Actualiza los datos de la grafica en historico
socket.emit('startup', 1);

socket.on('graf_CO2', function(dataCO2, datatime){
	let datos_x = JSON.parse(dataCO2);
	let datos_y = JSON.parse(datatime);
	crear_grafica(datos_x,"CO2", datos_y);
});
socket.on('graf_CH4', function(dataCH4, datatime){
	let datos_x = JSON.parse(dataCH4);
	let datos_y = JSON.parse(datatime);
	crear_grafica(datos_x,"CH4", datos_y);
});
socket.on('graf_O2', function(dataO2, datatime){
	let datos_x = JSON.parse(dataO2);
	let datos_y = JSON.parse(datatime);
	crear_grafica(datos_x,"O2", datos_y);
});
socket.on('graf_H2S', function(dataH2S, datatime){
	let datos_x = JSON.parse(dataH2S);
	let datos_y = JSON.parse(datatime);
	crear_grafica(datos_x,"H2S", datos_y);
});
socket.on('graf_HR', function(dataHR, datatime){
	let datos_x = JSON.parse(dataHR);
	let datos_y = JSON.parse(datatime);
	crear_grafica(datos_x,"HR", datos_y);
});
socket.on('graf_Patm', function(dataPatm, datatime){
	let datos_x = JSON.parse(dataPatm);
	let datos_y = JSON.parse(datatime);
	crear_grafica(datos_x,"Patm", datos_y);
});
socket.on('graf_Pint', function(dataPint, datatime){
	let datos_x = JSON.parse(dataPint);
	let datos_y = JSON.parse(datatime);
	crear_grafica(datos_x,"Pint", datos_y);
});
socket.on('graf_Pent', function(dataPent, datatime){
	let datos_x = JSON.parse(dataPent);
	crear_grafica(datos_x,"Pent", datos_y);
});
socket.on('graf_Tint', function(dataTint, datatime){
	let datos_x = JSON.parse(dataTint);
	let datos_y = JSON.parse(datatime);
	crear_grafica(datos_x,"Tint", datos_y);
});
socket.on('graf_Tgas', function(dataTgas, datatime){
	let datos_x = JSON.parse(dataTgas);
	let datos_y = JSON.parse(datatime);
	crear_grafica(datos_x,"Tgas", datos_y);
});
socket.on('graf_Tatm', function(dataTatm, datatime){
	let datos_x = JSON.parse(dataTatm);
	let datos_y = JSON.parse(datatime);
	crear_grafica(datos_x,"Tatm", datos_y);
});

graf_CO2.addEventListener('click', function(){
	socket.emit("graf_CO2", 1);

});
graf_CH4.addEventListener('click', function(){
	socket.emit("graf_CH4", 1);	
});
graf_O2.addEventListener('click', function(){
	socket.emit("graf_O2", 1);
});
graf_H2S.addEventListener('click', function(){
	socket.emit("graf_H2S", 1);
});
graf_HR.addEventListener('click', function(){
	socket.emit("graf_HR", 1);
});
graf_Patm.addEventListener('click', function(){
	socket.emit("graf_Patm", 1);
});
graf_Pint.addEventListener('click', function(){
	socket.emit("graf_Pint", 1);
});
graf_Pent.addEventListener('click', function(){
	socket.emit("graf_Pent", 1);
});
graf_Tint.addEventListener('click', function(){
	socket.emit("graf_Tint", 1);
});
graf_Tgas.addEventListener('click', function(){
	socket.emit("graf_Tgas", 1);
});
graf_Tatm.addEventListener('click', function(){
	socket.emit("graf_Tatm", 1);
});
socket.on('startup', function(data){
	datosDOM = JSON.parse(data);
	actualizar_valores();
	actualizar_valvulas();
	actualizar_valvulashw();
});

socket.on('creado', function(data){
	desc_report.classList.remove('no_visible');
	desc_report.classList.add('visible');
});

function actualizar_valores(){
	CO2DOM.innerHTML = datosDOM.CO2;
	CH4DOM.innerHTML = (datosDOM.CH4);
	O2DOM.innerHTML = (datosDOM.O2);
	H2SDOM.innerHTML = (datosDOM.H2S);
	HRDOM.innerHTML = (datosDOM.HR);
	PatmDOM.innerHTML = (datosDOM.Patm);
	PintDOM.innerHTML = (datosDOM.Pint);
	PentDOM.innerHTML = (datosDOM.Pent);
	TintDOM.innerHTML = (datosDOM.Tint);
	TgasDOM.innerHTML = (datosDOM.Tgas);
	TatmDOM.innerHTML = (datosDOM.Tatm);
	//****************************
	if (datosDOM.CO2_e== 'X') {
		CO2_e.innerHTML = 'OFF';
		document.getElementById('abc').classList.add("OFF");
		document.getElementById('CO2_est').classList.add("RED");
	} else if (datosDOM.CO2_e== 'A') {
		CO2_e.innerHTML = 'ON';
		document.getElementById('abc').classList.add("ON");
		document.getElementById('CO2_est').classList.add("GREEN");
	} else if (datosDOM.CO2_e== 'O') {
		CO2_e.innerHTML = 'OFF LINE';
		document.getElementById('abc').classList.add("OFF-line");
		document.getElementById('CO2_est').classList.add("GRAY");
	}else if (datosDOM.CO2_e== 'M') {
		CO2_e.innerHTML = 'MANTENIMIENTO';
		document.getElementById('abc').classList.add("mto");
		document.getElementById('CO2_est').classList.add("YELLOW");
	}
	//*************************
	if (datosDOM.CH4_e== 'X') {
		CH4_e.innerHTML = 'OFF';
		document.getElementById('edo_CH4').classList.add("OFF");
		document.getElementById('CH4_est').classList.add("RED");
	} else if (datosDOM.CH4_e== 'A') {
		CH4_e.innerHTML = 'ON';
		document.getElementById('edo_CH4').classList.add("ON");
		document.getElementById('CH4_est').classList.add("GREEN");
	} else if (datosDOM.CH4_e== 'O') {
		CH4_e.innerHTML = 'OFF LINE';
		document.getElementById('edo_CH4').classList.add("OFF-line");
		document.getElementById('CH4_est').classList.add("GRAY");
	}else if (datosDOM.CH4_e== 'M') {
		CH4_e.innerHTML = 'MANTENIMIENTO';
		document.getElementById('edo_CH4').classList.add("mto");
		document.getElementById('CH4_est').classList.add("YELLOW");
	}
	//*************************
	if (datosDOM.O2_e== 'X') {
		O2_e.innerHTML = 'OFF';
		document.getElementById('edo_O2').classList.add("OFF");
		document.getElementById('O2_est').classList.add("RED");
	} else if (datosDOM.O2_e== 'A') {
		O2_e.innerHTML = 'ON';
		document.getElementById('edo_O2').classList.add("ON");
		document.getElementById('O2_est').classList.add("GREEN");
	} else if (datosDOM.O2_e== 'O') {
		O2_e.innerHTML = 'OFF LINE';
		document.getElementById('edo_O2').classList.add("OFF-line");
		document.getElementById('O2_est').classList.add("GRAY");
	}else if (datosDOM.O2_e== 'M') {
		O2_e.innerHTML = 'MANTENIMIENTO';
		document.getElementById('edo_O2').classList.add("mto");
		document.getElementById('O2_est').classList.add("YELLOW");
	}
	//*************************
	if (datosDOM.H2S_e== 'X') {
		H2S_e.innerHTML = 'OFF';
		document.getElementById('edo_H2S').classList.add("OFF");
		document.getElementById('H2S_est').classList.add("RED");
	} else if (datosDOM.H2S_e== 'A') {
		H2S_e.innerHTML = 'ON';
		document.getElementById('edo_H2S').classList.add("ON");
		document.getElementById('H2S_est').classList.add("GREEN");
	} else if (datosDOM.H2S_e== 'O') {
		H2S_e.innerHTML = 'OFF LINE';
		document.getElementById('edo_H2S').classList.add("OFF-line");
		document.getElementById('H2S_est').classList.add("GRAY");
	}else if (datosDOM.H2S_e== 'M') {
		H2S_e.innerHTML = 'MANTENIMIENTO';
		document.getElementById('edo_H2S').classList.add("mto");
		document.getElementById('H2S_est').classList.add("YELLOW");
	}
	//*************************
	if (datosDOM.HR_e== 'X') {
		HR_e.innerHTML = 'OFF';
		document.getElementById('edo_HR').classList.add("OFF");
		document.getElementById('HR_est').classList.add("RED");
	} else if (datosDOM.HR_e== 'A') {
		HR_e.innerHTML = 'ON';
		document.getElementById('edo_HR').classList.add("ON");
		document.getElementById('HR_est').classList.add("GREEN");
	} else if (datosDOM.HR_e== 'O') {
		HR_e.innerHTML = 'OFF LINE';
		document.getElementById('edo_HR').classList.add("OFF-line");
		document.getElementById('HR_est').classList.add("GRAY");
	}else if (datosDOM.HR_e== 'M') {
		HR_e.innerHTML = 'MANTENIMIENTO';
		document.getElementById('edo_HR').classList.add("mto");
		document.getElementById('HR_est').classList.add("YELLOW");
	}
	//*************************
	if (datosDOM.Patm_e== 'X') {
		Patm_e.innerHTML = 'OFF';
		document.getElementById('edo_Patm').classList.add("OFF");
		document.getElementById('Patm_est').classList.add("RED");
	} else if (datosDOM.Patm_e== 'A') {
		Patm_e.innerHTML = 'ON';
		document.getElementById('edo_Patm').classList.add("ON");
		document.getElementById('Patm_est').classList.add("GREEN");
	} else if (datosDOM.Patm_e== 'O') {
		Patm_e.innerHTML = 'OFF LINE';
		document.getElementById('edo_Patm').classList.add("OFF-line");
		document.getElementById('Patm_est').classList.add("GRAY");
	}else if (datosDOM.Patm_e== 'M') {
		Patm_e.innerHTML = 'MANTENIMIENTO';
		document.getElementById('edo_Patm').classList.add("mto");
		document.getElementById('Patm_est').classList.add("YELLOW");
	}
	//*************************
	if (datosDOM.Pint_e== 'X') {
		Pint_e.innerHTML = 'OFF';
		document.getElementById('edo_Pint').classList.add("OFF");
		document.getElementById('Pint_est').classList.add("RED");
	} else if (datosDOM.Pint_e== 'A') {
		Pint_e.innerHTML = 'ON';
		document.getElementById('edo_Pint').classList.add("ON");
		document.getElementById('Pint_est').classList.add("GREEN");
	} else if (datosDOM.Pint_e== 'O') {
		Pint_e.innerHTML = 'OFF LINE';
		document.getElementById('edo_Pint').classList.add("OFF-line");
		document.getElementById('Pint_est').classList.add("GRAY");
	}else if (datosDOM.Pint_e== 'M') {
		Pint_e.innerHTML = 'MANTENIMIENTO';
		document.getElementById('edo_Pint').classList.add("mto");
		document.getElementById('Pint_est').classList.add("YELLOW");
	}
	//*************************
	if (datosDOM.Pent_e== 'X') {
		Pent_e.innerHTML = 'OFF';
		document.getElementById('edo_Pent').classList.add("OFF");
		document.getElementById('Pent_est').classList.add("RED");
	} else if (datosDOM.Pent_e== 'A') {
		Pent_e.innerHTML = 'ON';
		document.getElementById('edo_Pent').classList.add("ON");
		document.getElementById('Pent_est').classList.add("GREEN");
	} else if (datosDOM.Pent_e== 'O') {
		Pent_e.innerHTML = 'OFF LINE';
		document.getElementById('edo_Pent').classList.add("OFF-line");
		document.getElementById('Pent_est').classList.add("GRAY");
	}else if (datosDOM.Pent_e== 'M') {
		Pent_e.innerHTML = 'MANTENIMIENTO';
		document.getElementById('edo_Pent').classList.add("mto");
		document.getElementById('Pent_est').classList.add("YELLOW");
	}
	//*************************
	if (datosDOM.Tint_e== 'X') {
		Tint_e.innerHTML = 'OFF';
		document.getElementById('edo_Tint').classList.add("OFF");
		document.getElementById('Tint_est').classList.add("RED");
	} else if (datosDOM.Tint_e== 'A') {
		Tint_e.innerHTML = 'ON';
		document.getElementById('edo_Tint').classList.add("ON");
		document.getElementById('Tint_est').classList.add("GREEN");
	} else if (datosDOM.Tint_e== 'O') {
		Tint_e.innerHTML = 'OFF LINE';
		document.getElementById('edo_Tint').classList.add("OFF-line");
		document.getElementById('Tint_est').classList.add("GRAY");
	}else if (datosDOM.Tint_e== 'M') {
		Tint_e.innerHTML = 'MANTENIMIENTO';
		document.getElementById('edo_Tint').classList.add("mto");
		document.getElementById('Tint_est').classList.add("YELLOW");
	}
	//*************************
	if (datosDOM.Tgas_e== 'X') {
		Tgas_e.innerHTML = 'OFF';
		document.getElementById('edo_Tgas').classList.add("OFF");
		document.getElementById('Tgas_est').classList.add("RED");
	} else if (datosDOM.Tgas_e== 'A') {
		Tgas_e.innerHTML = 'ON';
		document.getElementById('edo_Tgas').classList.add("ON");
		document.getElementById('Tgas_est').classList.add("GREEN");
	} else if (datosDOM.Tgas_e== 'O') {
		Tgas_e.innerHTML = 'OFF LINE';
		document.getElementById('edo_Tgas').classList.add("OFF-line");
		document.getElementById('Tgas_est').classList.add("GRAY");
	}else if (datosDOM.Tgas_e== 'M') {
		Tgas_e.innerHTML = 'MANTENIMIENTO';
		document.getElementById('edo_Tgas').classList.add("mto");
		document.getElementById('Tgas_est').classList.add("YELOW");
	}
	if (datosDOM.Tatm_e== 'X') {
		Tatm_e.innerHTML = 'OFF';
		document.getElementById('edo_Tatm').classList.add("OFF");
		document.getElementById('Tatm_est').classList.add("RED");
	} else if (datosDOM.Tatm_e== 'A') {
		Tatm_e.innerHTML = 'ON';
		document.getElementById('edo_Tatm').classList.add("ON");
		document.getElementById('Tatm_est').classList.add("GREEN");
	} else if (datosDOM.Tatm_e== 'O') {
		Tatm_e.innerHTML = 'OFF LINE';
		document.getElementById('edo_Tatm').classList.add("OFF-line");
		document.getElementById('Tatm_est').classList.add("GRAY");
	}else if (datosDOM.Tatm_e== 'M') {
		Tatm_e.innerHTML = 'MANTENIMIENTO';
		document.getElementById('edo_Tatm').classList.add("mto");
		document.getElementById('Tatm_est').classList.add("YELOW");
	}
}

function actualizar_valvulas(){
	Vi_value.value = datosDOM.Vinicio;
	V1_value.value = datosDOM.V1;
	V2_value.value = datosDOM.V2;
	V3_value.value = datosDOM.V3;
	V4_value.value = datosDOM.V4;
	V5_value.value = datosDOM.V5;
	V6_value.value = datosDOM.V6;
}

function actualizar_valvulashw(){
	if (datosDOM.V1_e== 'X') {
		document.getElementById('v1_est').classList.add("RED");
	} else if (datosDOM.V1_e== 'A') {
		document.getElementById('v1_est').classList.add("GREEN");
	} else if (datosDOM.V1_e== 'O') {
		document.getElementById('v1_est').classList.add("GRAY");
	}else if (datosDOM.V1_e== 'M') {
		document.getElementById('v1_est').classList.add("YELLOW");
	}
	//********************************
	if (datosDOM.V2_e== 'X') {
		document.getElementById('v2_est').classList.add("RED");
	} else if (datosDOM.V2_e== 'A') {
		document.getElementById('v2_est').classList.add("GREEN");
	} else if (datosDOM.V2_e== 'O') {
		document.getElementById('v2_est').classList.add("GRAY");
	}else if (datosDOM.V2_e== 'M') {
		document.getElementById('v2_est').classList.add("YELLOW");
	}
	//********************************
	if (datosDOM.V3_e== 'X') {
		document.getElementById('v3_est').classList.add("RED");
	} else if (datosDOM.V3_e== 'A') {
		document.getElementById('v3_est').classList.add("GREEN");
	} else if (datosDOM.V3_e== 'O') {
		document.getElementById('v3_est').classList.add("GRAY");
	}else if (datosDOM.V3_e== 'M') {
		document.getElementById('v3_est').classList.add("YELLOW");
	}
	//********************************
	if (datosDOM.V4_e== 'X') {
		document.getElementById('v4_est').classList.add("RED");
	} else if (datosDOM.V4_e== 'A') {
		document.getElementById('v4_est').classList.add("GREEN");
	} else if (datosDOM.V4_e== 'O') {
		document.getElementById('v4_est').classList.add("GRAY");
	}else if (datosDOM.V4_e== 'M') {
		document.getElementById('v4_est').classList.add("YELLOW");
	}
	//********************************
	if (datosDOM.V5_e== 'X') {
		document.getElementById('v5_est').classList.add("RED");
	} else if (datosDOM.V5_e== 'A') {
		document.getElementById('v5_est').classList.add("GREEN");
	} else if (datosDOM.V5_e== 'O') {
		document.getElementById('v5_est').classList.add("GRAY");
	}else if (datosDOM.V5_e== 'M') {
		document.getElementById('v5_est').classList.add("YELLOW");
	}
	//********************************
	if (datosDOM.V6_e== 'X') {
		document.getElementById('v6_est').classList.add("RED");
	} else if (datosDOM.V6_e== 'A') {
		document.getElementById('v6_est').classList.add("GREEN");
	} else if (datosDOM.V6_e== 'O') {
		document.getElementById('v6_est').classList.add("GRAY");
	}else if (datosDOM.V6_e== 'M') {
		document.getElementById('v6_est').classList.add("YELLOW");
	}
}

btn_Vi.addEventListener('click', function(){
	socket.emit('valv_i', 1);
});

desc_report.addEventListener('click', function(){
	socket.emit("report", 1);
});

pedir_report.addEventListener('click', function(){
	socket.emit("pedir", list_report);
});
//**************************************//
//********** Historico ****************//
//************************************//

//********************Prueba de Grafica
let lineChart =0;


function crear_grafica(datosX,etiqueta, datosY){
	if (lineChart != 0) {
		lineChart.destroy();
	}
	const CHART = document.getElementById('LineChart');
	let t ={};
	let datY = {};
	datY[0] = datosY.y_1.split(":");
	datY[1] = datosY.y_2.split(":");
	datY[2] = datosY.y_3.split(":");
	datY[3] = datosY.y_4.split(":");
	datY[4] = datosY.y_5.split(":");
	datY[5] = datosY.y_6.split(":");
	datY[6] = datosY.y_7.split(":");
	datY[7] = datosY.y_8.split(":");
	datY[8] = datosY.y_9.split(":");
	datY[9] = datosY.y_10.split(":");
	datY[10] = datosY.y_11.split(":");
	datY[11] = datosY.y_12.split(":");
	datY[12] = datosY.y_13.split(":");
	datY[13] = datosY.y_14.split(":");
	datY[14] = datosY.y_15.split(":");
	datY[15] = datosY.y_16.split(":");
	datY[16] = datosY.y_17.split(":");
	datY[17] = datosY.y_18.split(":");
	datY[18] = datosY.y_19.split(":");
	datY[19] = datosY.y_20.split(":");
	//*******
	for (let i = 0; i <= 19; i++) {
		t[i] = parseInt(datY[i][3])*60+parseInt(datY[i][4]);
		if (i>0) {
			if (datY[i][2]!=datY[0][2]) {
				t[i]=t[i]+1440;
			}
		}
	}
	for (let i = 1; i <= 19; i++) {
		t[i]=t[i]-t[0];
	}
	t[0]=0;

	//*******
	let todo =[
	datosX.x_1,
	datosX.x_2,
	datosX.x_3,
	datosX.x_4,
	datosX.x_5,
	datosX.x_6,
	datosX.x_7,
	datosX.x_8,
	datosX.x_9,
	datosX.x_10,
	datosX.x_11,
	datosX.x_12,
	datosX.x_13,
	datosX.x_14,
	datosX.x_15,
	datosX.x_16,
	datosX.x_17,
	datosX.x_18,
	datosX.x_19,
	datosX.x_20];
	a = etiqueta;
	
	lineChart = new Chart(CHART,{
	type: 'line',
	data: {
		labels: [t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15],t[16],t[17],t[18],t[19],],
		datasets: [
			{
				label: a,
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(235, 81, 76)", //Centro cuadro indicador
				borderColor: "rgba(115, 9, 7)",// COntorno cuadro indicador y grafica
				borderCapStyle: 'butt',
				borderDash: [],
				borderDash0ffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(94, 90, 90)",// corcinferencia indicadora de punto
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(94, 90, 90)",// Centro, mouse indicador
				pointHoverBorderColor: "rgba(255, 255, 255)",//Contorno mouse indicador
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointhitRadius: 10,
				data: [todo[0],todo[1],todo[2],todo[3],todo[4],todo[5],todo[6],todo[7],todo[8],todo[9],todo[10],
				todo[11],todo[12],todo[13],todo[14],todo[15],todo[16],todo[17],todo[18],todo[19]],
				pointRadius: 6,
				pointBorderWidth: 4,
				pointbackgroundColor: 'white',
				pointHoverRadius: 8,
				pointHoverBorderWidth: 4,	
				tooltips:{
					backgroundColor:'#0584f6',
					titleFontSize: 20,
					xPadding: 20,
					yPadding: 20,
					bodyFontsize:15,
					bodySpacing: 10,
				}

			}

		]

   }	
});
	;

}
function actualizar(){
	socket.emit('startup', 1);
	console.log("FUNCIONA");
}
setInterval(actualizar, 5000);