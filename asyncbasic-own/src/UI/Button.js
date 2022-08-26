import classes from './Button.module.css';

const Button =(props)=>{
    return (
        <button className={`${classes.button} ${props.clzN}`}>{props.children}</button>
    );
}

export default Button;