const outputWindow = document.querySelector('.output-window');
const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');
const backspace = document.querySelector('.backspace');
const enter = document.querySelector('.enter');
const caps = document.querySelector('.caps');
const shift = document.querySelectorAll('.shift');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const capsLockPointer = document.querySelector('.pointer');
const closeButton = document.querySelector('.close');
const minButton = document.querySelector('.minimize');
const maxButton = document.querySelector('.maximize');
const springboardIcon = document.querySelector('.springboard__icon');
const langButton = document.querySelector('.lang');
const volumeButton = document.querySelector('.volume');
const eventCode = document.querySelector('.event_code');
const eventWhich = document.querySelector('.event_which');
const eventKey = document.querySelector('.event_key');
const eventLocation = document.querySelector('.event_location');
const signs = document.querySelector('.count_signs');
const funcKeys = document.querySelectorAll('.x');
const modal = document.querySelector('.modal');
const fimanager = document.querySelector('.fimanager');
const microphoneButton = document.querySelector('.fa-microphone')
const modalShift = document.querySelector('.x_shift');
const speechToText = document.querySelector('.speech-to-text');
const trafficLight = document.querySelector('.keys__navigation');
const trafficLightBtn = document.querySelectorAll('.navigation_button');

trafficLight.addEventListener('mouseover', () => {
  for (let i = 0; i < trafficLightBtn.length; i++) {
    trafficLightBtn[i].style.opacity = '0.7';
  }
})

trafficLight.addEventListener('mouseout', () => {
  for (let i = 0; i < trafficLightBtn.length; i++) {
    trafficLightBtn[i].style.opacity = '0';
  }
})

// Boolean
let capsLockOn = false;
let shiftOn = false;
let english = true;
let volume = true;
let mic = false;

// audio
const audioEN = document.querySelector('.audio_standart_en');
const audioRU = document.querySelector('.audio_standart_ru');
const audioReturn = document.querySelector('.audio_return');
const audioDelete = document.querySelector('.audio_delete');
const audioSpacebar = document.querySelector('.audio_spacebar');
const audioShift = document.querySelector('.audio_spacebar');

// Keys
let pressKey = (e) => {
  let start = outputWindow.selectionStart;
  outputWindow.textContent = outputWindow.value;
  outputWindow.value = outputWindow.value.slice(0, start) + e.target.textContent + outputWindow.value.slice((start));
  outputWindow.focus();
  outputWindow.selectionStart = start + 1;
  outputWindow.selectionEnd = outputWindow.selectionStart;
  if (volume)(english) ? audioEN.play() : audioRU.play();
  if (volume)(english) ? audioEN.currentTime = 0 : audioRU.currentTime = 0;
  cleanForm();
}

// Backspace
let pressBackspace = () => {
  let start = outputWindow.selectionStart;
  if (start === 0) return;
  outputWindow.value = outputWindow.value.slice(0, (start - 1)) + outputWindow.value.slice(start);
  outputWindow.focus();
  outputWindow.selectionStart = start - 1;
  outputWindow.selectionEnd = outputWindow.selectionStart;
  if (volume) audioDelete.play();
  if (volume) audioDelete.currentTime = 0;
}

// Enter
let pressEnter = () => {
  outputWindow.value += "\n";
  outputWindow.focus();
  if (volume) audioReturn.currentTime = 0;
  if (volume) audioReturn.play();
}

// Capslock
let pressCapslock = () => {
  if (!capsLockOn) {
    for (let i = 0; i < keys.length; i++) {
      keys[i].style.textTransform = (!shiftOn) ? 'uppercase' : 'lowercase';
      keys[i].textContent = (!shiftOn) ? keys[i].textContent.toUpperCase() : keys[i].textContent.toLowerCase();
      capsLockOn = true;
      capsLockPointer.style.color = 'limegreen';
    }
  } else {
    for (let i = 0; i < keys.length; i++) {
      keys[i].style.textTransform = (shiftOn) ? 'uppercase' : 'lowercase';
      keys[i].textContent = (shiftOn) ? keys[i].textContent.toUpperCase() : keys[i].textContent.toLowerCase();
      capsLockOn = false;
      capsLockPointer.style.color = 'white';
    }
  }
  if (volume) audioSpacebar.play();
  if (volume) audioSpacebar.currentTime = 0;
}

