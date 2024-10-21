import React, {useState} from 'react';
import PropTypes from "prop-types";
import PosterCard from "../../components/PosterCard/PosterCard.jsx";
import Container from "../../layout/Container/Container.jsx";
import ModalMovies from "../../components/Movies/components/ModalMovies/ModalMovies.jsx";
import {useNavigate} from 'react-router-dom'
import {IMG_URL} from "../../constants/API.js";
import './FavoritePage.scss'

const FavoritePage = (props) => {
	const {data, onFavorite} = props
	const [currentPost, setCurrentPost] = useState({}) // стейт для получение тикущей карточки для показа в модалке
	const [isOpen, setIsOpen] = useState(false) // стейт для показа модалка

	const navigate = useNavigate()

	const handelModal = () => setIsOpen(!isOpen) // функция  показа модлки
	const handleCurrentPost = (card) => setCurrentPost(card)  // функция которая создает обьект выбраного поста для того что бы покать модалку с этим постом
	const handleGoHome = () => navigate("/")  // делаем функцию которая сделает редерект на главную страницу

	return (
		<div className="page-wrapper">
			<Container>
				<div className="posters-wrapper">
					{data?.map((item) => (
						<PosterCard
							key={item.id}
							handelModal={() => onFavorite(item)}
							poster={item}
							onClick={() => {
								handleCurrentPost(item)
								handelModal()
							}}
							isFavorite={data?.some((favorit) => favorit.id === item.id)}
						/>
					))}
				</div>
				<ModalMovies
					title={currentPost.title ? currentPost.title : currentPost.name}
					subTitle={currentPost.original_name ? currentPost.original_name : currentPost.original_title}
					desc={currentPost.overview}
					img={`${IMG_URL}${currentPost.backdrop_path}`}
					isOpen={isOpen}
					onClose={handelModal}
					isFavorite={data?.some((favorit) => favorit.id === currentPost.id)}
					onClick={() => {
						onFavorite(currentPost)
						handelModal()
						handleGoHome()
					}}
				/>
			</Container>
		</div>
	);
};
FavoritePage.propTypes = {
	data: PropTypes.array,
    onFavorite: PropTypes.func,
}
export default FavoritePage;
