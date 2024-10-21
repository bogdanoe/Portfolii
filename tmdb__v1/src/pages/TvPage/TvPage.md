1) Створити сторінку
2) Зробити запит для отримання данних
3) Відрендерити данні

```html

<header class="page-tv-header">
	<div class="header-bg" style={{backgroundImage: `url(${IMG_URL}${backdrop_path})`}}/>
	<div class="container">
		<div class="header-wrapper">
            <span class="btn-back" onClick={goBack}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 180" style="enable-background:new 0 0 330 180"
                     xml:space="preserve"><path d="m325.6 79.4-75-75c-5.9-5.9-15.4-5.9-21.2 0-5.9 5.9-5.9 15.4 0 21.2L278.8 75H15C6.7 75 0 81.7 0 90s6.7 15 15 15h263.8l-49.4 49.4c-5.9 5.9-5.9 15.4 0 21.2 2.9 2.9 6.8 4.4 10.6 4.4s7.7-1.5 10.6-4.4l75-75c5.9-5.9 5.9-15.3 0-21.2z"/></svg>
            </span>
			<div class="header-poster">
				<img class="image" src={`${IMG_URL}${poster_path}`} alt={name}/>
			</div>
			<div class="header-content">
				<p class="movie-name">{name}</p>
				<p class="movie-subname"><i>{original_name}</i></p>
				<p class="movie-info">
                    <span class="genres">
                       <span>{name}</span>
                    </span>
					<span class="runtime">{runtime}</span>
				</p>
				<p class="movie-overview">
					{overview}
				</p>
				<p class="movie-created">
					Release date: {release_date}
				</p>
			</div>
		</div>
	</div>
</header>
<div class="page-movie-content">
	<div class="container">
		<p class="content-title">Seasons</p>
		{/* { seasons {air_date,episode_count,name,poster_path} } */}
		<div class="cards-seasons">
			<div class="card">
				<div class="card-post"><img src={`${IMG_URL}${poster_path}`} alt={name}/></div>
				<div class="card-content">
					<p class="card-name">{name}</p>
					<p class="card-info">
						<span>{air_date}</span> | <span>{episode_count} episodes</span>
					</p>
				</div>
			</div>
		</div>
		<p class="content-title">Episodes</p>
		<div class="cards-episodes">
			<div class="episode-item episodes-last">
				<div class="episode-wrapper">
					<div class="episode-post">
						<img src={`${IMG_URL}${last_episode_to_air.still_path}`}
						     alt={last_episode_to_air.name}/>
					</div>
					<div class="episode-content">
						<p class="episode-name">Episodes name: {last_episode_to_air.name}</p>
						<p class="episode-date">
							<i>Episodes date: {last_episode_to_air.air_date}</i>
						</p>
						<p class="episode-info">Season: {last_episode_to_air.season_number} Episode:
							{last_episode_to_air.episode_number} Runtime: {last_episode_to_air.runtime}
						</p>
						<p class="episode-overview">{last_episode_to_air.overview}</p>
					</div>
				</div>
			</div>
			<div class="episode-item episodes-next">
				<div class="episode-wrapper">
					<div class="episode-post">
						<img src={`${IMG_URL}${next_episode_to_air.still_path}`}
						     alt={next_episode_to_air.name}/>
					</div>
					<div class="episode-content">
						<p class="episode-name">Episodes name: {next_episode_to_air.name}</p>
						<p class="episode-date"><i>Episodes
							date: {next_episode_to_air.air_date}</i></p>
						<p class="episode-info">Season: {next_episode_to_air.season_number} Episode:
							{next_episode_to_air.episode_number} Runtime: {next_episode_to_air.runtime}
						</p>
						<p class="episode-overview">{next_episode_to_air.overview}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

Data

JS

```js
`${API_URL}/tv/${id}?api_key=${API_KEY_3}`

