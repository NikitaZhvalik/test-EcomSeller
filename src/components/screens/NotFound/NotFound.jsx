import { Link } from "react-router-dom";
import style from "./style.module.css";

const NotFound = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>404 Error</h1>
            <p className={style.text}>Oops! The page you are looking for could not be found.</p>
            <Link to={'/'}>
                <button className={style.link}>
                    Back Homepage
                </button>
            </Link>
      </div>
    )
}
 
export default NotFound;