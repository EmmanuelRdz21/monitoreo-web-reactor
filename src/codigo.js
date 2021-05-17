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
