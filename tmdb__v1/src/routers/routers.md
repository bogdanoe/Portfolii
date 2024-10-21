```js
 <Routes>
    <Route path="/tv/:filmId" element={<TvPage/>}/>
    <Route path="/cinema/:filmId" element={<CinemaPage/>}/>
    <Route path="/project/" element={<ProjectPassport/>}/>
    <Route element={<LayoutPage/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/tv/all" element={<AllTvPage/>}/>
        <Route path="/cinema/all" element={<AllCinemaPage/>}/>
        <Route path="/favorite" element={<FavoritePage />}/>
    </Route>
    <Route path="*" element={<NotPage/>}/>
</Routes>
```