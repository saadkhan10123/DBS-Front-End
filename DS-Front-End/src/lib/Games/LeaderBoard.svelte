<script>
    import Game from "./Game.svelte";

    let gameList = [
        {
            id: 1,
            playerName: "Name 1",
            score: 100
        },
        {
            id: 2,
            playerName: "Name 2",
            score: 50
        },
        {
            id: 3,
            playerName: "Name 3",
            score: 20
        },
        {
            id: 4,
            playerName: "Name 4",
            score: 10
        },
        {
            id: 5,
            playerName: "Name 5",
            score: 5
        },
        {
            id: 6,
            playerName: "Name 6",
            score: 1
        },
        {
            id: 7,
            playerName: "Name 7",
            score: 0
        }
    ]
    let rank = 1
    
    const appendRank = (game) => {
        game.rank = rank
        rank++
    }

    gameList.forEach(appendRank)

    gameList[1].rank = 1
    gameList[2].rank = 2
    gameList[3].rank = 3

    let firstPosition = gameList.filter(game => game.rank === 1)
    let secondPosition = gameList.filter(game => game.rank === 2)
    let thirdPosition = gameList.filter(game => game.rank === 3)
    let restOfTheList = gameList.filter(game => game.rank > 3)

    
</script>

<div class="leader-board">
    <h1>Leader Board</h1>
    <div class="game-list">
        {#if firstPosition}
            <div class="first-position">
                {#each firstPosition as game}
                    <Game game={game} />
                {/each}
            </div>
        {/if}
        {#if secondPosition}
            <div class="second-position">
                {#each secondPosition as game}
                    <Game game={game} />
                {/each}
            </div>
        {/if}
        {#if thirdPosition}
            <div class="third-position">
                {#each thirdPosition as game}
                    <Game game={game} />
                {/each}
            </div>
        {/if}
        {#if restOfTheList}
            <div>
                {#each restOfTheList as game}
                    <Game game={game} />
                {/each}
            </div>
        {/if}
    </div>
</div>

<style>
    h1 {
        margin-bottom: 24px;
    }

    .game-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }

    
    .game-list > div {
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 10px;
        border: 3px solid transparent;
    }

    .game-list > .first-position {
        border: 3px solid #FFD700;
    }

    .game-list > .second-position {
        border: 3px solid #C0C0C0;
    }

    .game-list > .third-position {
        border: 3px solid #CD7F32;
    }
</style>

