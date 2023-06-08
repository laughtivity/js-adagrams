const letterPool = ['A','A','A','A','A','A','A','A','A','B','B','C','C','D',
'D','D','D','E','E','E','E','E','E','E','E','E','E','E','E','F',
'F','G','G','G','H','H','I','I','I','I','I','I','I','I','I','J',
'K','L','L','L','L','M','M','N','N','N','N','N','N','O','O','O',
'O','O','O','O','O','P','P','Q','R','R','R','R','R','R','S','S',
'S','S','T','T','T','T','T','T','U','U','U','U','V','V','W','W',
'X','Y','Y','Z']

export const drawLetters = () => {
  let workingLetterPool = JSON.parse(JSON.stringify(letterPool))
  let hand = []

  for (let i = 0; i < 10; i++){
    const drawnLetter = workingLetterPool[Math.floor(Math.random()*workingLetterPool.length)]
    hand.push(drawnLetter)
    const drawnLetterIndex = workingLetterPool.indexOf(drawnLetter)
    workingLetterPool.splice(drawnLetterIndex,1)
  }
  return hand
};

export const usesAvailableLetters = (input, lettersInHand) => {
  let workingLettersInHand = JSON.parse(JSON.stringify(lettersInHand))
  input = input.toUpperCase() 
  
  for (let letter of input) {
    if (workingLettersInHand.includes(letter) === true) {
      let letterIndex = workingLettersInHand.indexOf(letter)
      workingLettersInHand.splice(letterIndex,1)
    } else if (workingLettersInHand.includes(letter) === false) {
        return false
    }
  } 
  return true
};

export const scoreWord = (word) => {
  let score = 0
  word = word.toUpperCase()

  const letterScore = {
      A: 1, B: 3, C: 3, D: 2,
      E: 1, F: 4, G: 2, H: 4,
      I: 1, J: 8, K: 5, L: 1,
      M: 3, N: 1, O: 1, P: 3,
      Q: 10, R: 1, S: 1, T: 1,
      U: 1, V: 4, W: 4, X: 8,
      Y: 4, Z: 10, "":0
    }

  for (let letter of word) {
      score += letterScore[letter]
  }
  
  if (word.length >= 7) {
    score += 8
  }
  return score;
};

export const highestScoreFrom = (words) => {
  let bestWord = ""
  let highestScore = 0

  for (let word of words) {
    let tempScore = scoreWord(word)

    if (tempScore > highestScore) {
      highestScore = tempScore
      bestWord = word

    } else if (tempScore === highestScore) {
      if(bestWord.length != 10 && (word.length === 10 || word.length < bestWord.length)){
        bestWord = word
      }
    }

  }
  return {"score": highestScore, "word": bestWord}
};