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
				backgroundColor: "rgba(254, 193, 143)",
				borderColor: "rgba(255, 124, 17)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDash0ffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "rgba(75,192,192,1)",
				pointBackgroundColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(8, 4, 0)",
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



