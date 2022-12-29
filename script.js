const isomorphicStrings = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  let map = {};
  for (let i = 0; i < string1.length; i++) {
    const letterA = string1[i];
    const letterB = string2[i];
    if (map[letterA] == undefined) {
      map[letterA] = letterB;
    } else if (map[letterA] !== letterB) {
      return false;
    }
  }
  return true;
};

console.log(isomorphicStrings("hjk","ghjk"))

