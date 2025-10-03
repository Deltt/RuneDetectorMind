const target = document.querySelector("#imageTarget");
const feedback = document.querySelector("#feedback");

target.addEventListener("targetFound", () => {
    feedback.innerText = "Target detected!";
});

target.addEventListener("targetLost", () => {
    feedback.innerText = "Point camera at target";
});

// Optional: check when MindAR scene is loaded
const scene = document.querySelector("a-scene");
scene.addEventListener("loaded", () => {
    console.log("MindAR scene loaded and ready.");
});