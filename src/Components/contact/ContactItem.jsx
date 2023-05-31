
const inputData = {
    name : {
        class : 'input-style',
        placeholder : 'Name',
    },
    email : {
        class : 'input-style',
        placeholder : 'Email',
    },
    messages : {
        class : 'input-style',
        placeholder : 'Messages',
    },
}   


export default function ContactItem(props){
    const item = inputData[props.type];
    return(
        <>
            <div className="inputConteiner">
                <label htmlFor="">{item.placeholder}</label>
                <input type="text" placeholder={item.placeholder}/>
            </div>
        </>
    )
}