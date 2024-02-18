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
    }

    div {
        border: 1px solid red;
        border-radius: 5px;
        height: 256px;
        width: 100%;
    }

    .card {
        overflow: hidden;
    }
</style>