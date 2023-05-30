
// const inputData = {
//     name : {
//         class : 'input-style',
//         placeholder : 'Name',
//     },
//     email : {
//         class : 'input-style',
//         placeholder : 'Email',
//     },
//     messages : {
//         class : 'input-style',
//         placeholder : 'messages',
//     },




export default function Contact(props){
    // const item = inputData[props.type];
    return(
        <div className="contactWrapper">
            <h2 className="aboutUs">Contact</h2>
            <div className="inputConteiner">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Name" />
            </div>
            <div className="inputConteiner">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Email" />
            </div>
            <div className="inputConteiner">
                <label htmlFor="">Message</label>
                <input type="text" placeholder="Message" />
            </div>
            <div className="buttonConteiner">
                <button className="forButtons">Send</button>
            </div>
        </div>
    )
}
