import ContactItem from "./ContactItem"




export default function Contact(){

    return(
        <div className="contactWrapper">
            <h2 className="aboutUs">Contact</h2>
            <ContactItem type="name"/>
            <ContactItem type="email"/>
            <ContactItem type="messages" />
            <div className="buttonConteiner">
                <button className="forButtons">Send</button>
            </div>
        </div>
    )
}
