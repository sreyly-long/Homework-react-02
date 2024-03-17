import './App.css'
import ContentComponent from './components/ContentComponent'
import NavbarComponentOne from './components/NavbarComponentOne'
import NavbarsComponent from './components/NavbarsComponent'

function App() {

  return (
    <>
    <section >
      <NavbarComponentOne/>
    </section>
    <section className='container m-auto grid grid-cols-2'>
     <ContentComponent/>
   
    </section>
    
    </>
  )
}

export default App
