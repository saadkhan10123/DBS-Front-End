<script>
    export let highscore;

    const handleDelete = async (event) => {
        const res = await fetch(`api/scores/del?scoreId=${highscore.score_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.ok) {
            console.log("Score deleted successfully");
        } else {
            console.log("Failed to delete score");
        }
        await invalidateAll();
    }

</script>

<div class="card">
    <div class="info-container">
        <div class="game-img">
            <img src={'data:image/jpeg;base64,' + highscore.game_image.substring(20)} alt="The game">            
        </div>
        <div class="highscore-info">
            <div>
                <p class="rank">Rank: {highscore.user_rank}</p>
                <p class="player">Submitted By: {highscore.username}</p>
                
            </div>
            <div>
                <p class="score">Score: {highscore.highscore}</p>
                <p class="player">Nationality: {highscore.nationality}</p>
            </div>
            <div>
                <button on:click={handleDelete}>Delete</button>
            </div>
        </div>
    </div>
</div>

<style>
    .info-container {
        width: 100%;
        color: white;
        padding: 1em;
        text-decoration: none;
        box-sizing: border-box;
        display: flex;
        height: 200px;
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