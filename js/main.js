function randomNumber (startNumber, endNumber) {
  if (startNumber <0 || endNumber <0) {
    throw 'число должно быть больше нуля';
  }
  if (startNumber >= endNumber) {
    throw 'первоначальное число должно быть меньше второго';
  }
  const min = Math.ceil(startNumber);
  const max = Math.floor(endNumber);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomFloatNumber (startNumber, endNumber, floatingNumber) {
  if (startNumber <0 || endNumber <0) {
    throw 'число должно быть больше нуля';
  }
  if (startNumber >= endNumber) {
    throw 'первоначальное число должно быть меньше второго';
  }
  const random = Math.random() * (endNumber - startNumber) + startNumber;
  return random.toFixed(floatingNumber);
}


randomFloatNumber (1, 1, 2);
randomNumber (0, 5);
