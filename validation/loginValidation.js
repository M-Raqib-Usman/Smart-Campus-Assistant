function validateLogin(email, password) {
    if (!email || !password) {
        return "All fields required";
    }
    return "Valid";
}

module.exports = validateLogin;
// TODO: Add email format validation
