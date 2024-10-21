
Зробити сторінки кімнати: Bedroom з поточним стейтом з температурою за умовчанням 20 і з макс мін 29 - 0

```html
<PageWrapper temperature={temperature} pageName={"Badroom"}>
    <Temperature temperature={temperature}/>
    <Controllers decrease={decrease} increase={increase} openModal={handleModal}/>
    <Weather/>
</PageWrapper>
<Modal temperature={temperature} closeModal={handleModal}/>
```