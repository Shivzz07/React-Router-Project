
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Outlet  />  
      {/* ^using this we did nesting and routting and the above and belowe component doesn't change when this is applied  */}
      <Footer />
    </>
  )
}

export default App
