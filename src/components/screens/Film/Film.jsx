import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch"
import style from "./style.module.css";

const Film = () => {
    const {id} = useParams()
    const { data } = useFetch(`http://www.omdbapi.com/?i=${id}&apikey=41a755ae&plot=full`)
    
    return (
        <>
            {data && 
                <div className="container">
                    <div className={style.content}>
                        <div className={style.wrapper}>
                            <div>
                                <img className={style.img} src={data?.Poster} alt={data.Title}/>
                            </div>
                            <div className={style.descr}>
                                <h1 className={style.title}><span className={style.prev}>Title:</span> {data?.Title}</h1>
                                <p className={style.year}><span className={style.prev}>Year:</span> {data?.Year}</p>
                                <p className={style.runtime}><span className={style.prev}>Runtime:</span> {data?.Runtime}</p>
                                <p className={style.genre}><span className={style.prev}>Genre</span>: {data?.Genre}</p>
                                <p className={style.country}><span className={style.prev}>Country:</span> {data?.Country}</p>
                                <p className={style.actors}><span className={style.prev}>Actors:</span> {data?.Actors}</p>
                                <p className={style.ratings}><span className={style.prev}>Ratings:</span> {data?.Ratings[0]?.Value}</p>
                            </div>
                        </div>
                        
                        <p className={style.plot}><span className={style.prev}>Plot:</span> {data?.Plot}</p>
                        <Link to={'/'}>
                            <button className={style.link}>
                                Back Homepage
                            </button>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}
 
export default Film;