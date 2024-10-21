
```html
 <div class="not-page">
    <p class="page-title">This page has been abducted.</p>
    <p class="page-desc">Let’s head back home and try that again. The truth is out there…</p>
    <p>
        <a href="/">Home</a>
    </p>
</div>
```


Style
```scss
.not-page {
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-bottom: 56px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;

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
