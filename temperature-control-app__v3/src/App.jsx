import {useEffect, useState} from 'react'
import WidgetWrapper from "./components/WidgetWrapper/WidgetWrapper.jsx";
import { ErrorBoundary } from "react-error-boundary";
import RootRoters from './routers'

const App = () => {
    // const [temperature, setTemperature] = useState(20);
    // const handleHot = () => {
    //     setTemperature((tem) => {
    //         if (tem < 29) {
    //             return tem + 1
    //         }
    //         return tem
    //     })
    //     if (temperature === 26) {
    //         setIsVeryHot(true)
    //     }
    // }
    // const handleCold = () => {
    //     setTemperature((tem) => {
    //         if (tem > 0) {
    //             return tem - 1
    //         }
    //         return tem
    //     })
    // }

    return (
        // <RootRoters temperature={temperature}  onHot={handleHot} onCold={handleCold} />
        <RootRoters />
    )
}

export default App
