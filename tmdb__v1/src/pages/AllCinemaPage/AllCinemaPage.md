1) Створити сторінку
2) Зробити запит для отримання данних
3) Зробити логику для кнопки Show more, додавання нових карток
```html
<div class="posters-wrapper">
    {results.map((item) => (
        <PosterCard
            key={item.id}
            handelModal={handelModal}
            handleCurrentPost={handleCurrentPost}
            poster={item}
            isDelete={favorites.some((favorit) => favorit.id === item.id)}
        />
    ))}
</div>

<div class="pagination">
    <p class="pagination-page">{results.length} із {data.totalResults}</p>
    <Button>Show more</Button>
</div>
<ModalMovies
    title={currentPost.title ? currentPost.title : currentPost.name}
    subTitle={currentPost.original_name ? currentPost.original_name : currentPost.original_title}
    desc={currentPost.overview}
    img={`${IMG_URL}${currentPost.backdrop_path}`}
    isOpen={isOpen} 
    onClose={handelModal}
    onClick={() => {
        handleFavorites(currentPost)
        handelModal()
    }}
/>
```

```js
`${API_URL}/discover/movie?api_key=${API_KEY_3}`
```

Style
```scss
.posters-wrapper {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));

  .pagination {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 32px;    
  }

  .pagination-page {
    margin-bottom: 32px;
    text-align: center;
    width: 100%;
    font-size: 18px;
    color: #000; 
  }
}

```
