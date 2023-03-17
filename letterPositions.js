const letterPositions = function(sentence) {
  let results = {};
  //taking away spaces
  sentence = sentence.replace(/\s+/g,'');

  for (let i = 0; i < sentence.length; i++) {
    results[sentence[i]] = results[sentence[i]] || [];
    results[sentence[i]].push(i);
  }

  return results;
}

module.exports = letterPositions;