import classNames from "classnames";
import style from "./style.module.css";

const Title = ({text, className}) => {
    const classes = classNames(style.title, className)

    return (
        <h1 className={classes}>{text}</h1>
    )
}
 
export default Title;