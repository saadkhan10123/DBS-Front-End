<script>
    export let score;

    import { invalidateAll } from '$app/navigation';

    const sendAcceptReq = async () => {
        const res = await fetch(`api/scores/accept?scoreId=${score.score_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.ok) {
            console.log('Score accepted');
        } else {
            console.log('Failed to accept score');
        }
        await invalidateAll();
    }

    const sendDelReq = async () => {
        const res = await fetch(`api/scores/reject?scoreId=${score.score_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.ok) {
            console.log('Score rejected');
        } else {
            console.log('Failed to reject score');
        }
        await invalidateAll();
    }

</script>

<div class="score-card">
    <div class="score-info">

        <img src={'data:image/jpeg;base64,' + score.proof_image.substring(20)} alt="proof">
        <h2>{score.username}</h2>
        <p>Score: {score.total_score}</p>
        <p>Time: {score.submission_date}</p>
        <div class="button-container">
            <button on:click={sendAcceptReq}>Accept Score</button>
            <button on:click={sendDelReq}>Reject Score</button>
        </div>
    </div>
</div>

<style>
    .button-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

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

    img {
        width: 100%;
        height: 200px;
        object-fit: fill;
        border-radius: 1rem;
    }
</style>