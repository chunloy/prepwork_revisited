const urlDecode = function(text) {
  // Put your solution here
  //split by %20, join, then split by &
  const obj = {};
  const properties = text.split('%20').join(' ').split('&');

  for (const property of properties) {
    const splitPair = property.split('=');
    obj[splitPair[0]] = splitPair[1];
  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);