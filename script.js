function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || service === "" || message === "") {
        alert("Please fill all required fields!");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
