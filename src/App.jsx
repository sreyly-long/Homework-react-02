import './App.css'
import ClienComponent from './components/ClienComponent'
import ContentComponent from './components/ContentComponent'
import NavbarComponentOne from './components/NavbarComponentOne'
import NavbarsComponent from './components/NavbarsComponent'
import { useState } from "react";
import ppl1 from './assets/Images/ppl1.jpg'
import ppl2 from './assets/Images/ppl2.jpg'
import ppl3 from './assets/Images/ppl3.jpg'
import ppl4 from './assets/Images/ppl4.jpg'
import ppl5 from './assets/Images/ppl5.jpg'
import ppl6 from './assets/Images/ppl6.jpg'


function App() {
  const [cards, setCards] = useState([])
 
  const [data, setData] = useState([
    {
      id: 1,
      img: ppl1,
      name: "Davide",
      message: "Hey tell me about progress of project? Wating for your respones",
      date: "21 July",
      like: false
    },
    {
      id: 2,
      img: ppl2,
      name: "Stephanie",
      message: "I got your first assigment. It was quite good. You can start work on next assigment",
      date: "19 July",
      like: true
    },
    {
      id: 3,
      img: ppl3,
      name: "William",
      message: "I want some change in previous work you sent me.Wating for your reply",
      date: "15 July",
      like: false
    },
    {
      id: 4,
      img: ppl4 ,
      name: "Alona",
      message: "I am really impressed from your work.Keep doing great work",
      date: "15 July",
      like: true
    },
    {
      id: 5,
      img: ppl5 ,
      name: "Hira",
      message: "When you  start redsign of app?Previous project was perfect.",
      date: "13 July",
      like: false
    },
    {
      id: 6,
      img: ppl6 ,
      name: "Ghulam",
      message: "I want to let you know I am agree on that project.Looking for antheer good one",
      date: "11 July",
      like: false
    },
    {
      id: 7,
      img: ppl2,
      name: "Mina",
      message: "You did a great job for the previous project.Looking forward",
      date: "13 July",
      like: true
    },
    {
      id: 8,
      img: ppl1,
      name: "Noona",
      message: "How is the project going? I'm waiting to see...",
      date: "13 July",
      like: true
    },
  ])

  return (
    <>
     <section className="bg-gray-300 w-screen h-screen">
        <div className='flex items-center h-screen'>
          <div className="container bg-white w-screen h-[80vh] align-center mx-auto rounded-3xl shadow-sm-light overflow-hidden">
            <div className="container">
              <NavbarComponentOne />
            </div>
            <div className="grid grid-cols-12 h-full">
              <div className="col-span-1 container flex w-full">
                <NavbarsComponent />
              </div>
              <div className="col-span-11">
                <div className='grid grid-cols-12 h-full'>
                  <div className="col-span-9 container bg-gray-100 rounded-3xl w-full h-full overflow-auto">
                    <ContentComponent  cards={cards}/>
                  </div>
                  <div className="col-span-3 container bg-gray-100 rounded-3xl w-full h-full overflow-auto">
                    <div className="max-h-[430px] overflow-y-auto">
                      {data.map((datas) => (
                        <ClienComponent
                          key={datas.id} 
                          img={datas.img}
                          name={datas.name}
                          message={datas.message}
                          date={datas.date}
                        
                        />
                      ))}
                    </div>
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
