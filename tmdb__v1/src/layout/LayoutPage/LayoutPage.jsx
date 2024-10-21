import React from 'react';
import {Outlet} from 'react-router-dom'
import Container from "../Container/Container.jsx";

const LayoutPage = () => {
    return (
        <div className="g-page">
            <Container>
                <Outlet/>
            </Container>
        </div>
    );
};

export default LayoutPage;
