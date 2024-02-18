<nav>
    <ul>
        <li>
            <a href="/games"><p>Link 01</p></a>
        </li>
        <li>
            <a href="https://www.youtube.com/"><p>Link 02</p></a>
        </li>
        <li>
            <a href="https://www.youtube.com/"><p>Link 03</p></a>
        </li>
    </ul>
</nav>

<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    ul {
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
    }

    li {
        width: 100%;
    }

    a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        color: white;
        text-decoration: none;
        transition: all 0.3s;
    }

    a:hover {
        background-color: rgb(75, 75, 75);
    }

    a:visited {
        color: white;
    }

    a > p {
        width: 100%;
        height: 50%;
        line-height: 200%;
        margin: 0;
        text-align: center;
        border-right: 1px solid white;
    }
</style>