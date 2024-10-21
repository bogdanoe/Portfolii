import React, {useState} from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import './App.scss'
import Movies from "./components/Movies/Movies.jsx";
import SvgIcon from "./components/SvgIcon/index.js";
// import {Route, Routes} from "react-router-dom";
import AppRouters from './routers'

function App() {
    const [favorites, setFavorite] = useState([])

    const handleFavorite = (item) => {
        return setFavorite((prevState) => {
            if(!prevState.some((prevItem) => prevItem.id === item.id)) {
                return [...prevState, item]
            }else {
               return prevState.filter((prevItem)=>prevItem.id !== item.id )
            }
        })
    }
    /*
    * создаем логику которая будет проверять что бы не добавляли одинаковые
    * фильмы а если пытаемся добавить такой же как уже был добавлен то удаляем его
    * тоесть реализовали еще и логи по которой будем убирать из избраного
    * */

  return (
    <div className="g-page">
      <Header counterFavorite={favorites.length} />
        <main className="g-content">
            {/*<div className="container">*/}
                <AppRouters
                    onFavorite={handleFavorite}
                    favorites={favorites}
                />
                {/*<Movies onFavorite={handleFavorite}/>*/}
                {/*<SvgIcon*/}
                {/*    id="icons--favorite"*/}
                {/*/>*/}
                {/*<SvgIcon*/}
                {/*    id="main--logo"*/}
                {/*/>*/}
                {/*<SvgIcon*/}
                {/*    id="fa"*/}
                {/*/>*/}
            {/*</div>*/}
        </main>
        <Footer/>
    </div>
  )
}

export default App
