//*************************************************
//				Declaraciones
//*************************************************
let btn1DOM = document.getElementById('showDiv1');
let btn2DOM = document.getElementById('showDiv2');
let btn3DOM = document.getElementById('showDiv3');
let btn4DOM = document.getElementById('showDiv4');
let btn5DOM = document.getElementById('showDiv5');
let btn6DOM = document.getElementById('showDiv6');
//************************************************
let inputDOM1 = document.getElementById('in_box1');
let inputDOM2 = document.getElementById('in_box2');
let inputDOM3 = document.getElementById('in_box3');
let inputDOM4 = document.getElementById('in_box4');
let inputDOM5 = document.getElementById('in_box5');
let inputDOM6 = document.getElementById('in_box6');
//*************************************************
let btnADOM1 = document.getElementById('btnA1');
let btnADOM2 = document.getElementById('btnA2');
let btnADOM3 = document.getElementById('btnA3');
let btnADOM4 = document.getElementById('btnA4');
let btnADOM5 = document.getElementById('btnA5');
let btnADOM6 = document.getElementById('btnA6');
//*************************************************
let outputDOM1 = document.getElementById('out1');
let outputDOM2 = document.getElementById('out2');
let outputDOM3 = document.getElementById('out3');
let outputDOM4 = document.getElementById('out4');
let outputDOM5 = document.getElementById('out5');
let outputDOM6 = document.getElementById('out6');
//*************************************************
let popInfo1 = document.getElementById('btnA1');
let popInfo2 = document.getElementById('btnA2');
let popInfo3 = document.getElementById('btnA3');
let popInfo4 = document.getElementById('btnA4');

let ovlInfo1 = document.getElementById('overlay-info1');
let ovlInfo2 = document.getElementById('overlay-info2');
let ovlInfo3 = document.getElementById('overlay-info3');
let ovlInfo4 = document.getElementById('overlay-info4');

let winInfo1 = document.getElementById('pop_info1');
let winInfo2 = document.getElementById('pop_info2');
let winInfo3 = document.getElementById('pop_info3');
let winInfo4 = document.getElementById('pop_info4');

let aceptarInfo1 = document.getElementById('btn11');
let aceptarInfo2 = document.getElementById('btn21');
let aceptarInfo3 = document.getElementById('btn31');
let aceptarInfo4 = document.getElementById('btn41');
let closeInfo1 = document.getElementById('btn12');
let closeInfo2 = document.getElementById('btn22');
let closeInfo3 = document.getElementById('btn32');
let closeInfo4 = document.getElementById('btn42');
let msg = document.getElementById('msg-pop')
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
//*************************************************
//		Botones aceptar Ctl de valvúlas
//*************************************************
btnADOM1.addEventListener('click', function(){
	aceptarInfo1.addEventListener('click',function(){
		outputDOM1.innerHTML = inputDOM1.value + "%";
		ovlInfo1.classList.remove('active');
		winInfo1.classList.remove('active');
	});
	closeInfo1.addEventListener('click', function(e){
		e.preventDefault();
		ovlInfo1.classList.remove('active');
		winInfo1.classList.remove('active');
	});
});
btnADOM2.addEventListener('click', function(){
	aceptarInfo2.addEventListener('click',function(){
		outputDOM2.innerHTML = inputDOM2.value + "%";
		ovlInfo2.classList.remove('active');
		winInfo2.classList.remove('active');
	});
	closeInfo2.addEventListener('click', function(e){
		e.preventDefault();
		ovlInfo2.classList.remove('active');
		winInfo2.classList.remove('active');
	});	
});
btnADOM3.addEventListener('click', function(){
	aceptarInfo3.addEventListener('click',function(){
		outputDOM3.innerHTML = inputDOM3.value + "%";
		ovlInfo3.classList.remove('active');
		winInfo3.classList.remove('active');
	});
	closeInfo3.addEventListener('click', function(e){
		e.preventDefault();
		ovlInfo3.classList.remove('active');
		winInfo3.classList.remove('active');
	});	
});
btnADOM4.addEventListener('click', function(){
	aceptarInfo4.addEventListener('click',function(){
		outputDOM4.innerHTML = inputDOM1.value + "%";
		ovlInfo4.classList.remove('active');
		winInfo4.classList.remove('active');
	});
	closeInfo4.addEventListener('click', function(e){
		e.preventDefault();
		ovlInfo4.classList.remove('active');
		winInfo4.classList.remove('active');
	});
});
btnADOM5.addEventListener('click', function(){
	outputDOM5.innerHTML = inputDOM5.value + "%";	
});
btnADOM6.addEventListener('click', function(){
	outputDOM6.innerHTML = inputDOM6.value + "%";	
});
//*************************************************
//					POPUPS
//*************************************************
popInfo1.addEventListener('click', function(){
	ovlInfo1.classList.add('active');
	winInfo1.classList.add('active');
});
popInfo2.addEventListener('click', function(){
	ovlInfo2.classList.add('active');
	winInfo2.classList.add('active');
});
popInfo3.addEventListener('click', function(){
	ovlInfo3.classList.add('active');
	winInfo3.classList.add('active');
});
popInfo4.addEventListener('click', function(){
	ovlInfo4.classList.add('active');
	winInfo4.classList.add('active');
});

