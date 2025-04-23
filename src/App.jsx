import './App.css'
import Body from './Body/body.jsx'
import Header from './Header/header.jsx'
import Footer from './Footer/footer.jsx'
import Menu from './Body/Menu/menu.jsx'
import { DatosProvider } from './datosContext.jsx'

function App() {

  return (
    <div className="app">
      <DatosProvider>
        <Header />
        <Body />
        <Menu/>
        <Footer />
      </DatosProvider>
    </div>
  )
}

export default App
