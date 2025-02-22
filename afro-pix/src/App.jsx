import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Home } from './pages/home'
import { BusinessSelected } from './components/businessSelected'

function App() {
  const [count, setCount] = useState(0)

  return <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/business' element={<BusinessSelected/>}/>
          </Routes>
        </BrowserRouter>
    
}

export default App