// Shift
let pressShift = (e) => {
  if (volume && eventLocation.value == 0) audioShift.play();
  if (volume) audioShift.currentTime = 0;
  if (!shiftOn) {
    for (let i = 0; i < keys.length; i++) {

      keys[0].textContent = (english) ? '£' : '<';
      keys[1].textContent = (english) ? '!' : '!';
      keys[2].textContent = (english) ? '@' : '"';
      keys[3].textContent = (english) ? '#' : '№';
      keys[4].textContent = (english) ? '$' : '%';
      keys[5].textContent = (english) ? '%' : ':';
      keys[6].textContent = (english) ? '^' : ',';
      keys[7].textContent = (english) ? '&' : '.';
      keys[8].textContent = (english) ? '*' : ';';
      keys[9].textContent = (english) ? '(' : '(';
      keys[10].textContent = (english) ? ')' : ')';
      keys[11].textContent = (english) ? '_' : '_';
      keys[12].textContent = (english) ? '+' : '+';
      keys[13].textContent = (english) ? '~' : '[';
      keys[24].textContent = (english) ? '{' : 'Х';
      keys[25].textContent = (english) ? '}' : 'Ъ';
      keys[26].textContent = (english) ? '|' : 'Ё';
      keys[36].textContent = (english) ? ':' : 'Ж';
      keys[37].textContent = (english) ? '"' : 'Э';
      keys[45].textContent = (english) ? '<' : 'Б';
      keys[46].textContent = (english) ? '>' : 'Ю';
      keys[47].textContent = (english) ? '?' : '?';

      keys[i].style.textTransform = (!capsLockOn) ? 'uppercase' : 'lowercase';
      keys[i].textContent = (!capsLockOn) ? keys[i].textContent.toUpperCase() : keys[i].textContent.toLowerCase();

      shiftOn = true;
    }
    shift[0].style.color = 'limegreen';
    shift[1].style.color = 'limegreen';
  } else {
    for (let i = 0; i < keys.length; i++) {
      keys[0].textContent = (!english) ? '>' : '§';
      keys[1].textContent = 1;
      keys[2].textContent = 2;
      keys[3].textContent = 3;
      keys[4].textContent = 4;
      keys[5].textContent = 5;
      keys[6].textContent = 6;
      keys[7].textContent = 7;
      keys[8].textContent = 8;
      keys[9].textContent = 9;
      keys[10].textContent = '0';
      keys[11].textContent = '-';
      keys[12].textContent = '=';
      keys[13].textContent = (!english) ? ']' : '`';
      keys[24].textContent = (!english) ? 'х' : '[';
      keys[25].textContent = (!english) ? 'ъ' : ']';
      keys[26].textContent = (!english) ? 'ё' : '\\';
      keys[36].textContent = (!english) ? 'ж' : ';';
      keys[37].textContent = (!english) ? 'э' : '\'';
      keys[45].textContent = (!english) ? 'б' : ',';
      keys[46].textContent = (!english) ? 'ю' : '.';
      keys[47].textContent = (!english) ? '/' : '/';

      keys[i].style.textTransform = (capsLockOn) ? 'uppercase' : 'lowercase';
      keys[i].textContent = (capsLockOn) ? keys[i].textContent.toUpperCase() : keys[i].textContent.toLowerCase();

      shiftOn = false;
    }
    shift[0].style.color = '#FFF';
    shift[1].style.color = '#FFF';
  }
}

