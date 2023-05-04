import React from 'react'

const Header = () => {
  return (
        
<div className="jumbotron p-3" style={{backgroundColor:'#212529'}}>
    <div className="well text-center">
    </div>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <h4>
            <p className="navbar-nav" style={{color:'white', textDecoration:'underline'}}> razon social</p>
        </h4>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/clientes">Clientes</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/view_art_tmp">Fact. Electrónica</a>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbardrop" role="button" data-bs-toggle="dropdown">
                        Tablas
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/rubros">Rubros</a></li>
                        <li><a className="dropdown-item" href="/proveedores">Proveedores</a></li>
                    </ul>
                </li>
                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbardrop" role="button" data-bs-toggle="dropdown">
                        Articulos
                    </a>
                   
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/articulos">Artículos</a></li>
                        
                        <li className="dropdown-divider"></li>
                           
                        <li><a className="dropdown-item" href="/cargar_stock">Carga Comp. de Proveedores</a></li>
                        <li><a className="dropdown-item" href="/ver_comp_prov/{{ session['fe_hoy'] }}">Listar Comp. de Proveedores</a></li>
                        <li><a className="dropdown-item" href="/nuevo_precio">Cambio de Precios</a></li>
                    </ul> 
                </li>
                

                <li className="nav-item">
                    <a className="nav-link" href="/ver_trabajos">Trabajos</a>
                </li> 

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbardrop"  role="button" data-bs-toggle="dropdown">
                        Informes
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/ver_caja">Caja</a></li>
                        <li><a className="dropdown-item" href="/ver_caja">Hs.Trabajadas</a></li>
                        <li><a className="dropdown-item" href="/ver_caja">Iva Ventas</a></li>
                        <li><a className="dropdown-item" href="/ver_caja">Citi Ventas</a></li>
                        <li><a className="dropdown-item" href="/trabajos">Ingresos</a></li>
                    </ul>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="/buscar">Buscar Trifasico</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/agregar">Agregar Trifasico</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/salir">Salir</a>
                </li>
            </ul>
        </div>
    </nav>
    
</div>
  )
}

export default Header