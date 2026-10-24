// const profileContainer = document.querySelector(".profile-container");

// document.querySelector("#profilepic a").addEventListener("click", (e) => {
//     e.preventDefault();  // prevents page navigation
//     profileContainer.classList.toggle("open");
// });

// const tiles = document.querySelectorAll(".tile");

// tiles.forEach(tile => {
//     tile.addEventListener("click", () => {
//         tile.classList.toggle("open");
//     });
// });


const tiles = document.querySelectorAll(".tile");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");

tiles.forEach(tile => {
    tile.addEventListener("click", () => {
        const img = tile.querySelector("img");
        lightboxImg.src = img.src;      // load the clicked image
        lightboxImg.alt = img.alt;      // copy alt text
        lightbox.classList.add("open"); // show overlay
    });
});

// Close lightbox when clicking the X
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("open");
});

// Optional: close on background click
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) { // click outside image
        lightbox.classList.remove("open");
    }
});

// Optional: close with ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lightbox.classList.remove("open");
});
