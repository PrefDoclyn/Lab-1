function validateForm(name, email, message) {
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const isValid = validateForm(name, email, message);

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});