// Close
let pressClose = () => {
  document.body.style.overflow = 'hidden'
  keyboard.classList.remove('visible');
  keyboard.classList.add('hidden');
  springboardIcon.style.visibility = 'visible';
  springboardIcon.style.opacity = '1';
  springboardIcon.classList.remove('.springboard__icon-hidden');
  springboardIcon.classList.add('.springboard__icon-visible');
  springboardIcon.style.transform = 'scale(1)';
}

// Open
let pressSpringboardIcon = () => {
  keyboard.classList.remove('hidden');
  keyboard.classList.add('visible');
  springboardIcon.style.opacity = '0';
  springboardIcon.classList.remove('.springboard__icon-visible');
  springboardIcon.classList.add('.springboard__icon-hidden');
  springboardIcon.style.transform = 'scale(0)';
  setTimeout(function () {
    document.body.style.overflow = 'auto'
  }, 1000); // eliminate scrolling for chrome by Windows
}


const ru = ['>', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', ']', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ё', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', ' '];
const en = ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '`', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', ' '];
const id = ['192', '49', '50', '51', '52', '53', '54', '55', '56', '57', '48', '189', '187',
  '192', '81', '87', '69', '82', '84', '89', '85', '73', '79', '80', '219', '221', '220',
  '65', '83', '68', '70', '71', '72', '74', '75', '76', '186', '222',
  '90', '88', '67', '86', '66', '78', '77', '188', '190', '191', '32'
];
const func = ['27', '8', '20', '13', '16_1', '16_2', '17_1', '18_1', '91_1', '93_2', '18_2', '37', '38', '40', '39'];


changeLangToRu = () => {
  for (let i = 0; i < keys.length; i++) {
    keys[i].textContent = ru[i];
    keys[i].id = id[i];
  }
}

changeLangToEng = () => {
  for (let i = 0; i < keys.length; i++) {
    keys[i].textContent = en[i];
    keys[i].id = id[i];
  }
  for (let i = 0; i < funcKeys.length; i++) {
    funcKeys[i].id = func[i];
  }
}

// Change Lang
langButton.addEventListener('click', function (e) {
  if (english) {
    changeLangToRu();
    english = false;
    langButton.textContent = 'RU';
    if (volume) audioRU.play();
    audioRU.currentTime = 0;
  } else {
    changeLangToEng();
    english = true;
    langButton.textContent = 'EN';
    if (volume) audioEN.play();
    audioEN.currentTime = 0;
  }
  shiftOn = true;
  pressShift();
})

let volumeOnOff = () => {
  if (volume) {
    volumeButton.classList.remove('fa-volume-up');
    volumeButton.classList.add('fa-volume-off');
    volume = false;
  } else {
    volumeButton.classList.remove('fa-volume-off');
    volumeButton.classList.add('fa-volume-up');
    volume = true;
  }
}

let getCaretPos = (obj) => {
  obj.focus();
  if (obj.selectionEnd) {
    return obj.selectionEnd;
  } else if (document.selection) {
    let sel = document.selection.createRange();
    let clone = sel.duplicate();
    sel.collapse(true);
    clone.moveToElementText(obj);
    clone.setEndPoint('EndToEnd', sel);
    return clone.text.length.toNumber();
  }
  return 0;
}

function logKey(e) {
  eventCode.value = `${e.code}`;
  eventWhich.value = `${e.which}`;
  eventLocation.value = `${e.location}`;
  eventKey.value = `${e.key}`;
  char = eventKey.value;
  if (eventWhich.value == 27) pressClose();
  if (eventWhich.value == 20) pressCapslock();
  if (e.which == 16) {
    pressShift();
    modal.style.display = 'block';
    modalShift.style.display = 'block';
    modalShift.currentTime = 0;
  }
  let key = (e.location !== 0) ? document.getElementById(`${e.which}_${e.location}`) : document.getElementById(`${e.which}`);
  if (key !== null) {
    key.classList.add('tab');
    setTimeout(function () {
      key.classList.remove('tab')
    }, 100);
  }
}

