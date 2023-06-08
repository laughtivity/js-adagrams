const letterPool = ['A','A','A','A','A','A','A','A','A','B','B','C','C','D',
'D','D','D','E','E','E','E','E','E','E','E','E','E','E','E','F',
'F','G','G','G','H','H','I','I','I','I','I','I','I','I','I','J',
'K','L','L','L','L','M','M','N','N','N','N','N','N','O','O','O',
'O','O','O','O','O','P','P','Q','R','R','R','R','R','R','S','S',
'S','S','T','T','T','T','T','T','U','U','U','U','V','V','W','W',
'X','Y','Y','Z']

export const drawLetters = () => {
  // Implement this method for wave 1
  let workingLetterPool = JSON.parse(JSON.stringify(letterPool))
  let hand = []
  // console.log("before: ", workingLetterPool)
  for (let i = 0; i < 10; i++){
    const drawnLetter = workingLetterPool[Math.floor(Math.random()*workingLetterPool.length)]
    // console.log(drawnLetter)
    // console.log("stopped")
    hand.push(drawnLetter)
    // console.log(hand)
    const drawnLetterIndex = workingLetterPool.indexOf(drawnLetter)
    // console.log(drawnLetterIndex)
    workingLetterPool.splice(drawnLetterIndex,1)
  }
  // console.log("after: ", workingLetterPool)
  // console.log("10x")
  return hand
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  let workingLettersInHand = JSON.parse(JSON.stringify(lettersInHand))
  input = input.toUpperCase() 
  
  for (let i = 0; i < input.length; i++) {
    // console.log("input[i]: ", input[i])
    // console.log("i: ", i)
    if (workingLettersInHand.includes(input[i]) === true) {
      // console.log("initial letters: ", workingLettersInHand)
      let letterIndex = workingLettersInHand.indexOf(input[i])
      workingLettersInHand.splice(letterIndex,1)
      // console.log("remaining letters: ", workingLettersInHand)
    } else if (workingLettersInHand.includes(input[i]) === false) {
        return false
    }
  } 
  return true
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  let score = 0
  word = word.toUpperCase()
  // console.log("word: " ,word)

  const letterScore = {
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
      Z: 10,
      "":0
    }
  // console.log("word length: ", word.length)
  // if (word.length == 0) {
  //   console.log(score)
  //   return score;
  // } else 
  for (let letter of word) {
      // console.log(letter)
      score += letterScore[letter]
      // console.log(score)
      // score += letterScore.keys(letterScore).find(key => letterScore[key] === letter)
  }
  
  if (word.length >= 7) {
    score += 8
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let bestWord = ""
  let highestScore = 0

  for (let word of words) {
    let tempScore = scoreWord(word)

    if (tempScore > highestScore) {
      highestScore = tempScore
      bestWord = word
      console.log(word, "replaced word based on score")

    } else if (tempScore === highestScore) {
      console.log("word: ", word, word.length)
      console.log("best word: ",bestWord, bestWord.length)
      if(bestWord.length != 10 && (word.length === 10 || word.length < bestWord.length)){
        bestWord = word
        // console.log(word, "replaced word because its length is 10")
      // } else if (word.length < bestWord.length && bestWord.length !== 10) {
      //   bestWord = word
      //   console.log(word, "replaced word because it was shorter")
      }
    }

  }
  return {"score": highestScore, "word": bestWord}
};