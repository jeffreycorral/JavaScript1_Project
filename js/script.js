const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');

menuButton.addEventListener('click', function () {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }  
});

const alertButton = document.getElementById('alertButton');

//Display an alert when the alert button is clicked
alertButton.addEventListener('click', function () {
    alert('Hello! This is JEPOY your AI AGENT! This an alert message!!');

});

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');


let counter = 0;


incrementButton.addEventListener('click', function () {
    counter += 1;
    counterDisplay.textContent = counter;
});


decrementButton.addEventListener('click', function () {
    counter -= 1;
    counterDisplay.textContent = counter;
});

const resetButton = document.getElementById('resetButton');

// Add an event listener to the Reset button to refresh the page
resetButton.addEventListener('click', function () {
    location.reload(); // Refresh the page
});

const usernameInput = document.getElementById('username');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

  // Get references to the form elements

  // Function to check if the input contains only letters
function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/; // Regular expression to allow only letters
    return namePattern.test(name)
  };

  // Add an event listener to the button
  greetButton.addEventListener('click' , function (){
    //Get the value of the input
    const username = usernameInput.value.trim();

    // Check the input is not empty and is valid
    if (username === '') {
        greetingMessage.textContent = 'Please enter your name.';
    } else if (!isValidName(username)) {
        greetingMessage.textContent = 'Invalid input. Please use only letters.';
    } else {
        // Set the greeting message
        greetingMessage.textContent =`Hello, ${username}!`;
    }
  });
  
const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');

addParagraphButton.addEventListener('click', function () {
    // Create a new Paragraph element
    const newParagraph = document.createElement('p');
    // Set its text content
    newParagraph.textContent = 'Congratulations on Learning Practical Javascript!';
    // Append the paragraph to the container
    paragraphContainer.appendChild(newParagraph);
});

