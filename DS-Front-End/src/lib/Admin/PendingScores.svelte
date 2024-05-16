<script>
    export let score;
</script>

<div class="score-card">
    <div class="score-info">

        <img src={'data:image/jpeg;base64,' + score.proof_image.substring(20)} alt="proof">
        <h2>{score.username}</h2>
        <p>Score: {score.total_score}</p>
        <p>Time: {score.submission_date}</p>
        <button on:click={sendAcceptReq}>Accept Score</button>
        <button on:click={sendDelReq}>Reject Score</button>
    </div>
</div>

<style>
    .score-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 24px 64px;
        background-color: #222222;
        color: white;
        border-radius: 1em;
        width: 60%;
    }

    .score-info {
        padding: 0 24px;
    }

    button {
        padding: 12px 32px;
        border-radius: 1em;
        font-size: 1em;
        background-color: #ff6961;
        color: white;
        border: none;
    }
</style>