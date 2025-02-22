import './App.css'
import Body from './Body/body.jsx'
import Header from './Header/header.jsx'
import Footer from './Footer/footer.jsx'
import { DatosProvider } from './datosContext.jsx'

function App() {

  return (
    <>
      <DatosProvider>
        <Header />
        <Body />
        <Footer />
      </DatosProvider>
    </>
  )
}

export default App
