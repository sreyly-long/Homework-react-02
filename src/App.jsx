import './App.css'
import ClienComponent from './components/ClienComponent'
import ContentComponent from './components/ContentComponent'
import NavbarComponentOne from './components/NavbarComponentOne'
import NavbarsComponent from './components/NavbarsComponent'
import davide from './assets/Images/ppl1.jpg'
import davide1 from './assets/Images/ppl2.jpg'
import davide2 from './assets/Images/ppl3.jpg'
import davide4 from './assets/Images/ppl4.jpg'
import davide5 from './assets/Images/ppl5.jpg'
import davide6 from './assets/Images/ppl6.jpg'
function App() {

  return (
    <>
    <section className="bg-gray-300 w-[100vw] h-[100vh]">
        <div className='flex items-center h-screen'>
          <div className=" container bg-white w-[100vw] h-[80vh] align-center mx-auto rounded-3xl shadow-sm-light">
            <div className="container">
              <NavbarComponentOne />
            </div>
            <div className="grid grid-cols-12">
              <div className=" col-span-1 container flex w-full">
                <NavbarsComponent />
              </div>
              <div className="col-span-11 ">
                <div className='grid grid-cols-12 '>
                  <div className="col-span-9 container bg-gray-100 rounded-3xl w-full h-[430px]">
                    <ContentComponent />
                  </div>
                  <div className=" col-span-3">
                    <ClienComponent 
                      profiles={davide}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default App
