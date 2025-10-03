interface Props {
  text: string,
  onButtonClick: ()=> void
}

function Button({text = "test", onButtonClick} : Props){
    const buttonText = text.length ? text : "Click me";
    return <button
        color="red"
        onClick={onButtonClick}

    >{buttonText}</button>;
}

export default Button;