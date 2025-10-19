interface Props {
  text: string,
  className?: string
  onButtonClick?: ()=> void
}

function Button({text = "test", onButtonClick, className} : Props){
    const buttonText = text.length ? text : "Click me";
    return <button
        color="red"
        className={className}
        onClick={onButtonClick}

    >{buttonText}</button>;
}

export default Button;