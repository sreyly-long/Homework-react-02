import './App.css'
import ContentComponent from './components/ContentComponent'
import NavbarComponentOne from './components/NavbarComponentOne'
import NavbarsComponent from './components/NavbarsComponent'

function App() {

  return (
    <>
      <section className="w-[100vw] h-[100vh]">
        <div className="mt-10 container bg-zinc-500 w-[80vw] h-[80vh] align-center mx-auto rounded-3xl shadow-sm-light">
          <div className="mt-5 container">
            <NavbarComponentOne />
          </div>
          <div className="container bg-pink-300 flex h-[80vh]">
            <NavbarsComponent/>
            <div className="container bg-red-500 rounded-3xl w-[75%]">
              <ContentComponent/>
            </div>

          </div>
        </div>
      </section>
      {/* <section >
      <NavbarComponentOne/>
    </section>

    <section className='container m-auto grid grid-cols-3'>
    <div>
    <ContentComponent/>
    </div>
   
    </section> */}

    </>
  )
}

export default App
