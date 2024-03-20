import Cards from "./Cards";
import FormComponent from "./FormComponent";
const ContentComponent = () => {
    const addCard = (newCard)=>{
        setCards([...cards, newCard]);
      }
    return (
            <section className=" gap-10 ">
                <section className="  ">
                    <div className="navbar">
                        <div className="navbar-start">
                            <a className="btn btn-ghost text-xl">Projects</a>
                        </div>
                        <button className="navbar-end " data-dropdown-toggle="dropdown">                   
                                <FormComponent onAddCard={addCard}/>                         
                        </button>
                    </div>
                    {/* button for finish project */}
                    <section className="gap-5 flex justify-center">
                        <button className="btn bg-violet-200">
                            <i class="fa-solid fa-gift"></i>
                            Finish Project <br />13
                        </button>
                        <button className="btn bg-violet-300">
                            <i class="fa-solid fa-download"></i>
                            Upcoming <br/>13
                        </button>
                        <button className="btn bg-pink-400">
                            <i class="fa-solid fa-bars"></i>
                            Total Project <br />13
                        </button>
                        <button className="btn btn-error">
                            <i class="fa-solid fa-spinner"></i>
                            In Progess <br />4
                        </button>
                    </section>
                    <section className="flex mt-5 gap-5 justify-center">
                        <Cards  
                            title="ABA"
                            description="Web Design"
                            butt="Full time"          
                        />
                        <Cards
                            title="APD"
                            description="Mobile App"
                            butt="Part time"
                         />
                        <Cards 
                            title="KOSIGN"
                            description="UX-UI Design"
                            butt="Full time"
                        />
                    </section>
                </section>
            </section>
        
    )
}
export default ContentComponent;