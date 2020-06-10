export const fetchArtistSearch = (name) => {
    return(dispatch) => {
        dispatch({ type: "SEARCHING_ARTIST"});
        fetch(`https://api.deezer.com/search/user?q=${name}`)
        .then(res => res.json())
        .then(artist => console.log(artist))
    }
}