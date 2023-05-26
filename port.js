// alert('Hello! How are You');
let count1 = 0
function like1() {
  count1++;
  document.querySelector('.like-count1').textContent = count1;
} let count3 = 0;
function like3() {
  count3++;
  document.querySelector('.like-count3').textContent = count3;
}
let count2 = 0;
function like2() {
  count2++;
  document.querySelector('.like-count2').textContent = count2;
}

// Store the currently selected div box ID
let selectedBoxId = null;

// Get all the "show more" buttons
const showMoreBtns = document.querySelectorAll('.show-more-btn');

// Add a click event listener to each "show more" button
showMoreBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Get the ID of the div box that the button belongs to
    const boxId = btn.getAttribute('data-box-id');

    // Update the selected box ID
    selectedBoxId = boxId;

    // Update the details box content
    updateDetailsBoxContent();
  });
});

// Function to update the details box content
function updateDetailsBoxContent() {
  // Get the details for the currently selected div box
  let details = '';
  switch (selectedBoxId) {
    case '2':
      details = document.querySelector('#tesla').innerHTML;
      break;
    case '3':
      details = document.querySelector('#ldr').innerHTML;
      break;
    case '1':
      details = document.querySelector('#Arm').innerHTML;
      break;
    // Add more cases here as needed
  }

  // Get the details box and its content element
  const detailsBox = document.querySelector('.details-box');
  const detailsContent = detailsBox.querySelector('.details-content');

  // Clear the previous content
  detailsContent.innerHTML = '';

  // Add the details to the details box content
  detailsContent.innerHTML = details;
}
const video = document.getElementById('my-video');
video.removeAttribute('controls');

setInterval(function quotes() {

  let quotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein ",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill ",
    "The only way to do great work is to love what you do. - Steve Jobs ",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama ",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson ",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean ",
    "Do not wait for opportunities, create them. - Roy T. Bennett",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",

    "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "Chase the vision, not the money, the money will end up following you. - Tony Hsieh",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him. - David Brinkley",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Believe in the power of your dreams. - Paulo Coelho",
    "The difference between a successful person and others is not lack of strength not a lack of knowledge but rather a lack of will. - Vince Lombardi",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "The mind is everything. What you think you become. - Buddha",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "Believe in yourself and you will be unstoppable. - Emily Guay",
    "Success is not the absence of failure; it's the persistence through failure. - Aisha Tyler",
    "The best revenge is massive success.",
  ]

  let b = Math.floor(Math.random() * quotes.length);
  let psg = quotes[b].toUpperCase();

  // alert(psg);
  document.getElementById("output").innerHTML = ('"') + psg + ('"');
  // document.write(psg);
}, 5000);

var guessInput = document.getElementById("guessInput");
var guessButton = document.getElementById("guessButton");
var guessesDiv = document.getElementById("guesses");
var playAgainButton = document.getElementById("playAgainButton");

// Function to start a new game
function startGame() {
  // Generate a random number between 1 and 10
  var randomNumber = Math.floor(Math.random() * 100) + 1;

  // Initialize the number of guesses to 0
  var numGuesses = 0;

  // Enable the guess input and button
  guessInput.disabled = false;
  guessButton.disabled = false;

  // Listen for the guess button to be clicked
  guessButton.addEventListener("click", function () {
    // Get the user's guess from the input element
    var guess = parseInt(guessInput.value);

    // Increment the number of guesses
    numGuesses++;

    // Check if the guess is correct, too low, or too high
    if (guess === randomNumber) {
      // When the correct number is guessed, display a message with the number of guesses
      guessesDiv.innerHTML = "Congratulations! You guessed the number " + randomNumber + " in " + numGuesses + " guesses.";

      // Hide the guess input and button
      guessInput.disabled = true;
      guessButton.disabled = true;

      // Show the play again button
      playAgainButton.style.display = "block";
    } else if (guess < randomNumber) {
      guessesDiv.innerHTML = "Too small. Guess again.";
    } else {
      guessesDiv.innerHTML = "Too Big. Guess again.";
    }
  });

  // Listen for the play again button to be clicked
  playAgainButton.addEventListener("click", function () {
    // Hide the play again button
    playAgainButton.style.display = "none";

    // Clear the guess input and message
    guessInput.value = "";
    guessesDiv.innerHTML = "";

    // Disable the guess input and button
    guessInput.disabled = true;
    guessButton.disabled = true;

    // Start a new game
    startGame();
  });
}

// Start the game
startGame();
window.addEventListener('load', function() {
  // Hide the loading spinner
  var loading = document.querySelector('.loading');
  loading.parentNode.removeChild(loading);
});
// Wait for the page to fully load
window.onload = function() {
  // Show the body element once the page has loaded
  document.style.backgroundImage = "    linear-gradient(to left, #5e24e4 0%, rgba(81, 150, 206, 0.644) 99%, rgba(226, 221, 216, 0.527) 100%)";
  document.body.style.zIndex="55";
}


