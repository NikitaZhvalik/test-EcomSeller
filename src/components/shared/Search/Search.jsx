import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../../store/queryReducer";
import { getFilms } from "../../../store/filmsReducer";
import style from "./style.module.css";

const Search = () => {
	const dispatch = useDispatch()
	const query = useSelector((state) => state.query.query)

	function handleSubmit(event) {
		event.preventDefault()
		if (query.length >= 4) {
			dispatch(getFilms({query}))
		} else {
			alert("Please enter at least 4 letters")
		}
	}

	return (
		<form onSubmit={handleSubmit} className={style.search}>
			<input onChange={(e) => dispatch(setQuery(e.target.value))} className={style.input} placeholder="Find a movie..." required="" type="search" />
			<button type="submit" className={style.btn}>
			<svg className={style.svg} width="17" height="16" fill="none" xmlns="<http://www.w3.org/2000/svg>" role="img" aria-labelledby="search">
				<path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
			</svg>
			</button>
		</form>
	)
}

export default Search;
