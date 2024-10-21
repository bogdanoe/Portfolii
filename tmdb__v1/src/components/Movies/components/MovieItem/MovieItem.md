```html

<div class="film-poster">
    <img src={`${IMG_URL}${poster_path}`} height='376px' alt="title"/>
    <div class='film-poster-back'>
        <h3 class="film-poster__title">title</h3>
        <p classe="film-poster__subtitle">
            <i>original_title</i>
        </p>
        <p class="film-poster__desc">overview</p>
        <div class="button__wrapper">
            <a class="button" href="linkPath">Show more</a>
            <button class="button">Favorite</button>
        </div>
    </div>
</div>
```

Style

```scss

.film-poster {
  img {
    position: relative;
    border-radius: 4px;
    width: 100%;
    //object-fit: contain;
    transition: transform 0.25s;
  }

  .film-poster-back {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    opacity: 0;
    padding: 16px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.8);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: rotateY(-180deg);
    transition: transform 0.8s;
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
    flex: 1 1 auto;
    max-height: 100px;
    overflow: hidden;
  }

  .button__wrapper {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: flex-end;
    margin-top: 32px;

    .button {
      width: 100%;

      + .button {
        margin-top: 16px;
      }
    }
  }
}
```
