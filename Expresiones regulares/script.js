function validar_pass(contrasena){
	let patron = /^(?=.*[a-z])(?=.*[A-Z])\S{12,}$/;
	
	if(patron.test(contrasena)){
		console.log('La contraseña es válida');
	}else{
		console.log('La contraseña debe tener al menos 12 caracteres, una mayúscula y una minúscula')
	}
}

validar_pass('Contraseñasegura');
validar_pass('invalida');