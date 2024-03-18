import './App.css'
import ClienComponent from './components/ClienComponent'
import ContentComponent from './components/ContentComponent'
import NavbarComponentOne from './components/NavbarComponentOne'
import NavbarsComponent from './components/NavbarsComponent'
import davide from './assets/Images/ppl1.jpg'
function App() {

  return (
    <>
      <section className="w-[100vw] h-[100vh]">
        <div className="mt-10 container bg-zinc-500 w-[100vw] h-[80vh] align-center mx-auto rounded-3xl shadow-sm-light">
          <div className="mt-5 container">
            <NavbarComponentOne />
          </div>
          <div className="container bg-pink-300 flex h-[80vh]">
            <NavbarsComponent/>
            <div className="container bg-red-500 rounded-3xl w-[75%]">
              <ContentComponent/>
            </div>
            <div>
              <ClienComponent
                name="David"
                description="Hey tell me about progress of project?"
                profiles={davide}
              />
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default App
