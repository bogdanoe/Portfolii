
```html
<div class="g-sidebar">
    <Link to="/" class="sidebar-logo">
        <Logo/>
    </Link>
    <ul class="sidebar-list">
        <li class="list-item">
            <Link to="/home" class="list-link active">
                <Home/>
            </Link>
        </li>
        <li class="list-item">
            <Link to="/weather" class="list-link active">
                <Weather/>
            </Link>
        </li>
    </ul>
</div>
```


Style
```scss
.g-sidebar {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: 72px;
	padding: 32px 0;
	box-sizing: border-box;
	background-color: rgba(248, 249, 250, 0.7);

	box-shadow: 0 0.5em 1.5em rgb(0 0 0 / 10%), inset 0 0.125em 0.5em rgb(0 0 0 / 15%);

	.sidebar-logo {
		display: block;
		margin-bottom: 32px;
		color: #212529;
	}

	.sidebar-list {
		list-style: none;
		padding: 0;
		margin: 0;
		width: 100%;
	}

	.list-item {

	}

	.list-link {
		width: 100%;
		display: block;
		padding: 20px 8px;
		box-sizing: border-box;
		transition: all 0.5s;
		border-bottom: 1px solid #212529;
		color: #212529;

		svg {
			width: 32px;
			height: 32px;
		}

		&.active,
		&:hover {
			color: #fff;
			fill: #fff;
			background-color: rgba(46, 88, 188, 0.6);
			border-bottom-color: rgba(46, 88, 188, 0.6);
		}
	}
}
```
