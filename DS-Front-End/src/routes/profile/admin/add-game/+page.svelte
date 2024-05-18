<script>
    import { enhance } from '$app/forms';

    /** @type {import('./$types').PageData} */
    export let data;

    let gameImage, fileinput;
	
    const onFileSelected =(e)=>{
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            gameImage = e.target.result
        };  
    } 
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<div class="add-game">
    <div class="add-game-container">
        <h1>Add Game</h1>
        <form method="POST" action="?/addGame" use:enhance={({ submitter, formData }) => {
            console.log()
            submitter.disable = true;

            formData.append("image", gameImage);

            return ({ result }) => {
                console.log(result);
                if (result.type === "success") {
                    submitter.disable = false;
                }
            }
        }}>
            <label for="title">Game Title <small>*</small></label>
            <input type="text" name="title" required />
            <label for="description">Description <small>*</small></label>
            <textarea id="description" name="description" required></textarea>
            <label for="realease-date">Release Date <small>*</small></label>
            <input type="date" name="release-date" required />
            <label for="image">Game Image <small>*</small></label>

            <div class="image-container">
                {#if gameImage}
                    <img class="proof-image" src="{gameImage}" alt="d" on:click={()=>{fileinput.click();}}/>
                {:else}
                    <img class="proof-image" src="\default.png" alt="" on:click={()=>{fileinput.click();}}/> 
                {/if}
                <div class="chan" on:click={()=>{fileinput.click();}}></div>
                <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
            </div>

            <button type="submit">Add Game</button>
        </form>
    </div>
</div>

<style>
    .add-game{
        display: flex;
        justify-content: center;
        padding-top: 3em;
        padding-bottom: 3em;
    }

    .add-game-container {
        display: flex;
        flex-direction: column;
        padding: 32px 32px;
        color: #fff;
        background-color: #222222;
        border-radius: 12px;
        height: 38vw;
        width: 22vw;
        margin: 0 auto;
        
        box-shadow: 0 4px 8px rgba(244, 192, 192, 0.15);
        transition: all 0.2s ease-in-out;
    }

    .image-container {
        margin: auto;
        align-items: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    h1 {
        margin: 0 0 12px;
        font-size: 1.5em;
        font-weight: bold;
        text-align: center;
    }

    label {
        padding: 8px 10px;
        font-size: 12px;
        color: white;
    }

    input, textarea {
        padding: 8px 10px;
        border: 1px solid #ff6961;
        background-color: #1a1a1a;
        color: white;
        border-radius: 4px;
        font-size: 12px;
    }
    
    small {
        color: #f74d40;
    }

    button {
        background-color: #f74d40;
        border: none;
    }

    button:hover {
        background-color: #ff6961;
    }
</style>