var _a;
var addSkillButton = document.getElementById('add-skill');
var skillsContainer = document.getElementById('skills-container');
var skillCount = 0;
addSkillButton.addEventListener('click', function () {
    // Create a new div container for the skill
    var newDiv = document.createElement('div');
    newDiv.classList.add('skills-form');
    newDiv.setAttribute('id', "skill-".concat(skillCount));
    // Create a new label
    var newLabel = document.createElement('label');
    newLabel.setAttribute('for', "skills-".concat(skillCount));
    newLabel.textContent = 'Skills:';
    // Create a new input field
    var newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'skills';
    newInput.id = "skills-".concat(skillCount);
    newInput.classList.add('user-skills');
    // Create a remove button
    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remove';
    // Use an IIFE to capture the current value of skillCount
    (function (count) {
        removeButton.addEventListener('click', function () { return removeSkill(count); });
    })(skillCount);
    // Append label, input, and remove button to the new div
    newDiv.appendChild(newLabel);
    newDiv.appendChild(newInput);
    newDiv.appendChild(removeButton);
    // Append the new div to the skills container
    skillsContainer.appendChild(newDiv);
    // Increment skill count
    skillCount++;
});
// Function to remove a skill input box
function removeSkill(id) {
    var skillToRemove = document.getElementById("skill-".concat(id));
    if (skillToRemove) {
        skillsContainer.removeChild(skillToRemove);
    }
}
//handling education
var addEducationButton = document.getElementById('add-education');
var educationContainer = document.getElementById('Education-container');
var educationCount = 0;
addEducationButton.addEventListener('click', function () {
    // Create a new div container for the education form
    var newDiv = document.createElement('div');
    newDiv.classList.add('education-form');
    newDiv.setAttribute('id', "education-".concat(educationCount));
    // Create a new div for program
    var programPart = document.createElement('div');
    programPart.setAttribute('id', 'program-part');
    // Create a new label and input for program
    var programLabel = document.createElement('label');
    programLabel.setAttribute('for', "program-".concat(educationCount));
    programLabel.textContent = 'Program:';
    var programInput = document.createElement('input');
    programInput.type = 'text';
    programInput.name = 'program';
    programInput.id = "program-".concat(educationCount);
    // Append label and input to program part
    programPart.appendChild(programLabel);
    programPart.appendChild(programInput);
    // Create a new div for school
    var schoolPart = document.createElement('div');
    schoolPart.setAttribute('id', 'school-part');
    // Create a new label and input for school
    var schoolLabel = document.createElement('label');
    schoolLabel.setAttribute('for', "school-".concat(educationCount));
    schoolLabel.textContent = 'School:';
    var schoolInput = document.createElement('input');
    schoolInput.type = 'text';
    schoolInput.name = 'school';
    schoolInput.id = "school-".concat(educationCount);
    // Append label and input to school part
    schoolPart.appendChild(schoolLabel);
    schoolPart.appendChild(schoolInput);
    // Create a remove button
    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.style.width = "24px";
    removeButton.style.height = "24px";
    removeButton.style.backgroundImage = "url(/images/minus-sign.png)"; // Set background image
    removeButton.style.backgroundSize = 'contain'; // Ensure image fits the button
    removeButton.style.backgroundRepeat = 'no-repeat'; // Prevent image repetition
    removeButton.style.border = 'none'; // Remove default border
    removeButton.style.width = '24px'; // Set button width
    removeButton.style.height = '24px';
    // Use an IIFE to capture the current value of educationCount
    (function (count) {
        removeButton.addEventListener('click', function () { return removeEducation(count); });
    })(educationCount);
    // Append program part, school part, and remove button to the new div
    newDiv.appendChild(programPart);
    newDiv.appendChild(schoolPart);
    newDiv.appendChild(removeButton);
    // Append the new div to the education container
    educationContainer.appendChild(newDiv);
    // Increment education count
    educationCount++;
});
// Function to remove an education input box
function removeEducation(id) {
    var educationToRemove = document.getElementById("education-".concat(id));
    if (educationToRemove) {
        educationContainer.removeChild(educationToRemove);
    }
}
//handling experience
var addExperienceButton = document.getElementById('add-experience');
var experienceContainer = document.getElementById('Experience-container');
var experienceCount = 0;
addExperienceButton.addEventListener('click', function () {
    // Create a new div container for the experience form
    var newDiv = document.createElement('div');
    newDiv.classList.add('experience-form');
    newDiv.setAttribute('id', "experience-".concat(experienceCount));
    // Create a new div for position
    var positionPart = document.createElement('div');
    positionPart.setAttribute('id', 'experience-position-part');
    // Create a new label and input for position
    var positionLabel = document.createElement('label');
    positionLabel.setAttribute('for', "position-".concat(experienceCount));
    positionLabel.textContent = 'Position:';
    var positionInput = document.createElement('input');
    positionInput.type = 'text';
    positionInput.name = 'position';
    positionInput.id = "position-".concat(experienceCount);
    // Append label and input to position part
    positionPart.appendChild(positionLabel);
    positionPart.appendChild(positionInput);
    // Create a new div for duration
    var durationPart = document.createElement('div');
    durationPart.setAttribute('id', 'experience-duration-part');
    // Create a new label and input for duration
    var durationLabel = document.createElement('label');
    durationLabel.setAttribute('for', "duration-".concat(experienceCount));
    durationLabel.textContent = 'Duration:';
    var durationInput = document.createElement('input');
    durationInput.type = 'text';
    durationInput.name = 'duration';
    durationInput.id = "duration-".concat(experienceCount);
    // Append label and input to duration part
    durationPart.appendChild(durationLabel);
    durationPart.appendChild(durationInput);
    // Create a remove button
    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.style.width = "24px";
    removeButton.style.height = "24px";
    removeButton.style.backgroundImage = "url(/images/minus-sign.png)"; // Set background image
    removeButton.style.backgroundSize = 'contain'; // Ensure image fits the button
    removeButton.style.backgroundRepeat = 'no-repeat'; // Prevent image repetition
    removeButton.style.border = 'none'; // Remove default border
    // Use an IIFE to capture the current value of experienceCount
    (function (count) {
        removeButton.addEventListener('click', function () { return removeExperience(count); });
    })(experienceCount);
    // Append position part, duration part, and remove button to the new div
    newDiv.appendChild(positionPart);
    newDiv.appendChild(durationPart);
    newDiv.appendChild(removeButton);
    // Append the new div to the experience container
    experienceContainer.appendChild(newDiv);
    // Increment experience count
    experienceCount++;
});
// Function to remove an experience input box
function removeExperience(id) {
    var experienceToRemove = document.getElementById("experience-".concat(id));
    if (experienceToRemove) {
        experienceContainer.removeChild(experienceToRemove);
    }
}
console.log('Script Loaded');
(_a = document.getElementById('file-upload')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function (event) {
    var _a;
    var input = event.target;
    var file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file && file.type.startsWith('image/')) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var img = document.getElementById('preview');
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                img.src = e.target.result;
                img.style.display = 'block';
            }
        };
        reader.readAsDataURL(file);
    }
});
function generatePDF() {
    // Access jsPDF from the window object
    var jsPDF = window.jspdf.jsPDF;
    // Create a new jsPDF instance
    var doc = new jsPDF();
    // Add custom fonts
    doc.addFileToVFS("Roboto-Regular-normal.ttf", "BASE64_ENCODED_NORMAL_FONT_DATA");
    doc.addFileToVFS("Roboto-Bold-normal.ttf", "BASE64_ENCODED_BOLD_FONT_DATA");
    // Register the fonts
    doc.addFont("Roboto-Regular-normal.ttf", "Roboto", "normal");
    doc.addFont("Roboto-Bold-normal.ttf", "Roboto", "bold");
    // Set font to Roboto
    doc.setFont("Roboto", "normal");
    // Get form input values
    var username = document.getElementById('user-name').value;
    var role = document.getElementById('user-role').value;
    var contact = document.getElementById('user-contact').value;
    var email = document.getElementById('user-email').value;
    var address = document.getElementById('user-address').value;
    // Add user details to PDF
    doc.setFontSize(16); // Larger font size for section headers
    doc.setFontSize(14);
    doc.setFont("Roboto", "bold");
    doc.text("Personal Details:", 10, 40); // Section title
    doc.setFont("Roboto", "normal");
    doc.text("Name: ".concat(username), 10, 50);
    doc.text("Role: ".concat(role), 10, 60);
    doc.text("Contact Number: ".concat(contact), 10, 70);
    doc.text("Email: ".concat(email), 10, 80);
    doc.text("Address: ".concat(address), 10, 100);
    // Add a line separator for sections
    doc.line(10, 115, 200, 115); // Line from (10, 115) to (200, 115)
    // Handle skills
    var skillElements = document.querySelectorAll('.user-skills');
    var yOffset = 130;
    doc.setFont("Roboto", "bold");
    doc.text("Skills:", 10, yOffset);
    doc.setFont("Roboto", "normal");
    yOffset += 10;
    skillElements.forEach(function (skillElement, index) {
        var skillValue = skillElement.value;
        doc.text("\u2022 ".concat(skillValue), 15, yOffset); // Indent with bullet point
        yOffset += 10;
    });
    // Add another line separator
    doc.line(10, yOffset, 200, yOffset); // Line to separate sections
    yOffset += 10;
    // Handle education
    var educationForms = document.querySelectorAll('.education-form');
    doc.setFont("Roboto", "bold");
    doc.text("Education:", 10, yOffset);
    doc.setFont("Roboto", "normal");
    yOffset += 10;
    educationForms.forEach(function (form, index) {
        var programInput = form.querySelector('input[name="program"]');
        var schoolInput = form.querySelector('input[name="school"]');
        if (programInput && schoolInput) {
            var program = programInput.value;
            var school = schoolInput.value;
            doc.text("\u2022 Program: ".concat(program), 15, yOffset);
            doc.text("  School: ".concat(school), 15, yOffset + 10);
            yOffset += 30;
        }
    });
    // Add a line separator for sections
    doc.line(10, yOffset, 200, yOffset);
    yOffset += 10;
    // Handle experience
    var experienceForms = document.querySelectorAll('.experience-form');
    doc.setFont("Roboto", "bold");
    doc.text("Experience:", 10, yOffset);
    doc.setFont("Roboto", "normal");
    yOffset += 10;
    experienceForms.forEach(function (form, index) {
        var positionInput = form.querySelector('input[name="position"]');
        var durationInput = form.querySelector('input[name="duration"]');
        if (positionInput && durationInput) {
            var position = positionInput.value;
            var duration = durationInput.value;
            doc.text("\u2022 Position: ".concat(position), 15, yOffset);
            doc.text("  Duration: ".concat(duration), 15, yOffset + 10);
            yOffset += 30;
        }
    });
    var imageInput = document.getElementById('profile');
    if (imageInput.files && imageInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var imgData = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            // Add the image to the PDF
            doc.addImage(imgData, 'JPEG', 150, 0, 50, 50); // Adjust x, y, width, height
            // Save the PDF after adding the image
            doc.save("".concat(username, "-cv.pdf"));
        };
        reader.readAsDataURL(imageInput.files[0]); // Convert image to Base64
    }
    else {
        // If no image is selected, save the PDF without the image
        doc.save("resume.pdf");
    }
}
