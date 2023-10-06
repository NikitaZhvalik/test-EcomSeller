import { Link } from "react-router-dom";
import Search from "../../shared/Search/Search";
import logo from "../../../assets/imgs/header/imdb.png"
import logoPro from "../../../assets/imgs/header/imdbPro.png"
import style from "./style.module.css";

const Header = () => {
    return (
        <div className={style.header}>
            <Link to={'/'}>
                <img src={logo} alt="logo" />
            </Link>
            <Search />
            <Link to={'#'}>
                <img src={logoPro} alt="logoPro" />
            </Link>
            <Link to={'#'}>
                <p className={style.favorites}>WatchList</p>
            </Link>
            <Link to={'#'}>
                <p className={style.auth}>Sign In →</p>
            </Link>
            <select className={style.select} name="languages" id="languages">
                <option value="En">En</option>
                <option value="Ru">Ru</option>
            </select>
        </div>
    )
}
 
export default Header;