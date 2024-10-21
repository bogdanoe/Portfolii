1) Створити сторінку
2) Зробити запит для отримання данних
3) Відрендерити данні
```html
<header class="page-movie-header">
    <div class="header-bg" style={{backgroundImage: `url(${IMG_URL}${backdrop_path})`}} />
    <div class="container">
        <div class="header-wrapper">
            <span class="btn-back" onClick={goBack}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 180" style="enable-background:new 0 0 330 180" xml:space="preserve"><path d="m325.6 79.4-75-75c-5.9-5.9-15.4-5.9-21.2 0-5.9 5.9-5.9 15.4 0 21.2L278.8 75H15C6.7 75 0 81.7 0 90s6.7 15 15 15h263.8l-49.4 49.4c-5.9 5.9-5.9 15.4 0 21.2 2.9 2.9 6.8 4.4 10.6 4.4s7.7-1.5 10.6-4.4l75-75c5.9-5.9 5.9-15.3 0-21.2z"/></svg>
            </span>
            <div class="header-poster">
                <img class="image" src={`${IMG_URL}${poster_path}`} alt={title}/>
            </div>
            <div class="header-content">
                <p class="movie-name">{title}</p>
                <p class="movie-subname"><i>{original_title}</i></p>
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
```

Data
```js
`${API_URL}/movie/${id}?api_key=${API_KEY_3}`

const {
    backdrop_path,
    poster_path,
    original_title,
    title,
    genres = [],
    runtime,
    overview,
    release_date,
} = data;
```

Style
```scss
.page-movie-header {
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
      background-color: rgba(#000, 0.6);

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
    margin: 0;
    font-size: 36px;
    font-weight: 700;
  }

  .movie-subname {
    padding: 0;
    margin: 0;
    font-size: 24px;
  }

  .movie-info {
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
        content: '\2022';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 7px;
        display: inline-flex;
        align-content: center;
        align-items: center;
        z-index: -1;
      }
    }

  }

  .movie-overview {
    font-size: 16px;
    line-height: 1.33;
  }

  .movie-created {
    span {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 32px;
      }
    }
  }
}
```
