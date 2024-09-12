const addSkillButton = document.getElementById('add-skill') as HTMLButtonElement;
const skillsContainer = document.getElementById('skills-container') as HTMLDivElement;
let skillCount: number = 0;

addSkillButton.addEventListener('click', () => {
    // Create a new div container for the skill
    const newDiv = document.createElement('div');
    newDiv.classList.add('skills-form');
    newDiv.setAttribute('id', `skill-${skillCount}`);

    // Create a new label
    const newLabel = document.createElement('label');
    newLabel.setAttribute('for', `skills-${skillCount}`);
    newLabel.textContent = 'Skills:';

    // Create a new input field
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'skills';
    newInput.id = `skills-${skillCount}`;
    newInput.classList.add('user-skills');

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remove';

    // Use an IIFE to capture the current value of skillCount
    (function (count: number) {
        removeButton.addEventListener('click', () => removeSkill(count));
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
function removeSkill(id: number): void {
    const skillToRemove = document.getElementById(`skill-${id}`);
    if (skillToRemove) {
        skillsContainer.removeChild(skillToRemove);
    }
}
//handling education
const addEducationButton = document.getElementById('add-education') as HTMLButtonElement;
const educationContainer = document.getElementById('Education-container') as HTMLDivElement;
let educationCount: number = 0;

addEducationButton.addEventListener('click', () => {
    // Create a new div container for the education form
    const newDiv = document.createElement('div');
    newDiv.classList.add('education-form');
    newDiv.setAttribute('id', `education-${educationCount}`);

    // Create a new div for program
    const programPart = document.createElement('div');
    programPart.setAttribute('id', 'program-part');

    // Create a new label and input for program
    const programLabel = document.createElement('label');
    programLabel.setAttribute('for', `program-${educationCount}`);
    programLabel.textContent = 'Program:';

    const programInput = document.createElement('input');
    programInput.type = 'text';
    programInput.name = 'program';
    programInput.id = `program-${educationCount}`;
    
    // Append label and input to program part
    programPart.appendChild(programLabel);
    programPart.appendChild(programInput);

    // Create a new div for school
    const schoolPart = document.createElement('div');
    schoolPart.setAttribute('id', 'school-part');

    // Create a new label and input for school
    const schoolLabel = document.createElement('label');
    schoolLabel.setAttribute('for', `school-${educationCount}`);
    schoolLabel.textContent = 'School:';

    const schoolInput = document.createElement('input');
    schoolInput.type = 'text';
    schoolInput.name = 'school';
    schoolInput.id = `school-${educationCount}`;
    
    // Append label and input to school part
    schoolPart.appendChild(schoolLabel);
    schoolPart.appendChild(schoolInput);

    // Create a remove button
    const removeButton = document.createElement('button');
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
    (function (count: number) {
        removeButton.addEventListener('click', () => removeEducation(count));
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
function removeEducation(id: number): void {
    const educationToRemove = document.getElementById(`education-${id}`);
    if (educationToRemove) {
        educationContainer.removeChild(educationToRemove);
    }
}

//handling experience
const addExperienceButton = document.getElementById('add-experience') as HTMLButtonElement;
const experienceContainer = document.getElementById('Experience-container') as HTMLDivElement;
let experienceCount: number = 0;

addExperienceButton.addEventListener('click', () => {
    // Create a new div container for the experience form
    const newDiv = document.createElement('div');
    newDiv.classList.add('experience-form');
    newDiv.setAttribute('id', `experience-${experienceCount}`);

    // Create a new div for position
    const positionPart = document.createElement('div');
    positionPart.setAttribute('id', 'experience-position-part');

    // Create a new label and input for position
    const positionLabel = document.createElement('label');
    positionLabel.setAttribute('for', `position-${experienceCount}`);
    positionLabel.textContent = 'Position:';

    const positionInput = document.createElement('input');
    positionInput.type = 'text';
    positionInput.name = 'position';
    positionInput.id = `position-${experienceCount}`;
    
    // Append label and input to position part
    positionPart.appendChild(positionLabel);
    positionPart.appendChild(positionInput);

    // Create a new div for duration
    const durationPart = document.createElement('div');
    durationPart.setAttribute('id', 'experience-duration-part');

    // Create a new label and input for duration
    const durationLabel = document.createElement('label');
    durationLabel.setAttribute('for', `duration-${experienceCount}`);
    durationLabel.textContent = 'Duration:';

    const durationInput = document.createElement('input');
    durationInput.type = 'text';
    durationInput.name = 'duration';
    durationInput.id = `duration-${experienceCount}`;
    
    // Append label and input to duration part
    durationPart.appendChild(durationLabel);
    durationPart.appendChild(durationInput);

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.style.width = "24px";
    removeButton.style.height = "24px";
    removeButton.style.backgroundImage = "url(/images/minus-sign.png)"; // Set background image
    removeButton.style.backgroundSize = 'contain'; // Ensure image fits the button
    removeButton.style.backgroundRepeat = 'no-repeat'; // Prevent image repetition
    removeButton.style.border = 'none'; // Remove default border

    // Use an IIFE to capture the current value of experienceCount
    (function (count: number) {
        removeButton.addEventListener('click', () => removeExperience(count));
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
function removeExperience(id: number): void {
    const experienceToRemove = document.getElementById(`experience-${id}`);
    if (experienceToRemove) {
        experienceContainer.removeChild(experienceToRemove);
    }
}


console.log('Script Loaded');
document.getElementById('file-upload')?.addEventListener('change', function(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e: ProgressEvent<FileReader>) {
            const img = document.getElementById('preview') as HTMLImageElement;
            if (e.target?.result) {
                img.src = e.target.result as string;
                img.style.display = 'block';
            }
        }
        reader.readAsDataURL(file);
    }
});



function generatePDF(): void {
    // Access jsPDF from the window object
    const { jsPDF } = (window as any).jspdf;
    
    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add custom fonts
    doc.addFileToVFS("Roboto-Regular-normal.ttf", "BASE64_ENCODED_NORMAL_FONT_DATA");
    doc.addFileToVFS("Roboto-Bold-normal.ttf", "BASE64_ENCODED_BOLD_FONT_DATA");

    // Register the fonts
    doc.addFont("Roboto-Regular-normal.ttf", "Roboto", "normal");
    doc.addFont("Roboto-Bold-normal.ttf", "Roboto", "bold");

    // Set font to Roboto
    doc.setFont("Roboto", "normal");

    // Get form input values
    const username: string = (document.getElementById('user-name') as HTMLInputElement).value;
    const role: string = (document.getElementById('user-role') as HTMLInputElement).value;
    const contact: string = (document.getElementById('user-contact') as HTMLInputElement).value;
    const email: string = (document.getElementById('user-email') as HTMLInputElement).value;
    const address: string = (document.getElementById('user-address') as HTMLInputElement).value;

    // Add user details to PDF
    doc.setFontSize(16); // Larger font size for section headers

   

    doc.setFontSize(14);
    doc.setFont("Roboto", "bold");
    doc.text("Personal Details:", 10, 40); // Section title

    doc.setFont("Roboto", "normal");
    doc.text(`Name: ${username}`, 10, 50);
    doc.text(`Role: ${role}`, 10, 60);
    doc.text(`Contact Number: ${contact}`, 10, 70);
    doc.text(`Email: ${email}`, 10, 80);
    doc.text(`Address: ${address}`, 10, 100);

    // Add a line separator for sections
    doc.line(10, 115, 200, 115); // Line from (10, 115) to (200, 115)

    // Handle skills
    const skillElements = document.querySelectorAll('.user-skills') as NodeListOf<HTMLInputElement>;
    let yOffset = 130;
    doc.setFont("Roboto", "bold");
    doc.text("Skills:", 10, yOffset);
    doc.setFont("Roboto", "normal");
    yOffset += 10;

    skillElements.forEach((skillElement, index) => {
        const skillValue = skillElement.value;
        doc.text(`• ${skillValue}`, 15, yOffset); // Indent with bullet point
        yOffset += 10;
    });

    // Add another line separator
    doc.line(10, yOffset, 200, yOffset); // Line to separate sections
    yOffset += 10;

    // Handle education
    const educationForms = document.querySelectorAll('.education-form');
    doc.setFont("Roboto", "bold");
    doc.text("Education:", 10, yOffset);
    doc.setFont("Roboto", "normal");
    yOffset += 10;

    educationForms.forEach((form, index) => {
        const programInput = form.querySelector('input[name="program"]') as HTMLInputElement;
        const schoolInput = form.querySelector('input[name="school"]') as HTMLInputElement;

        if (programInput && schoolInput) {
            const program = programInput.value;
            const school = schoolInput.value;

            doc.text(`• Program: ${program}`, 15, yOffset);
            doc.text(`  School: ${school}`, 15, yOffset + 10);
            yOffset += 30;
        }
    });

    // Add a line separator for sections
    doc.line(10, yOffset, 200, yOffset);
    yOffset += 10;

    // Handle experience
    const experienceForms = document.querySelectorAll('.experience-form');
    doc.setFont("Roboto", "bold");
    doc.text("Experience:", 10, yOffset);
    doc.setFont("Roboto", "normal");
    yOffset += 10;

    experienceForms.forEach((form, index) => {
        const positionInput = form.querySelector('input[name="position"]') as HTMLInputElement;
        const durationInput = form.querySelector('input[name="duration"]') as HTMLInputElement;

        if (positionInput && durationInput) {
            const position = positionInput.value;
            const duration = durationInput.value;

            doc.text(`• Position: ${position}`, 15, yOffset);
            doc.text(`  Duration: ${duration}`, 15, yOffset + 10);
            yOffset += 30;
        }
    });
    const imageInput = document.getElementById('profile') as HTMLInputElement;
    if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const imgData = event.target?.result as string;

        // Add the image to the PDF
        doc.addImage(imgData, 'JPEG', 150,0, 50, 50); // Adjust x, y, width, height

        // Save the PDF after adding the image
        doc.save(`${username}-cv.pdf`);
      };

      reader.readAsDataURL(imageInput.files[0]); // Convert image to Base64
    } else {
      // If no image is selected, save the PDF without the image
      doc.save(`resume.pdf`);
    }
}
