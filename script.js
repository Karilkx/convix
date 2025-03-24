let noCount = 0;

function addNo() {
    noCount++;
    let noContainer = document.getElementById("no-container");

    // Remove existing No buttons
    noContainer.innerHTML = '';

    for (let i = 0; i <= noCount; i++) {
        let newNo = document.createElement("button");
        newNo.innerText = "No";
        newNo.classList.add("no-btn");

        // Generate random positions **but avoid covering the question & "Yes" button**
        let x = Math.random() * 300 - 150; // Random horizontal shift
        let y = Math.random() * 100 + 50;  // Random vertical shift below the question

        newNo.style.position = "absolute";
        newNo.style.left = `calc(50% + ${x}px)`;
        newNo.style.top = `calc(50% + ${y}px)`;

        newNo.onclick = addNo;
        noContainer.appendChild(newNo);
    }
}

function sayYes() {
    document.body.innerHTML = `
        <h1 class="celebration-text">DAHIL JAN, HART HART KA SAKIN! 💖</h1>
    `;
    document.body.classList.add("celebration");
}
