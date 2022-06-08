
export const getGifs = async category => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=FQmBOB6p5MzrBxlpj1X6fho0qKTXt2jk&limit=10`;


    const resp = await fetch(url);
    const { data } = await resp.json()

    const gifs = data.map(({ images, title, id }) => {
        return {
            id,
            title,
            url: images?.downsized_medium.url
        }
    })


    return gifs;

}