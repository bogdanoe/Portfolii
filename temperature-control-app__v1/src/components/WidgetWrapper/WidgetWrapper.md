
```html
<div class="widget-container">
    <Header pageName={pageName}/>
    <SideBar/>
    {children}
</div>
```

```scss

.widget-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  padding-bottom: 56px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  transition: background-image 0.5s ease 0s;
  background-color: rgb(0, 0, 0);

  &.neutral {
    background-image: radial-gradient(circle at -4.17% 4.55%, #f6ebff 0, #ccc4ff 25%, #9d9df2 50%, #6b78d6 75%, #2e58bc 100%);

    .forecast {
      .forecast__card {
        background-color: #6b78d6;

        &:hover {
          background-color: rgba(46, 88, 188, 0.6);
        }
        &.card--selected {
          background-color: rgba(46, 88, 188, 0.6);
        }
      }
    }
  }

  &.cold {
    background-image: radial-gradient(circle at 50% -20.71%, #ade5ff 0, #7dcefb 25%, #3cb5f2 50%, #009ce9 75%, #0085e0 100%);

    .forecast {
      .forecast__card {
        background-color: #009ce9;

        &:hover {
          background-color: rgba(0, 156, 233, 0.6);
        }
        &.card--selected {
          background-color: rgba(0, 133, 224, 0.6);
        }
      }
    }
  }

  &.hot {
    background-image: radial-gradient(circle at 50% -20.71%, #d7c35d 0, #deba54 8.33%, #e4b04d 16.67%, #e9a546 25%, #ed9841 33.33%, #f0893e 41.67%, #f2793c 50%, #f3673d 58.33%, #f35542 66.67%, #f34249 75%, #f22b52 83.33%, #f0065d 91.67%, #ec0069 100%);

    .forecast {
      .forecast__card {
        background-color: #ed9841;

        &.card--selected {
          background-color: rgba(242, 121, 60, 0.6);
        }

        &:hover {
          background-color: rgba(242, 121, 60, 0.6);
        }
      }
    }
  }
}
```