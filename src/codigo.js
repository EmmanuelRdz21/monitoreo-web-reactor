

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
let CO2_cliente;//Ejemplo
//id a todas las variables en HTML
//Obtener con el DOM el valor
//Crear un objeto global para los valores leidos
//funcion de actualizar valores leidos
//Tarea para Lunes 31/mayo

//********************Prueba de Grafica
const CHART = document.getElementById('LineChart');
console.log(CHART);
let a = "CO2";
let b = "CH4";
let c = "O2";
let d = "h2S";
let t0 = "00:00";
let t1 = "00:30";
let t2 = "01:00";
let t3 = "01:30";
let t4 = "02:00";
let i0 = 33;
let i1 = 65;
let i2 = 59;
let i3 = 80;
let i4 = 43;
let lineChart = new Chart(CHART,{
	type: 'line',
	data: {
		labels: [t0, t1, t2, t3, t4],
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
				data: [i0, i1, i2, i3, i4],
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
//*************************************************
//				Tabla
//*************************************************
let gentabla = document.getElementById('agreg');
let tabla="";
let contador=0;
let v = [22];

gentabla.addEventListener('click', function(){
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
			}
			else if(dataType==2 && v[1]!=1) {
				tabla += "<tr class=\"tb-r\"><td>CO2</td>";
				tabla += "<td>Gráfica</td></tr>"
				v[1]=1;
				contador ++;
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



socket.emit('startup', 1);

socket.on('startup', function(data){
	datosDOM = JSON.parse(data);
	actualizar_valores();
	actualizar_valvulashw();
	//console.log(data2.HR);
});

function actualizar_valores(){
	CO2DOM.innerHTML = JSON.parse(datosDOM.CO2);
	CH4DOM.innerHTML = JSON.parse(datosDOM.CH4);
	O2DOM.innerHTML = JSON.parse(datosDOM.O2);
	H2SDOM.innerHTML = JSON.parse(datosDOM.H2S);
	HRDOM.innerHTML = JSON.parse(datosDOM.HR);
	PatmDOM.innerHTML = JSON.parse(datosDOM.Patm);
	PintDOM.innerHTML = JSON.parse(datosDOM.Pint);
	PentDOM.innerHTML = JSON.parse(datosDOM.Pent);
	TintDOM.innerHTML = JSON.parse(datosDOM.Tint);
	TgasDOM.innerHTML = JSON.parse(datosDOM.Tgas);
	TatmDOM.innerHTML = JSON.parse(datosDOM.Tatm);
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