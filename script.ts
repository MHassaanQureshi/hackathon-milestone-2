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
    
    // Get form input values
    const name: string = (document.getElementById('user-name') as HTMLInputElement).value;
    const role: string = (document.getElementById('user-role') as HTMLInputElement).value;
    
  
    // Create a new jsPDF instance
    const doc = new jsPDF();
    doc.addFileToVFS("Poppins-Regular-normal.ttf", "BASE64_ENCODED_NORMAL_FONT_DATA");
doc.addFileToVFS("Poppins-Bold-normal.ttf", "BASE64_ENCODED_BOLD_FONT_DATA");

// Register the fonts
doc.addFont("Poppins-Regular-normal.ttf", "Poppins", "normal");
doc.addFont("Poppins-Bold-normal.ttf", "Poppins", "bold");

    doc.setFont("Poppins", "normal");
    doc.text(`${name}`, 10, 20);
    
    doc.text(`${role}`, 10, 30);

    //handle skills
    const skillElements = document.querySelectorAll('.user-skills') as NodeListOf<HTMLInputElement>;
    let yOffset = 50; // Initial y position for skills

    skillElements.forEach((skillElement, index) => {
        const skillValue = skillElement.value;
        doc.text(`Skill: ${skillValue}`, 10, 40);
        doc.text(`Skill ${index + 1}: ${skillValue}`, 10, yOffset);
        yOffset += 10; // Move the y position down for the next skill
    });
    //education
    const educationForms = document.querySelectorAll('.education-form');
    let yOffset2 = 100;

    educationForms.forEach((form, index) => {
        // Extract program and school details
        const programInput = form.querySelector('input[name="program"]') as HTMLInputElement;
        const schoolInput = form.querySelector('input[name="school"]') as HTMLInputElement;

        if (programInput && schoolInput) {
            const program = programInput.value;
            const school = schoolInput.value;

            // Add each education detail to the PDF
            doc.setFontSize(12);
            doc.text(`Education ${index + 1}:`, 10, yOffset2);
            doc.text(`Program: ${program}`, 10, yOffset2 + 10);
            doc.text(`School: ${school}`, 10, yOffset2 + 20);

            yOffset2 += 30; // Adjust yOffset for the next entry
        }
    });

    // Handle image upload
    const imageInput = document.getElementById('profile') as HTMLInputElement;
    if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const imgData = event.target?.result as string;

        // Add the image to the PDF
        doc.addImage(imgData, 'JPEG', 150,0, 50, 50); // Adjust x, y, width, height

        // Save the PDF after adding the image
        doc.save('form-with-image.pdf');
      };

      reader.readAsDataURL(imageInput.files[0]); // Convert image to Base64
    } else {
      // If no image is selected, save the PDF without the image
      doc.save(`${name} resume.pdf`);
    }
  }
