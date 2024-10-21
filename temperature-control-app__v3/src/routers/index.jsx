import {Routes,Route} from 'react-router-dom'
import HomePage from "../pages/PageHome/HomePage.jsx";
import NotPage from "../pages/NotPage/NotPage.jsx";
import PageWeatherDashboard from "../pages/PageWeatherDashboard/PageWeatherDashboard.jsx";
import PageWeatherCity from "../pages/PageWeatherCity/PageWeatherCity.jsx";
import PageRooms from "../pages/PageRooms/PageRooms.jsx";
import PageBadroom from "../pages/PageBadroom/PageBadroom.jsx";
import PageChildren from "../pages/PageChildren/PageChildren.jsx";

export default ({temperature, onHot, onCold}) => {
    return (
        <Routes>
            {/*<Route index element={*/}
            {/*    <HomePage*/}
            {/*        temperature={temperature}*/}
            {/*        onHot={onHot}*/}
            {/*        onCold={onCold}*/}
            {/*    />*/}
            {/*} />*/}
            {/*<Route path="/" element={}>*/}

            {/*<Route path={"/home"} element={*/}
            {/*    <HomePage*/}
            {/*        temperature={temperature}*/}
            {/*        onHot={onHot}*/}
            {/*        onCold={onCold}/>*/}
            {/*}*/}
            {/*/>*/}

            {/*<Route path={"/"} element={<PageBadroom/>}/>*/}
            <Route index element={<PageBadroom/>}/>
            <Route path={"/home"} element={<PageRooms/>}/>
            <Route path={"/home/room"} element={<PageBadroom/>}/>
            <Route path={"/home/baby-room"} element={<PageChildren/>}/>
            <Route path={"/weather"} element={<PageWeatherDashboard/>}/>
            <Route path={"/weather/:city"} element={<PageWeatherCity/>}/>
            <Route path="*" element={<NotPage />} />
        </Routes>
    )
}