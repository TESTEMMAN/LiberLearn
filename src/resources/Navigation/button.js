import './button.css';

function Button(props) {
    return (
        <a className="getStarted" target="_blank" rel="noopener noreferrer" style={{backgroundColor: props.bgColor}} href={props.url} >{props.buttonText}</a>
    );
 }

export default Button;
