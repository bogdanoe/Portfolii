import React from 'react';
import PropTypes from "prop-types";
import Movies from "../../components/Movies/Movies.jsx";
import Container from "../../layout/Container/Container.jsx";

const HomePage = ({onFavorite, favorites}) => {

    return (
        <Container>
            <Movies onFavorite={onFavorite} favorites={favorites}/>
        </Container>
    );
};

HomePage.propTypes = {
	favorites: PropTypes.array,
    onFavorite: PropTypes.func,
}
export default HomePage;