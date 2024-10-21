
```html
<div class="page-notfound">
    <p class="page-title">Oops! We can't find the page youre looking for</p>
    <p class="page-desc">
        You tried to request a page that doesn't exist. Return to <Link to="/">Home page</Link>.
    </p>
</div>
```


Style
```scss
.page-notfound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;

  .page-title {
    margin-bottom: 24px;
    font-size: 56px;
    font-weight: 900;
    line-height: 1;
  }
  .page-desc {
    font-size: 24px;
    line-height: 1.33;
  }
}
```
