document.addEventListener("DOMContentLoaded", function () {
    // Retrieve user information from URL parameters (replace with your server-side logic)
    const urlParams = new URLSearchParams(window.location.search);
    const userName = document.getElementById("user-name");
    const userId = document.getElementById("user-id");
    if (urlParams.has("id") && urlParams("name")) {
        userId.textContent = urlParams.get("id");
        userName.textContent = urlParams.get("name");
    }

    // Handle payment buttons
    const payButtons = document.querySelectorAll(".pay-button");
    payButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const amount = this.getAttribute("data-amount");
                window.location.href = 'card.html';
            }, 2000);
        });
    });
