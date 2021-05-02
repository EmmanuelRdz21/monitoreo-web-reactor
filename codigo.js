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


gentabla.addEventListener('click', function(){
	let sensorOp = document.getElementById('tipo-sensor').value;
	console.log('añadiendo');
	let dataType = document.getElementById('tipo-dato').value;
	let contenid = document.getElementById('contenido-tabla');

	switch (sensorOp){
		case "1":
			if (dataType==1) {
				tabla += "<tr class=\"tb-r\"><td>CO2</td>";
				tabla += "<td>Tiempo de operación</td></tr>"
			}
			else {
				tabla += "<tr class=\"tb-r\"><td>CO2</td>";
				tabla += "<td>Grafica</td></tr>"
			}
			contenid.innerHTML = tabla;
		break;

		case "2":
		if (dataType==1) {
				tabla += "<tr class=\"tb-r\"><td>CH4</td>";
				tabla += "<td>Tiempo de operación</td></tr>"
			}
			else {
				tabla += "<tr class=\"tb-r\"><td>CH4</td>";
				tabla += "<td>Grafica</td></tr>"
			}
			contenid.innerHTML = tabla;
		break;

		case "3":
		if (dataType==1) {
				tabla += "<tr class=\"tb-r\"><td>O2</td>";
				tabla += "<td>Tiempo de operación</td></tr>"
			}
			else {
				tabla += "<tr class=\"tb-r\"><td>O2</td>";
				tabla += "<td>Grafica</td></tr>"
			}
			contenid.innerHTML = tabla;
		break;
		case "4":
		if (dataType==1) {
				tabla += "<tr class=\"tb-r\"><td>H22</td>";
				tabla += "<td>Tiempo de operación</td></tr>"
			}
			else {
				tabla += "<tr class=\"tb-r\"><td>H2S</td>";
				tabla += "<td>Grafica</td></tr>"
			}
			contenid.innerHTML = tabla;
		break;
		case "5":
		if (dataType==1) {
				tabla += "<tr class=\"tb-r\"><td>Presión para la atmosfera</td>";
				tabla += "<td>Tiempo de operación</td></tr>"
			}
			else {
				tabla += "<tr class=\"tb-r\"><td>Presión para la atmosfera</td>";
				tabla += "<td>Grafica</td></tr>"
			}
			contenid.innerHTML = tabla;
		break;
		case "6":
		if (dataType==1) {
				tabla += "<tr class=\"tb-r\"><td>Presión interna de la camara de sensado</td>";
				tabla += "<td>Tiempo de operación</td></tr>"
			}
			else {
				tabla += "<tr class=\"tb-r\"><td>Presión interna de la camara de sensado</td>";
				tabla += "<td>Grafica</td></tr>"
			}
			contenid.innerHTML = tabla;
		break;
		case "7":
		if (dataType==1) {
				tabla += "<tr class=\"tb-r\"><td>Presión entrada a la camara de sensado</td>";
				tabla += "<td>Tiempo de operación</td></tr>"
			}
			else {
				tabla += "<tr class=\"tb-r\"><td>Presión entrada a la camara de sensado</td>";
				tabla += "<td>Grafica</td></tr>"
			}
			contenid.innerHTML = tabla;
		break;
		case "8":
		if (dataType==1) {
				tabla += "<tr class=\"tb-r\"><td>Temperatura interna SCHT</td>";
				tabla += "<td>Tiempo de operación</td></tr>"
			}
			else {
				tabla += "<tr class=\"tb-r\"><td>Temperatura interna SCHT</td>";
				tabla += "<td>Grafica</td></tr>"
			}
			contenid.innerHTML = tabla;
		break;
		case "9":
		if (dataType==1) {
				tabla += "<tr class=\"tb-r\"><td>Temperatura principal</td>";
				tabla += "<td>Tiempo de operación</td></tr>"
			}
			else {
				tabla += "<tr class=\"tb-r\"><td>Temperatura principal</td>";
				tabla += "<td>Grafica</td></tr>"
			}
			contenid.innerHTML = tabla;
		break;
		case "10":
		if (dataType==1) {
				tabla += "<tr class=\"tb-r\"><td>Temperatura ambiental    </td>";
				tabla += "<td>Tiempo de operación</td></tr>"
			}
			else {
				tabla += "<tr class=\"tb-r\"><td>Temperatura ambiental</td>";
				tabla += "<td>Grafica</td></tr>"
			}
			contenid.innerHTML = tabla;
		break;
		case "11":
		if (dataType==1) {
				tabla += "<tr class=\"tb-r\"><td>Humedad</td>";
				tabla += "<td>Tiempo de operación</td></tr>"
			}
			else {
				tabla += "<tr class=\"tb-r\"><td>Humedad</td>";
				tabla += "<td>Grafica</td></tr>"
			}
			contenid.innerHTML = tabla;
		break;

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



