const Adagrams = {
  drawLetters() {
    const letters = {
      A: 9,
      B: 2,
      C: 2,
      D: 4,
      E: 12,
      F: 2,
      G: 3,
      H: 2,
      I: 9,
      J: 1,
      K: 1,
      L: 4,
      M: 2,
      N: 6,
      O: 8,
      P: 2,
      Q: 1,
      R: 6,
      S: 4,
      T: 6,
      U: 4,
      V: 2,
      W: 2,
      X: 1,
      Y: 2,
      Z: 1
    }
    const lettersArray = []
      for (const letter in letters) {
        for (let i = 0; i < letters[letter]; i++) {
          lettersArray.push(letter)
        };
      };
    let drawnLetters = []
      for (let i = 0; i < 10; i++) {
        let randomSample = lettersArray[Math.floor(Math.random()*lettersArray.length)];
        drawnLetters.push(randomSample)
      };
    return drawnLetters
  },
  usesAvailableLetters(input, lettersInHand) {
    let playArray = input.toUpperCase().split('')
    for (let i = 0; i < playArray.length; i++) {
      if (lettersInHand.includes(playArray[i])){
        let letterIndexInHand = lettersInHand.indexOf(playArray[i])
        lettersInHand.splice(letterIndexInHand, 1)
      } else {
        return false
      }
    }
    return true
  },
  scoreWord(word) {
    let scores = {
      A: 1,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 4,
      G: 2,
      H: 4,
      I: 1,
      J: 8,
      K: 5,
      L: 1,
      M: 3,
      N: 1,
      O: 1,
      P: 3,
      Q: 10,
      R: 1,
      S: 1,
      T: 1,
      U: 1,
      V: 4,
      W: 4,
      X: 8,
      Y: 4,
      Z: 10
  }
  let score = 0
    for (let i = 0; i < word.length; i++ ) {
      score += scores[word[i].toUpperCase()]
    }
    if (word.length >= 7) {
      score += 8
    }
    return score
  },
  highestScoreFrom(words) {
    let greatestScore = this.scoreWord(words[0]);
    let greatestScorePair = { word: words[0] , score: greatestScore };
    for (const word of words) {
      if (this.scoreWord(word) > greatestScore) {
        greatestScore = this.scoreWord(word)
        greatestScorePair = { word: word, score: this.scoreWord(word) }
      } else if (this.scoreWord(word) === greatestScore) {
          if (greatestScorePair['word'].length === 10) { //'word'
            greatestScorePair = greatestScorePair
          } else if (word.length === 10) {
              greatestScorePair = {word: word, score: this.scoreWord(word) }
          } else if (word.length < greatestScorePair['word'].length) {
              greatestScorePair = {word: word, score: this.scoreWord(word) }
          }
        }  
      }
    return greatestScorePair
  }
}

// Do not remove this line or your tests will break!
export default Adagrams;
