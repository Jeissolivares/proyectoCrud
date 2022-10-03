let clientes = [{
    id: 1,
    nombre: 'Carlos',
    apellido: 'Marquez',
    direccion: 'calle c 123',
    email: 'carlosM@gmail.com',
    ciudad: 'Springfield'
  }];

  let ventas = [{
    id: 1,
    fecha: "2022-09-29",  
    nombreCliente: "Pablo Escobar",
    nombreProducto: "Raptor 150 F",
    valor: 200000000,
    cantidad: 2,
    subtotal: (3000 * 2),
    netoConIva: ((3000 * 2)*0.019)
  }];

const mostrarNav = (header) => {
    let nav = `<nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a style="color: white; margin-left: 3%;" class="navbar-brand" href="./index.html">Carro Facilito</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul  style="margin-left: 75%;" class="navbar-nav">
            <li class="nav-item">
              <a style="color: white" class="nav-link active" href="./index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a style="color: white" class="nav-link" href="./clientes.html">Clientes</a>
            </li>
            <li class="nav-item">
              <a style="color: white" class="nav-link" href="./ventas.html">Ventas</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
  
    let h = document.getElementById(header);
  
    h.innerHTML = nav;
    localStorage.setItem('initialDataClientes', JSON.stringify(clientes));
    localStorage.setItem('initialDataVentas', JSON.stringify(ventas));
  };
  