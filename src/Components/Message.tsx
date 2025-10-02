interface Props {
    Heading: string
}

function Message(props: Props) { // Function based component;
    const {Heading= "Himanshu Yadav"} = props
   
    if(1){
        return (
            <h1>Hello {Heading}</h1>
        )
    }else return null;
}

export default Message;