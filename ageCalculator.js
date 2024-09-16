// Event listener for the Calculate Age button
document.getElementById('calculateBtn').addEventListener('click', calculateAge);

// Function to calculate age in years, months, and days
function calculateAge() {
    // Retrieve the dates
    var dates = getDates();
    var dob = dates.dob;
    var checkDate = dates.checkDate;
    
    // Check if the dates are valid
    if (!dob || !checkDate) return;

    // Validate that check date is after birth date
    if (checkDate < dob) {
        document.getElementById('result').innerText = "Check date must be after the birth date.";
        return;
    }

    // Calculate years, months, and days
    var years = checkDate.getFullYear() - dob.getFullYear();
    var months = checkDate.getMonth() - dob.getMonth();
    var days = checkDate.getDate() - dob.getDate();

    // Adjust for negative months and days
    if (days < 0) {
        months--;
        days += new Date(checkDate.getFullYear(), checkDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Display the result
    document.getElementById('result').innerText = years + ' years, ' + months + ' months, and ' + days + ' days';
}

// Function to read the input dates
function getDates() {
    // Retrieve input values using var
    var dobInput = document.getElementById('dob').value;
    var checkDateInput = document.getElementById('checkDate').value;

    // Check if inputs are provided
    if (!dobInput || !checkDateInput) {
        document.getElementById('result').innerText = "Please enter both dates.";
        return {};
    }

    // Convert inputs to Date objects
    var dob = new Date(dobInput);
    var checkDate = new Date(checkDateInput);

    // Return dates as an object
    return {
        dob: dob,
        checkDate: checkDate
    };
}
