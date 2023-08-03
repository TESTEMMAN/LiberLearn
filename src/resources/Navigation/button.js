import './button.css';

function Button(props) {
    return (
        <a className="getStarted" style={{backgroundColor: props.bgColor}} href={props.url} >{props.buttonText}</a>
    );
 }

export default Button;