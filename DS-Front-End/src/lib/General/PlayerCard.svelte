<script>
    export let user;
</script>

<div class="player-card">
    <h1>{user.UserName}</h1>
    <p>Number of Top Scores {user.TopScoresCOUNT}</p>
</div>

<style>
    .player-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;
        border: 1px solid black;
    }
</style>