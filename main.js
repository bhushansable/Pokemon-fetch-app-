async function fetchdata() {
    try {

        const pokemonName = document
            .getElementById("poke")
            .value
            .trim()
            .toLowerCase();

        // Empty input check
        if (!pokemonName) {
            alert("Enter Pokémon name");
            return;
        }

        const respon = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );

        if (!respon.ok) {
            throw new Error("Pokemon not found");
        }

        const data = await respon.json();

        const pokemonSprite = data.sprites.front_default;
        const imagElemet = document.getElementById("pokemonSprite");

        imagElemet.src = pokemonSprite;
        imagElemet.style.display = "block";

    } catch (error) {
        console.error(error);
        alert("Pokemon not found");
    }
}
