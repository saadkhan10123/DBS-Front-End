<script>
    export let user;
</script>

<div class="card">
    <div class="info-container">
        <div class="game-img">
            <img src="placeHolderPFP.png" alt="User Profile">            
        </div>
        <div class="highscore-info">
            <div>
                <p class="name">Name: {user.username}</p>
            </div>
            <div>
                <p class="score">Top Scores: {user.top_scores_count}</p>
                <p class="player">Nationality: {user.nationality}</p>
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
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 50%;
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