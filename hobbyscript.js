// DOM Elements
const textParagraph = document.getElementById('textParagraph');
const changeTextBtn = document.getElementById('changeTextBtn');
const addListItemBtn = document.getElementById('addListItemBtn');
const removeElementBtn = document.getElementById('removeElementBtn');
const reasonsList = document.getElementById('reasonsList');
const yearSpan = document.getElementById('year');

// Set current year in footer
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Button 1: Change paragraph text
changeTextBtn.addEventListener('click', () => {
  const messages = [
    "Every rep brings me closer to my goals!",
    "Gym time is me time – focused, powerful, and present.",
    "I don't skip leg day... or any day!",
    "Progress isn't always visible in the mirror – sometimes it's in the effort."
  ];
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  textParagraph.textContent = randomMsg;
  textParagraph.style.backgroundColor = '#ffe0e0';
  setTimeout(() => {
    textParagraph.style.backgroundColor = '#f1faee';
  }, 500);
});

// Button 2: Add a new reason to the list
addListItemBtn.addEventListener('click', () => {
  const newLi = document.createElement('li');
  const reasons = [
    'I sleep better after a workout',
    'I eat cleaner when I train regularly',
    'I set goals and crush them',
    'I inspire others just by showing up',
    'Endorphins are the best natural high!'
  ];
  const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
  newLi.textContent = randomReason;
  reasonsList.appendChild(newLi);
});

// Button 3: Remove the last list item
removeElementBtn.addEventListener('click', () => {
  const items = reasonsList.getElementsByTagName('li');
  if (items.length > 0) {
    const removedItem = items[items.length - 1];
    removedItem.style.opacity = '0';
    removedItem.style.transform = 'translateX(20px)';
    setTimeout(() => {
      reasonsList.removeChild(removedItem);
    }, 300);
  } else {
    textParagraph.textContent = "You've removed all reasons... but don't give up on fitness! 💪";
    textParagraph.style.color = '#e63946';
  }
});