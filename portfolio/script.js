
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}


const texts = ["Full Stack Developer", "Cloud Enthusiast", "Web Designer"];
let index = 0;
const dynamicText = document.getElementById("dynamic-text");

setInterval(() => {
    dynamicText.innerText = texts[index];
    index = (index + 1) % texts.length;
}, 2000);


const projects = [
    { title: "Eventify", desc: "Events Activity management", img: "images/event.png" },
    { title: "RideWave", desc: "Ride Booking App", img: "images/ride.png" },
    { title: "Portfolio Website", desc: "Personal portfolio", img: "images/hero.png" }
];

const container = document.getElementById("projectContainer");

projects.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
    `;
    container.appendChild(div);
});


const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    function setError(input, msg) {
        input.nextElementSibling.innerText = msg;
        valid = false;
    }
    function clearError(input) {
        input.nextElementSibling.innerText = "";
    }

    if (name.value === "") setError(name, "Name required"); else clearError(name);
    if (!email.value.includes("@")) setError(email, "Invalid email"); else clearError(email);
    if (subject.value === "") setError(subject, "Subject required"); else clearError(subject);
    if (message.value === "") setError(message, "Message required"); else clearError(message);

    if (valid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});