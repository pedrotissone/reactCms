import './App.css';
// Importando componentes
import NavBarContainer from './componentes/NavBar/NavBarContainer';
import Header from './componentes/Header/Header';
import Products from './componentes/Products/Products';
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //Importamos de la libreria los tres componentes necesarios
import { CartContextProvider } from './context/cartContext';
import FormularioDeAcceso from './componentes/FormularioDeAcceso/FormularioDeAcceso';
import CrearNuevoProducto from './componentes/Products/CrearNuevoProducto';
import Carrousel from './componentes/Carrousel/Carrousel';
import Footer from './componentes/Footer/Footer';
import ModificarPrecioDeProductos from './componentes/Products/ModificarPrecioDeProductos';


function App() {
 

  return (

    <CartContextProvider>       
      

      <BrowserRouter>

        <div className="App">        
  
          <header>
            <Header />
          </header> 


          <Routes>

            <Route path='/' element={

              <>
              <main className='main'>
                <NavBarContainer />
                <h2 className="galeriaTitle">Happiness is only real when shared</h2> 
                <Carrousel/>
              </main>
              <footer className='footer'>
                <Footer/>
              </footer>              
              </>             
              
             }/>           

            <Route path='/Formulario' element={
               
               <FormularioDeAcceso />
               
                }/>            


            {/* /detail/:id significa que CUALQUIER COSA! que yo escriba despues de /detail me va a mostrar el componente definido, en el caso el ItemDetailContainer. NOTA: esa ruta dinamica (/:x) React la va a guardar en su memoria */}
            <Route path="/detail/:id" element={
            <>
              <ItemDetailContainer />
              <footer className='footer'>
                <Footer/>
              </footer>
            </>
                      }/>

            <Route path="/category/:idCategory" element={
              <>
                <main className='main'>
                  <NavBarContainer />
                  <h2 className="galeriaTitle">Happiness is only real when shared</h2> 
                </main>       
                <Products />
                <footer className='footer'>
                  <Footer/>
                </footer>              
              </>  
            }
            />           

            <Route path='/CrearNuevoProducto' element=
            {
              <CrearNuevoProducto />
            }
            />

            <Route path='/ModificarPrecioDeProductos' element=
            {
              <>
               <ModificarPrecioDeProductos />
              </>
            }
            />

            {/* Esta ruta * es para probar errores, ya que si no selecciono ninguna de las rutas definidas va a mostrar por defecto esa siempre. Igual la tengo comentada y solo la uso si necesito corroborar que las rutas funcionan o no */}
            <Route path="*" element={<h1 className='paginaEnConstruccion'>Página en construcción</h1>} />
      
          </Routes>

        </div>

      </BrowserRouter>

          
    </CartContextProvider>

  );
}

export default App;


