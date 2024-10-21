
```html
<PageWrapper pageName={"Rooms"}>
    <div class="page-dashboard">
        <div class="g-container">
            <div class="dashboard-wrapper">
                <div class="card-box">
                    <Link to="room" class="icon">
                        <Room/>
                    </Link>
                </div>
                <div class="card-box">
                    <Link to="baby-room" class="icon">
                        <BabyRoom/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</PageWrapper>
```


```scss
.page-dashboard {
  display: flex;
  align-items: center;
  flex: 1 0 auto;

  .dashboard-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: -24px;

    .card-box {
      margin: 24px;
    }
  }

  .card-box {
    padding: 24px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgb(0 0 0/0.1), 0 8px 10px -6px rgb(0 0 0/0.1);


    .icon {
      display: block;
      width: 160px;
      color: #212529;

      [class^="svg-"] {
        font-size: 78px;
      }
    }
  }
}
```