function logShift(e) {
  if (e.which == 16) pressShift();
  modal.style.display = 'none';
  modalShift.style.display = 'none'
}


let cleanForm = () => {
  signCount = getCaretPos(outputWindow);
  signs.value = (signCount === 1) ? `${signCount} sign`: `${signCount} signs`;
  setTimeout("cleanForm();", 100);
}

let airOn = () => {

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = new SpeechRecognition();
  rec.interimResults = true;

  if (!mic) {
    microphoneButton.style.color = 'limegreen';
    speechToText.textContent = '';
    mic = true;
    rec.continuous = true

    rec.lang = (english === true) ? 'en-US' : 'ru-RU';
    rec.start();
    eventLocation.value = 'LISTENING...';

    rec.addEventListener("result", function (e) {
      var text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

      speechToText.textContent = text;

    });

  } else {
    microphoneButton.style.color = '#fafafa';
    outputWindow.value += ` ${speechToText.textContent}`;
    eventLocation.value = '';
    speechToText.textContent = '';
    mic = false;
    rec.stop();
  }
}

function moveL() {
  let newPosition = outputWindow.selectionStart - 1;
  if (newPosition < 0) newPosition = 0;

  outputWindow.focus();

  outputWindow.selectionStart = newPosition;
  outputWindow.selectionEnd = outputWindow.selectionStart;
  sign = `sign`;
}

function moveR() {
  let newPosition = outputWindow.selectionStart + 1;
  if (newPosition < outputWindow.length) newPosition = 0;

  outputWindow.focus();

  outputWindow.selectionStart = newPosition;
  outputWindow.selectionEnd = outputWindow.selectionStart;
  if (outputWindow.selectionEnd == outputWindow.value.length) sign = `signs`;
}

// press Keys
for (let i = 0; i < keys.length; i++) {
  let currentKey = keys[i];
  currentKey.addEventListener('click', pressKey)
};

// press Backspace 
backspace.addEventListener('click', pressBackspace);

// press Enter
enter.addEventListener('click', pressEnter);

// press CapsLock
caps.addEventListener('click', pressCapslock);

// press Shift
for (let i = 0; i < shift.length; i++) {
  shift[i].addEventListener('click', pressShift)
};
// press Close
closeButton.addEventListener('click', pressClose);

// press SpringboardIcon
springboardIcon.addEventListener('click', pressSpringboardIcon);

volumeButton.addEventListener('mouseup', volumeOnOff);

document.addEventListener('keydown', logKey);
document.addEventListener('keyup', logShift);

leftArrow.addEventListener('click', moveL);
rightArrow.addEventListener('click', moveR);

changeLangToEng();

microphoneButton.addEventListener("click", function () {
  let userAgent = navigator.userAgent.toLowerCase();
  let Mozila = /firefox/.test(userAgent);
  let Chrome = /chrome/.test(userAgent);
  let Safari = /safari/.test(userAgent);
  let Opera  = /opera/.test(userAgent);
  if (Chrome) airOn();
  else {
    speechToText.textContent = 'Your browser isn`t supported';
    setTimeout(() => {
      speechToText.textContent = '';
    }, 2000)
    return 0;
  }
});

// aditional functions
function scaleKeyboard () {
  keyboard.style.transform = 'scale(1.3)';
  keyboard.style.height = '360px';
  keyboard.style.marginTop = '100px';
  outputWindow.style.height = '140px';
}

function scaleOutKeyboard () {
  keyboard.style.transform = 'scale(1)';
  keyboard.style.height = '55vh';
  keyboard.style.marginTop = '0';
  outputWindow.style.height = '35vh';
}

minButton.addEventListener('click', () => {
  speechToText.textContent = '...';
  // scaleOutKeyboard();
  setTimeout(() => {
  speechToText.textContent = '';
  }, 200)
})

maxButton.addEventListener('click', () => {
  speechToText.textContent = '...';
  // scaleKeyboard();
  setTimeout(() => {
  speechToText.textContent = '';
  }, 200)
})
