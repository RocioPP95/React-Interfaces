import './App.css'

import Producto from './componentes/Producto'
import ContadorClicks from './componentes/ContadorClicks'
import MiComponente from './componentes/MiComponente';
import SelectorActividades from './componentes/SelectorActividades';
import ListaTareas from './componentes/ListaTareas';


function App() {
  return (
    <div className="container">
      <h1>Mi Tienda Online</h1>
      <h2>Los mejores productos al mejor precio</h2>
      <Producto nombre='Camiseta' precio={19.99} disponible={true} ></Producto>
      <Producto nombre='Pantalones' precio={19.99} disponible={false} ></Producto>
      <Producto nombre='Zapatillas' precio={19.99} disponible={true} ></Producto>
      <Producto nombre='Reloj' precio={19.99} disponible={true} ></Producto>
      <Producto nombre='Gafas de sol' precio={19.99} disponible={false} ></Producto>
      <Producto nombre='Mochila' precio={29.99} disponible={true} ></Producto>

      <ContadorClicks></ContadorClicks>
      <MiComponente></MiComponente>
      <SelectorActividades></SelectorActividades>
      <hr />
      <ListaTareas></ListaTareas>
    </div>
  )

  
}

export default App