const {
	backdrop_path,
	poster_path,
	name,
	original_name,
	genres = [],
	episode_run_time,
	overview,
	created_by = [],
	seasons = [],
	last_episode_to_air,
	next_episode_to_air
} = data;
```

Style

```scss
.page-tv-header {
	position: relative;

	.header-bg {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-repeat: no-repeat;
		background-size: cover;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.6);
		}
	}

	.btn-back {
		position: absolute;
		top: 46px;
		left: -22px;
		display: block;
		width: 36px;
		transform: rotate(180deg);
		cursor: pointer;

		&:hover,
		&:focus {
			svg {
				transform: translateX(10px);
			}
		}

		svg {
			fill: #fff;
			transform: translateX(0);
			transition: transform 0.8s;
		}
	}

	.header-wrapper {
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
		padding: 30px;
		box-sizing: border-box;
	}

	.header-poster {
		width: 300px;
		flex-shrink: 0;

		img {
			width: 100%;
		}
	}

	.header-content {
		padding: 0 32px;
		color: #fff;
	}

	.movie-name {
		padding: 0;
		margin: 0 0 16px;
		font-size: 36px;
		font-weight: 700;
	}

	.movie-subname {
		padding: 0;
		margin: 0 0 16px;
		font-size: 24px;
	}

	.movie-info {
		margin-bottom: 16px;

		.genres {
			span {
				display: inline-block;

				&:not(:last-child) {
					margin-right: 8px;
				}
			}
		}

		.runtime {
			position: relative;
			display: inline-block;
			padding-left: 20px;

			&::before {
				font-size: 16px;
				line-height: 1;
				position: absolute;
				top: 0;
				left: 7px;
				z-index: -1;
				display: inline-flex;
				align-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
			}
		}
	}

	.movie-overview {
		margin-bottom: 16px;
		font-size: 16px;
		line-height: 1.33;
	}

	.movie-created {
		display: inline-block;

		&:not(:last-child) {
			margin-right: 32px;
		}
	}
}

.page-movie-content {
	margin-top: 48px;
	margin-bottom: 48px;

	.content-title {
		position: relative;
		margin-bottom: 42px;
		font-size: 32px;
		font-weight: 600;

		&::before {
			content: "";
			display: block;
			position: absolute;
			bottom: -12px;
			left: 0;
			width: 16%;
			height: 6px;
			border-radius: 6px;
			background-color: #afaeae;

		}
	}

	.cards-seasons {
		margin-bottom: 64px;
		max-height: 768px;
		overflow-y: auto;

		.card {
			border: 1px solid rgba(227, 227, 227, 1);
			border-radius: 4px;
			box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
			overflow: hidden;
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			&:not(:last-child) {
				margin-bottom: 16px;
			}
		}

		.card-post {
			border-radius: 4px 0 0 4px;
			width: 130px;

			img {
				width: 100%;
			}
		}

		.card-content {
			padding: 24px;
		}

		.card-name {
			font-size: 32px;
			margin-bottom: 4px;
			font-weight: 600;
		}

		.card-info {
			font-size: 24px;
			font-weight: 600;
		}
	}

	.cards-episodes {
		display: flex;
		height: 100%;
		margin: -16px;

		.episode-item {
			display: flex;
			flex-direction: column;
			flex: 0 0 50%;
			padding: 16px;
		}

		.episode-wrapper {
			flex: 1 1 auto;
			box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
		}

		.episode-post {
			display: flex;
			justify-content: center;
			width: 100%;

			svg {
				display: block;
				height: 300px;
			}

			img {
				width: 100%;
			}
		}

		.episode-content {
			padding: 16px;
		}

		.episode-name {
			margin-bottom: 16px;
			padding: 0;
			font-size: 24px;
			line-height: 1;
		}

		.episode-date {
			margin-bottom: 16px;
			padding: 0;
			font-size: 24px;
			line-height: 1;
		}

		.episode-info {
			margin-bottom: 32px;
			padding: 0;
			font-size: 24px;
			line-height: 1;
		}

		.episode-overview {
			margin: 0;
			padding: 0;
			font-size: 24px;
			line-height: 1.33;
		}
	}
}
```
