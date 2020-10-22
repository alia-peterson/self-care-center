var affirmations = [
  'I forgive myself and set myself free.',
  'I believe I can be all that I want to be.',
  'I am in the process of becoming the best version of myself.',
  'I have the freedom & power to create the life I desire.',
  'I choose to be kind to myself and love myself unconditionally.',
  'My possibilities are endless.',
  'I am worthy of my dreams.',
  'I am enough.',
  'I deserve to be healthy and feel good.',
  'I am full of energy and vitality and my mind is calm and peaceful.',
  'Every day I am getting healthier and stronger.',
  'I honor my body by trusting the signals that it sends me.',
  'I manifest perfect health by making smart choices.'
]

var mantras = [
  'Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.',
  'Don\'t let yesterday take up too much of today.',
  'Every day is a second chance.',
  'Tell the truth and love everyone.',
  'I am free from sadness.',
  'I am enough.',
  'In the beginning it is you, in the middle it is you and in the end it is you.',
  'I love myself.',
  'I am present now.',
  'Inhale the future, exhale the past.',
  'This too shall pass.',
  'Yesterday is not today.',
  'The only constant is change.',
  'Onward and upward.',
  'I am the sky, the rest is weather.'
]

//queryselectors
var receiveMessageButton = document.querySelector('#receive-message')
var clearContentsButton = document.querySelector('#clear-contents')
var displayedMessage = document.querySelector('#new-message')
var meditationLogo = document.querySelector('#meditation-logo')
var radioButtons = document.querySelectorAll('.radio')

//eventhandlers
receiveMessageButton.addEventListener('click', displayNewMessage)
clearContentsButton.addEventListener('click', clearMessageContents)

//functions
function displayNewMessage() {
  if (document.getElementById('radio-affirm').checked) {
    displayedMessage.innerText = affirmations[randomIndexGenerator(affirmations)]
    hideLogo()
    displayClearContents()
  } else if (document.getElementById('radio-mantra').checked) {
    displayedMessage.innerText = mantras[randomIndexGenerator(mantras)]
    hideLogo()
    displayClearContents()
  }
}

function clearMessageContents() {
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false
  }
  displayedMessage.innerText = ''
  showLogo()
  hideClearContents()
}

// function enableMessageButton() {
//   for (var i = 0; i < radioButtons.length; i++) {
//     if (radioButtons[i].checked) {
//       receiveMessageButton.disabled = false
//     }
//   }
// }

function hideLogo() {
  meditationLogo.classList.add('hidden')
}

function showLogo() {
  meditationLogo.classList.remove('hidden')
}

function displayClearContents() {
  clearContentsButton.classList.remove('hidden')
}

function hideClearContents() {
  clearContentsButton.classList.add('hidden')
}

function randomIndexGenerator(array) {
  return Math.floor(Math.random() * array.length)
}
