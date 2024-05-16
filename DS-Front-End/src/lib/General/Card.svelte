<script>
    export let data;
    export let isAdmin = false;

    const handleDelete = (event) => {
        event.stopPropagation();
        console.log("Delete");
    }
</script>

<div class="card">
    <a href="/games/{data.game_id}">
        <div class="info-container">
            <div class="game-img">
                <img src="game-pic.png" alt="The game">            
            </div>
            <div class="highscore-info">
                <div>
                    <p class="rank">Rank: {data.user_rank}</p>
                    <p class="player">Submitted By: {data.username}</p>
                    
                </div>
                <div>
                    <p class="score">Score: 1000</p>
                    <p class="player">Nationality: {data.nationality}</p>
                </div>
                {#if isAdmin}
                    <div>
                        <button>Delete</button>
                    </div>
                {/if}
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

    img {
        border-radius: 10%;
    }

    .card {
        overflow: hidden;
        background-color: #222222;
        border: 1px solid #ff6961;
        border-radius: 1em;
        transition: all 0.3s;
    }

    .card:hover {
        scale: 1.01;
        background-color: #2f2f2f;
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
        /* font-size: 1.65em; */
    }

    .rank, .score {
        font-weight: bold;
        font-size: 1.5em;
    }

    .player {
        text-align: bottom-left;
        font-size: 1em;
    }
</style>