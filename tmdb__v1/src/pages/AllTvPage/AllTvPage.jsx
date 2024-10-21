import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import PosterCard from "../../components/PosterCard/PosterCard.jsx";
import Button from "../../components/Button/Button.jsx";
import ModalMovies from "../../components/Movies/components/ModalMovies/ModalMovies.jsx";
import Container from "../../layout/Container/Container.jsx";

import {API_KEY_3, API_URL, IMG_URL} from "../../constants/API.js";
import {sendRequest} from "../../helpers/sendRequest.js";
import './AllTvPage.scss'

const AllTvPage = (props) => {
	const [page, setPage] = useState(1); // стейт для того что бы сделать запросы по страницам
	const [data, setData] = useState({}) // стейт для того что бы получить total_results
	const [results, setResults] = useState([]) // стейт для того что бы отрендерить карточки
	const [currentPost, setCurrentPost] = useState({}) // стейт для получение тикущей карточки для показа в модалке
	const [isOpen, setIsOpen] = useState(false) // стейт для показа модалка
	const {favorites, onFavorite} = props;

	const handelModal = () => setIsOpen(!isOpen) // функция  показа модлки
	const handleCurrentPost = (card) => setCurrentPost(card)  // функция которая создает обьект выбраного поста для того что бы покать модалку с этим постом

	const handlePage = () => {
		if (page < data.total_pages) {
			setPage((prev) => prev + 1)
		}
	}

	useEffect(()=> {
		sendRequest(`${API_URL}/discover/tv?api_key=${API_KEY_3}&page=${page}`)
			.then((data)=>{
				setData(data)
				setResults((prevState) => {
					return [...prevState,...data.results]
				})
			});
	}, [page]);

	return (
		<div className="page-wrapper">
			<Container>
				<div className="posters-wrapper">
					{results.map((item) => (
						<PosterCard
							key={item.id}
							onClick={() => {
								handleCurrentPost(item)
								handelModal()
							}}
							poster={item}
							isFavorite={favorites?.some((favorit) => favorit.id === item.id)}
						/>
					))}
				</div>
				<div className="pagination">
					<p className="pagination-page">{results.length} із {data.total_results}</p>
					<Button onClick={handlePage}>Show more</Button>
				</div>
				<ModalMovies
					title={currentPost.title ? currentPost.title : currentPost.name}
					subTitle={currentPost.original_name ? currentPost.original_name : currentPost.original_title}
					desc={currentPost.overview}
					img={`${IMG_URL}${currentPost.backdrop_path}`}
					isOpen={isOpen}
					onClose={handelModal}
					isFavorite={favorites?.some((favorit) => favorit.id === currentPost.id)}
					onClick={() => {
						onFavorite(currentPost)
						handelModal()
					}}
				/>
			</Container>
		</div>
	);
};
AllTvPage.propTypes = {
	favorites: PropTypes.array,
    onFavorite: PropTypes.func,
}
export default AllTvPage;
