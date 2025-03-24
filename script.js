let noCount = 0;
let images = [
    "images (4).jpeg",
    "images (3).jpeg",
    "c664add2a9b3b05118dcb453c7a6d177.jpg",
    "8248857610db7251980522a5656b8009.jpg",
    "746d22074e490050b11dd15c43b5cb96.jpg",
    "d4248382b71ea3da1f3fa07f8844fe39.jpg",
    "6254609c996571a1488e46d1cc702bb5.jpg"
];

function addNo() {
    noCount++;
    let noContainer = document.getElementById("no-container");

    // Remove existing No buttons
    noContainer.innerHTML = '';

    for (let i = 0; i <= noCount; i++) {
        let newNo = document.createElement("button");
        newNo.innerText = "No";
        newNo.classList.add("no-btn");

        // Random positioning
        let x = Math.random() * 300 - 150;
        let y = Math.random() * 200 - 100;

        newNo.style.transform = `translate(${x}px, ${y}px)`;

        newNo.onclick = addNo;
        noContainer.appendChild(newNo);
    }

    // Reveal images one by one
    if (noCount <= images.length) {
        let imgContainer = document.getElementById("image-container");
        let newImg = document.createElement("img");
        newImg.src = images[noCount - 1];
        newImg.style.display = "block";
        imgContainer.appendChild(newImg);
    }
}

function sayYes() {
    document.body.innerHTML = "<h1>DAHIL JAN, HART HART KA SAKIN! 💖</h1>";
}
