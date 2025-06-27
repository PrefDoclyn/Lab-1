function validateForm(name, email, message) {
  if (!name || !email || !message) return false;
  if (!email.includes("@")) return false;
  return true;
}

// Tests
console.assert(validateForm("Alice", "alice@example.com", "Hi") === true, "Test 1 failed");
console.assert(validateForm("", "bob@example.com", "Hello") === false, "Test 2 failed");