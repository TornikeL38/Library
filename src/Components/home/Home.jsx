import "../css/style.css"
import bussinessPic from "../../images/pexels-pixabay-265087 1.png"

export default function Home(){
    return(
        <div className="homeConteiner">
            <div className="homePageLeftSide">
                <h1>how to start your own bussiness ! Will you ready ?</h1>
                <h4>WE help individuals or Organizations to start theirbusiness or start-up by giving them indepth theory and practical sessions.</h4>
                <button className="forButtons">Join Now</button>
            </div>
            <img src={bussinessPic} alt="bussinessPic" />
        </div>
    )
}