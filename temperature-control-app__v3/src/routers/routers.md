
```jxs
<Routes>
    <Route path={"/"} element={<PageBadroom/>}/>
    {/*<Route index element={<PageBadroom/>}/>*/}
    <Route path={"/home"} element={<PageRooms/>}/>
    <Route path={"/home/room"} element={<PageBadroom/>}/>
    <Route path={"/home/baby-room"} element={<PageChildren/>}/>
    <Route path={"/weather"} element={<PageWeatherDashboard/>}/>
    <Route path={"/weather/:id"} element={<PageWeatherCity/>}/>
    <Route path={"*"} element={<NotPage/>}/>
</Routes>
```
