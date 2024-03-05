<script>
    export let data;
</script>

<div class="card">
    <a href="/games/{data.id}">
        <div>
            <h1>{data.title}</h1>
            <body>
                {data.body}
            </body>
        </div>
    </a>
</div>

<style>
    h1 {
        display: inline;
        background-color: #53a788;
        color: white;
    }

    div {
        border: 1px solid #33505d;
        border-radius: 5px;
        height: 256px;
        width: 100%;

        background-color: #53a788;
        color: white;
    }

    .card {
        overflow: hidden;
    }
</style>