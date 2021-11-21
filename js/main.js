const MAX_ITEMS = 10;
const START_AVATAR_URL = 'img/avatars/user';
const AVATAR_USER_EXTEND = '.png';
const TYPES = [
  'palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_MOCK = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

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

function createFromArray (length, array) {
  const result = [];
  for (let i = 0; result.length < length; i++) {
    result.push(array[i]);
  }
  return result;
};

function createData (maxLength) {
  const result = [];
  for (let i = 0; result.length < maxLength; i++){
    const author = {
      avatar: START_AVATAR_URL + (i + 1) + AVATAR_USER_EXTEND,
    };
    const location = {
      lat: getRandomFloatNumber (35.65000, 35.70000),
      lng: getRandomFloatNumber (139.70000, 139.80000)
    };
    const offer = {
      title: 'dfdfd',
      address: location.lat + ',' + location.lng,
      price: getRandomNumber (0, 1000000000000),
      type: TYPES[getRandomNumber(0,TYPES.length - 1)],
      rooms: getRandomNumber (0, 10),
      guests: getRandomNumber (0, 1000),
      features: createFromArray(getRandomNumber(0,FEATURES.length - 1), FEATURES),
      description: 'dfdfd',
    };

    result.push({author, location, offer});
  };
  return result;
};

getRandomFloatNumber (1, 1, 2);
getRandomNumber (0, 5);

