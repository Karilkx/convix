function acceptLove() {
    alert("YEY!DAHIL JAN, HART HART KA SAKIN! 💖");
}

function multiplyNo(button) {
    let buttonsDiv = document.getElementById("buttons");
    let newNoCount = Math.floor(Math.random() * 3) + 2; // 2-4 new "No" buttons

    // Remove the clicked "No" button
    button.remove();

    // Add new "No" buttons in random positions
    for (let i = 0; i < newNoCount; i++) {
        let newNoButton = document.createElement("button");
        newNoButton.classList.add("button", "no-button");
        newNoButton.innerText = "No 💔";
        newNoButton.onclick = function() { multiplyNo(this); };

        // Randomize position
        let x = Math.random() * (window.innerWidth - 100);
        let y = Math.random() * (window.innerHeight - 100);
        newNoButton.style.left = `${x}px`;
        newNoButton.style.top = `${y}px`;

        document.body.appendChild(newNoButton);
    }
}
