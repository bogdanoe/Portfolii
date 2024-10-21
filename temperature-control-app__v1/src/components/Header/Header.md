
```html
 <div class="header-wrapper">
    <div class="page-name">
        <span class="btn-back"><RightArrow/></span>
        {pageName}
    </div>

    <div class="header">
        <div class="current-date">
            <p class="day">{days}</p>
            <p class="data">{day} {months}</p>
        </div>
    </div>
</div>
```


Style
```scss

.header-wrapper{
	position: relative;
	width: 100%;
	margin-bottom: 107px;

	.page-name {
		position: absolute;
		top: 15px;
		left: 5%;
		display: flex;
		align-items: center;
		font-size: 32px;
		font-weight: bold;
		line-height: 1;
		color: #212529;

		.btn-back {
			display: block;
			cursor: pointer;
			margin: 0 20px;
			transform: rotate(180deg);

			svg {
				width: 32px;
				height: 25px;
			}
		}
	}

	.header {
		position: absolute;
		top: 2%;
		left: 50%;
		transform: translateX(-50%);

		.current-date {
			display: flex;
			flex-direction: column;

			.day{
				font-family: Roboto, sans-serif;
				font-weight: 400;
				font-size: 28px;
				color: #fff;
				display: inline-block;
				margin-top: 15px;
				margin-bottom: 10px;
			}

			.data{
				font-family: Roboto, sans-serif;
				font-weight: 200;
				font-size: 14px;
				color: #fff;
				text-transform: uppercase;
			}
		}
	}
}
```
