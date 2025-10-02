const model = document.querySelector("#model");
const target = document.querySelector("#imageTarget");
const feedback = document.querySelector("#feedback");

// Vectors for smoothing
let targetPos = new THREE.Vector3();
let currentPos = new THREE.Vector3();
let targetRot = new THREE.Euler();
let currentRot = new THREE.Euler();

target.addEventListener("targetFound", () => {
    feedback.innerText = "Target detected!";
});

target.addEventListener("targetLost", () => {
    feedback.innerText = "Point camera at target";
});

target.addEventListener("targetUpdate", (event) => {
    // Update target position/rotation from MindAR
    targetPos.set(
        event.detail.position.x,
        event.detail.position.y,
        event.detail.position.z
    );
    targetRot.set(
        event.detail.rotation.x,
        event.detail.rotation.y,
        event.detail.rotation.z
    );
});

// Register a tick component for smoothing
AFRAME.registerComponent('smooth-follow', {
    tick: function () {
        // Lerp position
        currentPos.lerp(targetPos, 0.2);  // 0.2 = smoothing factor (adjust 0.1-0.3 for less/more smoothing)
        model.object3D.position.copy(currentPos);

        // Smooth rotation
        currentRot.x += (targetRot.x - currentRot.x) * 0.2;
        currentRot.y += (targetRot.y - currentRot.y) * 0.2;
        currentRot.z += (targetRot.z - currentRot.z) * 0.2;
        model.object3D.rotation.copy(currentRot);
    }
});

// Attach smoothing to the model
model.setAttribute('smooth-follow', '');
