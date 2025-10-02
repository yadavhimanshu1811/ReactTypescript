interface Props {
  text: string
}

function Button({text = "test"} : Props){
    const buttonText = text.length ? text : "Click me";
    return <button
        color="red"

    >{buttonText}</button>;
}

export default Button;