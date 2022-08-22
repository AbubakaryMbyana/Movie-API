
const form = document.querySelector('#searchForm')

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const query = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)

    imgSearch(res.data)
    form.elements.query.value = ''

})

const imgSearch = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const image = document.createElement('img');
            image.src = result.show.image.medium
            document.body.append(image)
        }

    }
}
