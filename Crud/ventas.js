const crearVenta = () => {
    var ide = parseInt(document.getElementById('idVenta').value);
    var fecha = document.getElementById('fecha').value;
    var nombreCliente = document.getElementById('nombreCliente').value;
    var nombreProducto = document.getElementById('nombreProducto').value;
    var valor = document.getElementById('valor').value;
    var cantidad = document.getElementById('cantidad').value;
  
  
    let data = {
      id: ide,
      fecha: fecha,
      nombreCliente: nombreCliente,
      nombreProducto: nombreProducto,
      valor: valor,
      cantidad: cantidad,
    };
  
    let venta = []; 
    venta = JSON.parse(localStorage.getItem('ventas'));
  
  
    if (venta){
      localStorage.clear();
      venta.push(data);
      localStorage.setItem('ventas', JSON.stringify(venta));
    }else{
      venta = JSON.parse(localStorage.getItem('initialDataVentas'));
      localStorage.clear();
      venta.push(data);
      localStorage.setItem('ventas', JSON.stringify(venta));
    }
    location.reload();
  };
  
  
  //Mostrar ventas
  const mostrarVentas = () =>{
    let tabla = document.getElementById('cuerpoTabla');
   
    let venta = []; 
    venta = JSON.parse(localStorage.getItem('ventas'));
  
    venta ? venta = JSON.parse(localStorage.getItem('ventas')) : venta = JSON.parse(localStorage.getItem('initialDataVentas'));
  
      for (const item of venta) {
         tabla.innerHTML += `
         <tr>
          <td>${item.id}</td>
          <td>${item.fecha}</td>
          <td>${item.nombreCliente}</td>
          <td>${item.nombreProducto}</td>
          <td>${item.valor}</td>
          <td>${item.cantidad}</td>
          <td>${(item.valor * item.cantidad).toFixed(2)}</td>
          <td>${((item.valor * item.cantidad) * 0.19).toFixed(2)}</td>
          <td>
          <button class="btn btn-small text-white"
              style="margin-right: 1px; background-color: #ff5a19;" onClick="eliminarVenta(${item.id})">Borrar</button>
          <button class="btn btn-small text-white"
              style="background-color:#015c8e" onClick="buscarVentaPorId(${item.id})">Editar    </button>
          </td>
          </tr>
        `;
      };
      
  
  };

 
  let buscarPorId = (key, inputArray) => {
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
  
  //eliminar venta
  const eliminarVenta = (id) => {
    let venta = []; 
  
    venta = JSON.parse(localStorage.getItem('ventas'));
  
    venta ? venta = venta : venta = JSON.parse(localStorage.getItem('initialDataVentas'));
    console.log(venta)
    
    let productoV = eliminarPorId(id, venta);
    console.log(productoV);
  
    localStorage.removeItem('ventas');
    localStorage.setItem('ventas', JSON.stringify(productoV));
    location.reload();
  };
   
  //buscar por id 
  const buscarVentaPorId = (id) =>{
    let venta = []; 
    let btnEditar = document.getElementById('buttonEditar');
  
    venta = JSON.parse(localStorage.getItem('ventas'));
  
    venta ? venta = venta : venta = JSON.parse(localStorage.getItem('initialDataVentas'));
    
   
    let productoV = buscarPorId(id, venta)

    
    
    let idV = document.getElementById('idVenta');
    let fechaV = document.getElementById('fecha');
    let nombreClienteV = document.getElementById('nombreCliente');
    let nombreProductoV = document.getElementById('nombreProducto')
    let valorV = document.getElementById('valor');
    let cantidadV = document.getElementById('cantidad');
      
    idV.value = productoV.id;
    fechaV.value = productoV.fecha
    nombreClienteV.value = productoV.nombreCliente
    nombreProductoV.value = productoV.nombreProducto
    valorV.value = productoV.valor
    cantidadV.value = productoV.cantidad
   
    btnEditar.style.display = 'block'   
  };
  
  
  const editarVenta = () =>{
 
  var idV = parseInt(document.getElementById('idVenta').value);
  var fechaV = document.getElementById('fecha').value;
  var nombreClienteV = document.getElementById('nombreCliente').value;
  var nombreProductoV = document.getElementById('nombreProducto').value;
  var valorV = document.getElementById('valor').value;
  var cantidadV = document.getElementById('cantidad').value;

  let venta = []; 

  venta = JSON.parse(localStorage.getItem('ventas'));

  venta ? venta = venta : venta = JSON.parse(localStorage.getItem('initialDataVentas'));
  

  let productoV = buscarPorId(idV, venta);

  let eliminado = eliminarPorId(idV, venta);
 

  productoV.id = idV;
  productoV.fecha = fechaV;
  productoV.nombreCliente = nombreClienteV;
  productoV.nombreProducto = nombreProductoV;
  productoV.valor = valorV;
  productoV.cantidad = cantidadV;

    localStorage.clear();
    eliminado.push(productoV);
    localStorage.setItem('ventas', JSON.stringify(eliminado));
   location.reload();
};