import classNames from "classnames";
import style from "./style.module.css"

const FilterBtn = ({children, className, onClick, active, disabled}) => {
    const classes = classNames(style.btn, className, {active})

    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            <span style={{borderBottom: active ? "2px solid #ffc107" : "none", width: "100%" }}>
                {children}
            </span>
        </button>
    )
}

export default FilterBtn;
