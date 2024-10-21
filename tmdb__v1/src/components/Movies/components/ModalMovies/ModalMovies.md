
```html
<div class="modal-wrapper">
    <div class="modal modal-movies">
        <div class="modal-box">
            <button type="button" class="modal-close">
                <svg viewBox="0 0 16 16" width="16" height="16">
                    <path
                            d="m9.3 8 6.1-6.1c.4-.4.4-.9 0-1.3s-.9-.4-1.3 0L8 6.7 1.9.6C1.6.3 1 .3.6.6c-.3.4-.3 1 0 1.3L6.7 8 .6 14.1c-.4.4-.3.9 0 1.3l.1.1c.4.3.9.2 1.2-.1L8 9.3l6.1 6.1c.4.4.9.4 1.3 0s.4-.9 0-1.3L9.3 8z"/>
                </svg>
            </button>
            <div class="modal-header">
                <div class="image">
                    <img src="img" alt="title"/>
                </div>
            </div>
            <div class="modal-content">
                <h4 class="modal-title">{title}</h4>
                <p class="modal-subTitle"><i>{subTitle}</i></p>
                <p class="modal-desc">{desc}</p>
            </div>
            <div class="modal-footer">
                <div class="button-wrapper">
                    <button class="btn" type="button" >OK</button>
                    <button class="btn" type="button" >Cancel</button>
                </div>
            </div>
        </div>
    </div>
</div>
```


Style
```scss
.modal-movies {
  .modal-header {
    margin-bottom: 24px;

    img {
      width: 100%;
    }
  }

  .modal-content {
  }

  .modal-footer {
    margin-top: 24px;
  }

  .button-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .modal-title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .modal-subTitle {
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .modal-desc {
    max-height: 120px;
    overflow: hidden;
    line-height: 1.4;
  }

}
```
