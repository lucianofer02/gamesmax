const fetchProducts = async (query) => {

    const response = await fetch(`https://gamesmax.onrender.com/games`);
    const data = await response.json();

    return data;
}

export default fetchProducts;