

//crear cliente
const crearCliente = () => {
  var ide = parseInt(document.getElementById('id').value);
  var nombre = document.getElementById('nombreCliente').value;
  var apellido = document.getElementById('apellidoCliente').value;
  var direccion = document.getElementById('direccion').value;
  var email = document.getElementById('email').value;
  var ciudad = document.getElementById('ciudad').value;


  let data = {
    id: ide,
    nombre: nombre,
    apellido: apellido,
    direccion: direccion,
    email: email,
    ciudad: ciudad,
  };

  let cliente = []; 
  cliente = JSON.parse(localStorage.getItem('data'));


  if (cliente){
    localStorage.clear();
    cliente.push(data);
    localStorage.setItem('data', JSON.stringify(cliente));
  }else{
    cliente = JSON.parse(localStorage.getItem('initialDataClientes'));
    localStorage.clear();
    cliente.push(data);
    localStorage.setItem('data', JSON.stringify(cliente));
  }
  location.reload();
};

//Mostrar clientes
const mostrarClientes = () =>{
  let tabla = document.getElementById('cuerpoTabla');
 
  let cliente = []; 
  cliente = JSON.parse(localStorage.getItem('data'));

  cliente ? cliente = JSON.parse(localStorage.getItem('ventas')) : cliente = JSON.parse(localStorage.getItem('initialDataClientes'));

    for (const item of cliente) {
       tabla.innerHTML += `
       <tr>
        <td>${item.id}</td>
        <td>${item.nombre}</td>
        <td>${item.apellido}</td>
        <td>${item.direccion}</td>
        <td>${item.email}</td>
        <td>${item.ciudad}</td>
        <td>
        <button class="btn btn-small text-white"
            style="margin-right: 1px; background-color: #ff5a19;" onClick= "eliminarCliente(${item.id})">Borrar</button>
        <button class="btn btn-small text-white"
            style="background-color:#015c8e" onClick="buscarClientePorId(${item.id})">Editar </button>
        </td>
        </tr>
      `;
    };
    

};

let buscarPorIdentificacion = (key, inputArray) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].id === key) {
      return inputArray[i];
    }
  }
};

//eliminar por Id
let eliminarPorId = (key, inputArray) => {
  var todo = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].id !== key) {
      todo.push(inputArray[i]);
    }
  }
  return todo;
};

//eliminar cliente
const eliminarCliente = (id) => {
  let cliente = []; 

  cliente = JSON.parse(localStorage.getItem('data'));

  cliente ? cliente = cliente : cliente = JSON.parse(localStorage.getItem('initialDataClientes'));
  
  let usuario = eliminarPorId(id, cliente);
  console.log(usuario);

  localStorage.removeItem('data');
  localStorage.setItem('data', JSON.stringify(usuario));
  location.reload();
};

//buscar por id 
const buscarClientePorId = (id) =>{
  let cliente = []; 
  let btnEditar = document.getElementById('buttonEditar');

  cliente = JSON.parse(localStorage.getItem('data'));

  cliente ? cliente = cliente : cliente = JSON.parse(localStorage.getItem('initialDataClientes'));

  let usuario = buscarPorIdentificacion(id, cliente)

  let idM = document.getElementById('id');
  let nombreM = document.getElementById('nombreCliente');
  let apellidoM = document.getElementById('apellidoCliente');
  let direccionM = document.getElementById('direccion')
  let emailM = document.getElementById('email');
  let ciudadM = document.getElementById('ciudad');

  idM.value = usuario.id;
  nombreM.value = usuario.nombre
  apellidoM.value = usuario.apellido
  direccionM.value = usuario.direccion
  emailM.value = usuario.email
  ciudadM.value = usuario.ciudad
 
  btnEditar.style.display = 'block' 

};

const editarCliente = () =>{
 
  var idE = parseInt(document.getElementById('id').value);
  var nombreE = document.getElementById('nombreCliente').value;
  var apellidoE = document.getElementById('apellidoCliente').value;
  var direccionE = document.getElementById('direccion').value;
  var emailE = document.getElementById('email').value;
  var ciudadE = document.getElementById('ciudad').value;

  let cliente = []; 

  cliente = JSON.parse(localStorage.getItem('data'));

  cliente ? cliente = cliente : cliente = JSON.parse(localStorage.getItem('initialDataClientes'));
  console.log(cliente)

  let usuario = buscarPorIdentificacion(idE, cliente);

  let eliminado = eliminarPorId(idE, cliente);
 

  usuario.id = idE;
  usuario.nombre = nombreE;
  usuario.apellido = apellidoE;
  usuario.direccion = direccionE;
  usuario.email = emailE;
  usuario.ciudad = ciudadE;

    localStorage.clear();
    eliminado.push(usuario);
    localStorage.setItem('data', JSON.stringify(eliminado));
    location.reload();
};
