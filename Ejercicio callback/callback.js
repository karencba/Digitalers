function gastoConIva(precio){
  return parseInt(precio * 1.21);
}

function Map(array, callback){  
  let arrayConIva = array.map(callback);
  return arrayConIva;
}

console.log(Map([100,105,121],gastoConIva));