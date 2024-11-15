
function updateDateTime() {
    const dateTime = new Date();
    document.getElementById("date-time").innerText = dateTime.toLocaleString();
}
setInterval(updateDateTime, 1000);


function toggleMore() {
    const moreText = document.getElementById("moreText");
    const btn = event.target;
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btn.innerText = "Daha Az Gör";
    } else {
        moreText.style.display = "none";
        btn.innerText = "Daha Fazla Gör";
    }
}


function filterProjects(filter) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (filter === 'latest') {
            project.style.display = "inline-block"; 
        } else if (filter === 'popular') {
            project.style.display = "inline-block"; 
        }
    });
}


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorMessage = document.getElementById("error-message");

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!name || !email || !message) {
        errorMessage.textContent = "Lütfen tüm alanları doldurunuz.";
    } else if (!emailPattern.test(email)) {
        errorMessage.textContent = "Geçerli bir e-posta adresi giriniz.";
    } else {
        errorMessage.textContent = "";
        alert("Mesajınız başarıyla gönderildi!");
        document.getElementById("contactForm").reset();
    }
});