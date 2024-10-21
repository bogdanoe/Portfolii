import {Routes,Route} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage.jsx";
import NotePage from "../pages/NotPage/NotePage.jsx";
import CinemaPage from "../pages/CinemaPage/CinemaPage.jsx";
import TvPage from "../pages/TvPage/TvPage.jsx";
import FavoritePage from "../pages/FavoritePage/FavoritePage.jsx";
import AllTvPage from "../pages/AllTvPage/AllTvPage.jsx";
import AllCinemaPage from "../pages/AllCinemaPage/AllCinemaPage.jsx";

export default ({onFavorite,favorites}) => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage onFavorite={onFavorite} favorites={favorites}/>}/>
            {/*<Route index />*/}
            <Route path={"/favorite"} element={<FavoritePage data={favorites} onFavorite={onFavorite} />} />
            <Route path={"/tv/:id"} element={<TvPage/>} />
            <Route path={"/cinema/:id"} element={<CinemaPage/>} />
            <Route path={"/tv/all/"} element={<AllTvPage favorites={favorites} onFavorite={onFavorite}/>} />
            <Route path={"/cinema/all"} element={<AllCinemaPage favorites={favorites} onFavorite={onFavorite}/>} />
            <Route path={"*"} element={<NotePage/>} />
        </Routes>
    )
}