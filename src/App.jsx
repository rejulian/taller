import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AgregarTrifasico from './components/AgregarTrifasico'
import Trifasicos from './components/Trifasicos'
import VerTrifasico from './components/VerTrifasico'
import Header from './components/Header'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/buscar' element={<Trifasicos/>}/>
          <Route path='/agregar' element={<AgregarTrifasico/>}/>
          <Route path='/motor/:id' element={<VerTrifasico/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
