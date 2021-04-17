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



