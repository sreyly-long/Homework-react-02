import { useState } from "react";
import Cards from "./Cards";
import FormComponent from "./FormComponent";
const ContentComponent = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            name: "Web Designing",
            type: "Full Time",
            startDate: "12-12-2022",
            endDate: "01-03-2023",
            company: "ABA",
            detail: "I'm working on frontEnd Design using ReactJGS with TailwinCSS"

        },
        {
            id: 2,
            name: "Mobile App",
            type: "Part Time",
            startDate: "01-01-2022",
            endDate: "03-04-2022",
            company: "APD",
            detail: "I am working as a Mobile app developer for an e-commerce project."
        },
        {
            id: 3,
            name: "UX-UI Design",
            type: "Freelance",
            startDate: "01-02-2023",
            endDate: "03-04-2024",
            company: "KOSIGN",
            detail: "I’m working as a UX-UI designer on 2 projects there. One is Leaving management System and another one is E-commerce project."
        }

    ]);
    const addCard = (newCard) => {
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
                        Upcoming <br />13
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
                    {
                        cards.map((Card) => (
                            <Cards
                                key={Card.id}
                                company={Card.company}
                                title={Card.name}
                                date={Card.startDate}
                                type={Card.type}
                            />))

                    }

                </section>
            </section>
        </section>

    )
}
export default ContentComponent;