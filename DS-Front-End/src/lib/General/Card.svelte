<script>
    export let data;
</script>

<div class="card">
    <a href="/games/{data.id}">
        <div class="info-container">
            <div class="game-img">
                <img src="game-pic.png" alt="The game">            
            </div>
            <div class="highscore-info">
                <div>
                    <p class="rank">Rank: 1st</p>
                    <p class="score">Score: 1000</p>
                </div>
                <div>
                    <p>Name: {data.title.substring(0, 5)}</p>
                    <p>Nationality: {data.body.substring(0, 5)}</p>
                </div>
            </div>
        </div>
    </a>
</div>

<style>
    a > div {
        width: 100%;
        color: white;
        padding: 1em;
        text-decoration: none;
        box-sizing: border-box;
        display: flex;
    }

    .card {
        overflow: hidden;
        background-color: #222222;
        border: 1px solid #ff6961;
        border-radius: 1em;
        transition: all 0.3s;
    }

    .card:hover {
        scale: 1.025;
    }

    img {
        height: 100%;
        aspect-ratio: 3 / 4;
        object-fit: cover;
    }

    .info-container {
        height: 200px;
    }

    .highscore-info {
        display: flex;
        flex: 1;
        justify-content: left;
    }

    .highscore-info > div {
        display: flex;
        flex-direction: column;
        padding: 1em 2em;
        justify-content: center;
        width: 35%;
    }

    .highscore-info > div > p {
        margin: 0;
        font-size: 1.65em;
    }

    .rank {
        font-weight: bold;
    }
</style>