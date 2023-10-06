import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getFilms } from "../../../../store/filmsReducer";
import { useEffect } from "react";
import Title from "../../../shared/Title/Title";
import FilterBtns from "../FilterBtns/FilterBtns";
import style from "./style.module.css";

const Films = () => {
    const dispatch = useDispatch()

    const films = useSelector((state) => state.films.films)

    useEffect(() => {
        if (!films?.Search) {
            const query = "star"
            dispatch(getFilms({query}))
        }
    }, [])

    return (
        <div className={style.films}>
            <Title text={"What to Watch - IMDb"} />
            <FilterBtns />
            {films?.Error === "Movie not found!" ? <div className={style.notFound}>Sorry, but we couldn't find the movie matching your request.</div> : ""}
            <ul className={style.filmsBox}>
                {films?.Search?.map((film) => (
                    <li key={film.imdbID} className={style.film}>
                        <Link to={`/film/${film.imdbID}`}>
                            <img className={style.img} src={film.Poster} alt={film.Title} />
                            <div className={style.content}>
                                <p className={style.date}>{film.Year}</p>
                                <h2 className={style.title}>{film.Title}</h2>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Films;
