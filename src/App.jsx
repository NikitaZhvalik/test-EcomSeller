import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FilmPage from "./pages/FilmPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/film/:id" element={<FilmPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App;
