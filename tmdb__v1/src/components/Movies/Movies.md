
```html
<div class="films__container">
    <div class="films__title">Популярное По TV</div>
    <div class="films__slider">
        <Swiper
                slidesPerView={5}
                spaceBetween={16}
                class="films__wrapper"
                navigation={true}
                grabCursor={false}
                draggable={false}
                preventClicksPropagation={true}
                preventClicks={true}
                scrollbar={{draggable: false, hide: true}}
                slideToClickedSlide={false}
                pagination={{clickable: true}}
        >
            <SwiperSlide class="film__item">
                <div class="film-poster">
                    <img src="IMG_URL poster_path" alt='title'/>
                </div>
            </SwiperSlide>
        </Swiper>
         <p class="film__link">
            <a href="/tv/all" class="link">All TV</a>
            <LeftArrowIcon />
        </p>
    </div>
    <div class="films__title">Популярное В кинотеатрах</div>
    <div class="films__slider">
        <Swiper
                slidesPerView={5}
                spaceBetween={16}
                class="films__wrapper"
                navigation={true}
                grabCursor={false}
                draggable={false}
                preventClicksPropagation={true}
                preventClicks={true}
                scrollbar={{draggable: false, hide: true}}
                slideToClickedSlide={false}
                pagination={{clickable: true}}
        >
            <SwiperSlide class="film__item">
                <div class="film-poster">
                    <img src="IMG_URL poster_path" alt='title'/>
                </div>
            </SwiperSlide>
        </Swiper>
         <p class="film__link">
            <a href="/cinema/all" class="link">All Cinemas</a>
            <LeftArrowIcon />
        </p>
    </div>
</div>
```

```js
`${API_URL}/discover/tv?api_key=${API_KEY_3}`
`${API_URL}/discover/movie?api_key=${API_KEY_3}`
```

Style
```scss
.films__container {
  padding: 48px 0;
  box-sizing: border-box;

  .films__title {
    position: relative;
    display: inline;
    font-size: 32px;
    font-weight: 600;

    &:before {
      content: '';
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

  .films__slider {
    margin: 0 -26px;

    .films__wrapper {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      padding: 0 26px;

      &.pending {
        flex-wrap: nowrap;
        padding: 40px 26px;
        box-sizing: border-box;

        .film__item {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 376px;
          border-radius: 4px;
          background-color: #dbdbdb;

          svg {
            width: 220px;
          }

          &:hover {
            transform: scale(1.1);
            z-index: 10;
          }
        }
      }

      .swiper-wrapper {
        padding: 40px 0;
        box-sizing: border-box;
      }

      .film__item {
        flex-shrink: 0;
        box-sizing: border-box;
        width: 20%;
        margin-right: 16px;
        cursor: pointer;
        transition: all 450ms;

        &:hover {
          margin-right: 36px !important;

          .film-poster {
            transform: rotateY(180deg);

            img {
              transform: scale(1.1);
              z-index: 10;
              opacity: 0.2;
            }

            .film-poster-back {
              opacity: 1;
              backface-visibility: visible;
            }
          }
        }

        .film-poster {
          img {
            position: relative;
            border-radius: 4px;
            width: 100%;
            object-fit: contain;
            transition: transform 0.25s;
          }

          .film-poster-back {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 20;
            width: 100%;
            height: 100%;
            opacity: 0;
            padding: 16px;
            box-sizing: border-box;
            background-color: rgba(255, 255, 255, 0.8);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            transform: rotateY(-180deg);
            transition: transform 0.8s;

            .button__wrapper {
              display: flex;
              flex-direction: column;
              margin-top: 32px;

              .button {
                width: 100%;

                + .button {
                  margin-top: 16px;
                }
              }
            }

            .film-poster__title {
              padding: 0;
              margin: 0 0 8px;
              font-size: 24px;
              line-height: 1;
            }

            .film-poster__subtitle {
              padding: 0;
              margin: 0 0 32px;
              font-size: 20px;
            }

            .film-poster__desc {
              max-height: 100px;
              overflow: hidden;
            }
          }
        }
      }
    }
  }

  .film__link {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &:hover,
    &:focus {
      svg {
        transform: translateX(10px);
      }
    }

    svg {
      margin-left: 8px;
      width: 24px;
      transform: translateX(0);
      transition: transform 0.8s;
    }

    .link {
      font-size: 16px;
      font-weight: bold;
      color: #000;
      text-decoration: none;
    }
  }
}
```
