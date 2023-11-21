document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("password").addEventListener("blur", validatePassword);
document.getElementById("dob").addEventListener("blur", validateDOB);
document.getElementById("acceptTerms").addEventListener("blur", validateAcceptTerms);

function submitForm() {
    // Perform validation
    var isValid = validateName() && validateEmail() && validatePassword() && validateDOB() && validateAcceptTerms();

    if (isValid) {
        // Get form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var dob = document.getElementById("dob").value;
        var acceptTerms = document.getElementById("acceptTerms").checked;

        // Add entry to the table
        addEntryToTable(name, email, password, dob, acceptTerms);

        // Additional actions or form submission logic can be added here

        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("dob").value = "";
        document.getElementById("acceptTerms").checked = false;
    }
}

function validateName() {
    var name = document.getElementById("name").value;
    var nameError = document.getElementById("nameError");
    nameError.innerText = "";
    if (!name) {
        nameError.innerText = "Please enter a valid name.";
        return false;
    }
    return true;
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    emailError.innerText = "";
    if (!email) {
        emailError.innerText = "Please enter a valid email address.";
        return false;
    }
    return true;
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("passwordError");
    passwordError.innerText = "";
    if (!password) {
        passwordError.innerText = "Please enter a valid password.";
        return false;
    }
    return true;
}

function validateDOB() {
    var dobInput = document.getElementById("dob");
    var dobError = document.getElementById("dobError");
    dobError.innerText = "";
    var dob = new Date(dobInput.value);
    var age = calculateAge(dob);
    if (!dob || age < 18 || age > 55) {
        dobError.innerText = "Please enter a valid date of birth between 18 and 55 years old.";
        return false;
    }
    return true;
}

function validateAcceptTerms() {
    var acceptTerms = document.getElementById("acceptTerms");
    var acceptTermsError = document.getElementById("acceptTermsError");
    acceptTermsError.innerText = "";
    if (!acceptTerms.checked) {
        acceptTermsError.innerText = "Please accept the terms and conditions.";
        return false;
    }
    return true;
}

function calculateAge(birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function submitForm() {
    // Perform validation
    var isValid = validateName() && validateEmail() && validatePassword() && validateDOB() && validateAcceptTerms();

    if (isValid) {
        // Get form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var dob = document.getElementById("dob").value;
        var acceptTerms = document.getElementById("acceptTerms").checked;

        // Add entry to the table
        addEntryToTable(name, email, password, dob, acceptTerms);

        // Store entry in local storage
        storeEntryInLocalStorage(name, email, password, dob, acceptTerms);

        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("dob").value = "";
        document.getElementById("acceptTerms").checked = false;
    }
}

// Function to store the entry in local storage
function storeEntryInLocalStorage(name, email, password, dob, acceptTerms) {
    // Retrieve existing entries from local storage
    var storedEntries = JSON.parse(localStorage.getItem("entries")) || [];

    // Add the new entry
    var newEntry = { name, email, password, dob, acceptTerms };
    storedEntries.push(newEntry);

    // Store the updated entries back to local storage
    localStorage.setItem("entries", JSON.stringify(storedEntries));
}

function addEntryToTable(name, email, password, dob, acceptTerms) {
    var tableBody = document.getElementById("entriesTableBody");

    var newRow = tableBody.insertRow();

    var nameCell = newRow.insertCell(0);
    var emailCell = newRow.insertCell(1);
    var passwordCell = newRow.insertCell(2);
    var dobCell = newRow.insertCell(3);
    var acceptTermsCell = newRow.insertCell(4);

    // Assign data to cells
    nameCell.textContent = name;
    emailCell.textContent = email;
    passwordCell.textContent = password;
    dobCell.textContent = dob;
    acceptTermsCell.textContent = acceptTerms ? "True" : "False";
}
