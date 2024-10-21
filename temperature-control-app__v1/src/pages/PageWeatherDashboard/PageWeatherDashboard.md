```html

<PageWrapper pageName="Weathers">
	<div class="weather-dashboard">
		<div class="g-container">
			<div class="weather-list">
				<Link to={`${item.sity}`} class="list-item">
				{name}</Link>
			</div>
		</div>
	</div>
</PageWrapper>
```

```scss
.weather-dashboard {
	display: flex;
	align-items: center;
	width: 100%;

	.weather-list {
		display: grid;
		flex-wrap: wrap;
		align-items: center;
		gap: 24px;
		grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
	}

	.list-item {
		padding: 24px;
		box-sizing: border-box;
		border-radius: 10px;
		background-color: #fff;
		box-shadow: 0 20px 25px -5px rgb(0 0 0/0.1), 0 8px 10px -6px rgb(0 0 0/0.1);
		font-size: 14px;
		color: #212529;
		text-decoration: none;
	}
}
```

```js
[
	{city: 'Poltava', name: 'Полтава'},
	{city: 'Kharkiv', name: 'Харків'},
	{city: 'Luhansk', name: 'Луганськ'},
	{city: 'Rivne', name: 'Рівне'},
	{city: 'Kherson', name: 'Херсон'},
	{city: 'Kamelnitskiy', name: 'Хмельницький'},
	{city: 'Zhytomyr', name: 'Житомир'},
	{city: 'Lviv', name: 'Львів'},
	{city: 'Sumy', name: 'Суми'},
	{city: 'Cherkasy', name: 'Черкаси'},
	{city: 'Zaporozhe', name: 'Запоріжжя'},
	{city: 'Ternopil', name: 'Тернопіль'},
	{city: 'Chernihiv', name: 'Чернігів'},
	{city: 'Odesa', name: 'Одеса'},
	{city: 'Uzhhorod', name: 'Ужгород'},
	{city: 'Chernivtsi', name: 'Чернівці'},
	{city: 'Kyiv', name: 'Київ'},
]
```