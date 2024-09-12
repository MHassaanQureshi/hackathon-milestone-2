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
    // Get form input values
    var name = document.getElementById('user-name').value;
    var role = document.getElementById('user-role').value;
    // Create a new jsPDF instance
    var doc = new jsPDF();
    doc.addFileToVFS("Poppins-Regular-normal.ttf", "BASE64_ENCODED_NORMAL_FONT_DATA");
    doc.addFileToVFS("Poppins-Bold-normal.ttf", "BASE64_ENCODED_BOLD_FONT_DATA");
    // Register the fonts
    doc.addFont("Poppins-Regular-normal.ttf", "Poppins", "normal");
    doc.addFont("Poppins-Bold-normal.ttf", "Poppins", "bold");
    doc.setFont("Poppins", "normal");
    doc.text("".concat(name), 10, 20);
    doc.text("".concat(role), 10, 30);
    //handle skills
    var skillElements = document.querySelectorAll('.user-skills');
    var yOffset = 50; // Initial y position for skills
    skillElements.forEach(function (skillElement, index) {
        var skillValue = skillElement.value;
        doc.text("Skill: ".concat(skillValue), 10, 40);
        doc.text("Skill ".concat(index + 1, ": ").concat(skillValue), 10, yOffset);
        yOffset += 10; // Move the y position down for the next skill
    });
    //education
    var educationForms = document.querySelectorAll('.education-form');
    var yOffset2 = 100;
    educationForms.forEach(function (form, index) {
        // Extract program and school details
        var programInput = form.querySelector('input[name="program"]');
        var schoolInput = form.querySelector('input[name="school"]');
        if (programInput && schoolInput) {
            var program = programInput.value;
            var school = schoolInput.value;
            // Add each education detail to the PDF
            doc.setFontSize(12);
            doc.text("Education ".concat(index + 1, ":"), 10, yOffset2);
            doc.text("Program: ".concat(program), 10, yOffset2 + 10);
            doc.text("School: ".concat(school), 10, yOffset2 + 20);
            yOffset2 += 30; // Adjust yOffset for the next entry
        }
    });
    // Handle image upload
    var imageInput = document.getElementById('profile');
    if (imageInput.files && imageInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var imgData = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            // Add the image to the PDF
            doc.addImage(imgData, 'JPEG', 150, 0, 50, 50); // Adjust x, y, width, height
            // Save the PDF after adding the image
            doc.save('form-with-image.pdf');
        };
        reader.readAsDataURL(imageInput.files[0]); // Convert image to Base64
    }
    else {
        // If no image is selected, save the PDF without the image
        doc.save("".concat(name, " resume.pdf"));
    }
}
