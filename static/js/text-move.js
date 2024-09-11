
const words = [" science", "science"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("dynamic-text");
const typingSpeed = 100;  // Typing speed (milliseconds)
const deletingSpeed = 50; // Deleting speed (milliseconds)
const delayBetweenWords = 1000; // Delay before typing the next word

function type() {
  const currentWord = words[index];
  const currentDisplayText = textElement.textContent;

  if (!isDeleting) {
    // Typing
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      // When word is fully typed, wait before deleting
      setTimeout(() => isDeleting = true, delayBetweenWords);
    }
  } else {
    // Deleting
    textElement.textContent = currentDisplayText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      // When deletion is complete, move to the next word
      isDeleting = false;
      index = (index + 1) % words.length;
    }
  }

  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

// Start typing effect
type();

function playVideo() {
  var overlay = document.getElementById('videoOverlay');
  var video = document.getElementById('promoVideo');

  // Show the video overlay
  overlay.style.display = 'flex';
  
  // Play the video
  video.play();

  // Event listener to hide the overlay and redirect after the video ends
  video.addEventListener('ended', function() {
    overlay.style.display = 'none';
    // Redirect to your desired page after video ends
    window.location.href = '{% url "index" %}';
  });
}
