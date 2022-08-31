fetch('http://jsonplaceholder.typicode.com/users')
	  .then(response => response.json())
	  .then(json => get_users(json))
	  .catch(error => console.log(error))
	
	function get_users(datos){
		datos.forEach((e)=>{
			let fila = document.createElement('tr');
			
			let id = document.createElement('td');
			id.textContent = e.id
			
			let name = document.createElement('td');
			name.textContent = e.name
			
			let username = document.createElement('td');
			username.textContent = e.username
			
			let email = document.createElement('td');
			email.textContent = e.email
			
			let address = document.createElement('td');
			address.textContent = e.address.street
			
			fila.append(id, name, username, email, address);
			document.querySelector('.table').querySelector('tbody').appendChild(fila)
		})
	}