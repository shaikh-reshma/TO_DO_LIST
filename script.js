const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let deleteBtn = document.createElement("i");
        deleteBtn.className = "fa-solid fa-trash";
        deleteBtn.style.color = "gray";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.style.cursor = "pointer";

        // Delete button functionality
        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        // Toggle checked class on click
        li.addEventListener("click", function () {
            li.classList.toggle("checked");
        });

        // Remove task on double click
        li.addEventListener("dblclick", function () {
            listContainer.removeChild(li);
        });

        // Append elements
        li.appendChild(deleteBtn);
        listContainer.appendChild(li);
        inputBox.value = ''; // Clear input
    }
}

const images = [
    "image/5e467146355bff196b6da5d9ee0490e8.jpg",
    "image/collage-photos-with-blue-background-with-photo-camera-words-day-day_1235831-275245.avif",
    "image/girl-is-taking-photo-with-camera_727939-5369.avif",
    "image/how-to-generate.webp"
]; //ADDED image file paths HERE

let index = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

setInterval(changeBackground, 5000); // Change every 5 seconds
changeBackground(); // Initial call
