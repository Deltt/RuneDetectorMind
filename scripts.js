const target = document.querySelector("#imageTarget");
const feedback = document.querySelector("#feedback");

target.addEventListener("targetFound", () => {
  feedback.innerText = "Target detected!";
});

target.addEventListener("targetLost", () => {
  feedback.innerText = "Point camera at target";
});