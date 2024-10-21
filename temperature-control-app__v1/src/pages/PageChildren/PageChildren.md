Зробити сторінки кімнати: Children's з температурою за замовчуванням 23 і з макс мін 25 - 16

```html
<PageWrapper temperature={temperature} pageName={"Children Room"}>
    <Temperature temperature={temperature}/>
    <Controllers decrease={decrease} increase={increase} openModal={handleModal}/>
    <Weather/>
</PageWrapper>
<Modal temperature={temperature} closeModal={handleModal}/>
```