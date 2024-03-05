<script>
    export let data;
</script>

<div class="card">
    <a href="/games/{data.id}">
        <div class="info-container">
            <div class="user-info">
                <div class="profile-img-container">
                    <img class="profile-img" src="/placeHolderPFP.png" alt="">
                    <img class="flag" src="/pakistan.png" alt="">
                </div>
                <h1>{data.title.substring(0, 10)}</h1> 
            </div>
            <div class="stats">
                <p>Game</p>
                <p>Score</p>
                <p>Rank</p>
                <p>Nationality</p>
            </div>
        </div>
    </a>
</div>

<style>
    h1 {
        color: white;
        font-size: 1.125em;
        margin: 0 1rem;
    }

    .user-info {
        display: flex;
        align-items: center;
    }

    a > div {
        height: 256px;
        width: 100%;
        color: white;
        padding: 1em;
        box-sizing: border-box;
    }

    .card {
        overflow: hidden;
        background-color: #70d38b;
        border-radius: 5px;
    }

    .profile-img {
        border-radius: 50%;
        height: 4em;
        aspect-ratio: 1 / 1;
    }

    .flag {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 1.1em;
        aspect-ratio: 4 / 3;
        border-radius: 0.2rem;
    }

    .profile-img-container {
        position: relative;
    }

    .stats {
        display: flex;
        flex-direction: column;
        padding-top: 24px;
        justify-content: space-between;
        gap: 0.5em;
    }

    .stats > p {
        margin: 0;
    }
</style>