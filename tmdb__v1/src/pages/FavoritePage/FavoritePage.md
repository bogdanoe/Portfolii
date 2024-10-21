1) Створити сторінку
2) Дистати стейт з картками
3) Відрендерити данні

```html
<div class="posters-wrapper">
    {favorites.map((item) => (
        <PosterCard
            key={item.id}
            handelModal={()=>handleFavorites(item)}
            poster={item}
            isDelete={favorites.some((favorit) => favorit.id === item.id)}
        />
    ))}
</div>
```

Style
```scss
.posters-wrapper {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
}
```
