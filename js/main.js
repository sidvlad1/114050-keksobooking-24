function getRandomNumber (startNumber = 0, endNumber = 0) {
  if (endNumber < startNumber) {
    return 0;
  }
  if (startNumber < 0 || endNumber < 0) {
    return 0;
  }
  return Math.floor(Math.random() * (endNumber - startNumber)) + startNumber;
}

function getRandomFloatNumber (startNumber = 0, endNumber = 0, floatingNumber = 5) {
  let random;
  if (endNumber < startNumber) {
    random = 0;
  }
  if (startNumber < 0 || endNumber < 0) {
    random = 0;
  }
  random = Math.random() * (endNumber - startNumber) + startNumber;
  return random.toFixed(floatingNumber);
}

getRandomFloatNumber (1, 1, 2);
getRandomNumber (0, 5);
