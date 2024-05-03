<script>
    /** @type {import('./$types').Game} */
    export let game;
    // console.log(game);
</script>

<!-- Card for a single game -->

<div class="game-card">
    <a href={`games/${game.id}`}>
        <div class="img-container">
            <img src="game-pic.png" alt="The game">            
            <div class="game-data">
                <h2>{game.title.substring(0, 5)}</h2>
                <p>{game.body.substring(0, 5)}</p>
            </div>
        </div>  
        <p>Something</p>
    </a>
</div>

<style>
    .game-card {
        border-radius: 1em;
        overflow: hidden;
        transition: all 0.3s;
        cursor: pointer;
        transition: scale 0.2s ease-in-out;
    }

    .game-card > a {
        text-decoration: none;
        color: white;
    }

    .game-card:hover {
        scale: 1.05;
    }

    .img-container {
        position: relative;
        width: 100%;
    }

    img {
        width: 100%;
        aspect-ratio: 3 / 4;
        object-fit: cover;
    }

    .game-data {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-image: linear-gradient(transparent, rgb(0, 0, 0));
        padding: 1em;
        box-sizing: border-box;
    }

    h2 {
        margin: 0;
        font-size: 1.5em;
    }

    p {
        margin: 0;
    }

    .game-card > a > p {
        padding: 1em;
        margin: 0;
        background-color: #333;
        text-align: center;
    }
</style>