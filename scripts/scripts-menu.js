document.addEventListener("DOMContentLoaded", function () {
    const menuHTML = `
        <div class="menu">
            <a class="homeButton" href="index.html">Home</a>
            <ul>
                <li><a class="button-menu" href="exercise1.html">Exercise 1</a></li>
                <li><a class="button-menu" href="exercise2.html">Exercise 2</a></li>
                <li><a class="button-menu" href="exercise3.html">Exercise 3</a></li>
                <li><a class="button-menu" href="exercise4.html">Exercise 4</a></li>
            </ul>
        </div>
    `;
    document.getElementById("menu-container").innerHTML = menuHTML;
});