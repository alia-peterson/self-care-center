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

var favoriteAffirms = []

var favoriteMantras = []

//queryselectors
var receiveMessageButton = document.querySelector('#receive-message')
var clearContentsButton = document.querySelector('#clear-contents')
var addMessageButton = document.querySelector('#add-message')
var submitButton = document.querySelector('#submit')
var favoritesButton = document.querySelector('#view-favorites')
var mainPageButton = document.querySelector('#main-page')
var clearFavoritesButton = document.querySelector('#clear-favorites')

var favoriteLogo = document.querySelector('#favorite-logo')
var displayedMessage = document.querySelector('#new-message')
var meditationLogo = document.querySelector('.meditation-logo')
var radioButtons = document.querySelectorAll('.radio')
var userInputForm = document.querySelector('.input-box')
var userInputMessage = document.querySelector('#message-input')
var mainPageView = document.querySelector('.main-page')
var favoritesPage = document.querySelector('.favorites-page')

//eventhandlers
receiveMessageButton.addEventListener('click', displayNewMessage)
clearContentsButton.addEventListener('click', clearMessageContents)
addMessageButton.addEventListener('click', showUserMessageForm)
submitButton.addEventListener('click', submitNewMessage)
favoriteLogo.addEventListener('click', toggleFavorite)
clearFavoritesButton.addEventListener('click', clearFavoritesArray)
mainPageButton.addEventListener('click', function() {
  switchViews()
  checkFavorite()
})

favoritesButton.addEventListener('click', function() {
  switchViews()
  displayFavorites()
  addListItemEventListener()
})

//functions
function displayNewMessage() {
  if (document.getElementById('radio-affirm').checked) {
    displayedMessage.innerText = affirmations[randomIndexGenerator(affirmations)]
  } else if (document.getElementById('radio-mantra').checked) {
    displayedMessage.innerText = mantras[randomIndexGenerator(mantras)]
  }
  hideMeditationLogo()
  displayClearContentsButton()
  checkFavorite()
  displayFavoriteLogo()
}

function clearMessageContents() {
  radioButtons[0].checked = false
  radioButtons[1].checked = false

  displayedMessage.innerText = ''
  displayMeditationLogo()
  hideClearContents()
  hideFavoriteLogo()
}

function toggleFavorite() {
  if (favoriteLogo.innerText === '🤍') {
    favoriteLogo.innerText = '♥️'
    addFavorite()
  } else if (favoriteLogo.innerText === '♥️'){
    favoriteLogo.innerText = '🤍'
    removeFavorite()
  }
}

function checkFavorite() {
  if (favoriteAffirms.includes(displayedMessage.innerText) || favoriteMantras.includes(displayedMessage.innerText)) {
    favoriteLogo.innerText = '♥️'
  } else {
    favoriteLogo.innerText = '🤍'
  }
}

function addFavorite() {
  if (affirmations.includes(displayedMessage.innerText)) {
    favoriteAffirms.push(displayedMessage.innerText)
  } else if (mantras.includes(displayedMessage.innerText)) {
    favoriteMantras.push(displayedMessage.innerText)
  }
}

function removeFavorite() {
  var messageIndex
  spliceFavoriteArrays(displayedMessage.innerText)
}

function spliceFavoriteArrays(input) {
  if (favoriteAffirms.includes(input)) {
    messageIndex = favoriteAffirms.indexOf(input)
    favoriteAffirms.splice(messageIndex, 1)
  } else if (favoriteMantras.includes(input)) {
    messageIndex = favoriteMantras.indexOf(input)
    favoriteMantras.splice(messageIndex, 1)
  }
}

function switchViews() {
  mainPageView.classList.toggle('hidden')
  favoritesPage.classList.toggle('hidden')
}

function displayFavorites() {
  var affirmList = document.querySelector('.affirmations-list')
  var mantraList = document.querySelector('.mantras-list')

  affirmList.innerHTML = ``
  mantraList.innerHTML = ``

  for (var i = 0; i < favoriteAffirms.length; i++) {
    affirmList.innerHTML += `<li>${favoriteAffirms[i]}</li>`
  }

  for (var i = 0; i < favoriteMantras.length; i++) {
    mantraList.innerHTML += `<li>${favoriteMantras[i]}</li>`
  }
}

function clearFavoritesArray() {
  favoriteAffirms = []
  favoriteMantras = []

  displayFavorites()
}

function showUserMessageForm() {
  userInputForm.classList.toggle('hidden')
}

function submitNewMessage() {
  if (document.getElementById('radio-affirm-input').checked && userInputMessage.value) {
    affirmations.push(userInputMessage.value)
  } else if (document.getElementById('radio-mantra-input').checked && userInputMessage.value) {
    mantras.push(userInputMessage.value)
  } else {
    return document.querySelector('.error-message').classList.remove('hidden')
  }
  hideMeditationLogo()
  displayUserMessage()
  displayClearContentsButton()
  displayFavoriteLogo()
  checkFavorite()
}

function displayUserMessage() {
  displayedMessage.innerText = userInputMessage.value
  userInputMessage.value = ''
  document.querySelector('.error-message').classList.add('hidden')

  radioButtons[2].checked = false
  radioButtons[3].checked = false
}

function addListItemEventListener() {
  var listItems = document.querySelectorAll('li')
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('dblclick', deleteListItem)
  }
}

function deleteListItem() {
  spliceFavoriteArrays(event.target.innerText)
  displayFavorites()
  addListItemEventListener()
}

function addRadioEventListener() {
  for (var i = 0; i < 2; i++) {
    radioButtons[i].addEventListener('click', enableMessageButton)
  }
} addRadioEventListener()

function enableMessageButton() {
  receiveMessageButton.disabled = false
}

function displayMeditationLogo() {
  meditationLogo.classList.remove('hidden')
}

function hideMeditationLogo() {
  meditationLogo.classList.add('hidden')
}

function displayClearContentsButton() {
  clearContentsButton.classList.remove('hidden')
}

function hideClearContents() {
  clearContentsButton.classList.add('hidden')
}

function displayFavoriteLogo() {
  favoriteLogo.classList.remove('hidden')
}

function hideFavoriteLogo() {
  favoriteLogo.classList.add('hidden')
}

function randomIndexGenerator(array) {
  return Math.floor(Math.random() * array.length)
}
