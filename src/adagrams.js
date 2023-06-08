// *** = for future refactors

const letterPool = ['A','A','A','A','A','A','A','A','A','B','B','C','C','D',
'D','D','D','E','E','E','E','E','E','E','E','E','E','E','E','F',
'F','G','G','G','H','H','I','I','I','I','I','I','I','I','I','J',
'K','L','L','L','L','M','M','N','N','N','N','N','N','O','O','O',
'O','O','O','O','O','P','P','Q','R','R','R','R','R','R','S','S',
'S','S','T','T','T','T','T','T','U','U','U','U','V','V','W','W',
'X','Y','Y','Z']

// *** use .fill(key,0) can be used to fill an array with a dictionary ***
// OBJECTIVE: draw 10 random letters from letterPool
//    deep copies a letter pool for game. Then drew random letter by length in array.
//    Added letter to hand array and removed it from cloned letter pool
// RETURNS: hand(ARRAY)
export const drawLetters = () => {
  let workingLetterPool = JSON.parse(JSON.stringify(letterPool))
  let hand = []

  for (let i = 0; i < 10; i++){
    const drawnLetter = workingLetterPool[Math.floor(Math.random()*workingLetterPool.length)]
    hand.push(drawnLetter)
    workingLetterPool.splice(workingLetterPool.indexOf(drawnLetter),1)
  }
  return hand
};

// OBJECTIVE: check if the letter from input is in hand
//    deep copies the hand drawn. makes the input into upper case. check if each letter
//    is inside the copied hand and uses it as a conditional to return false or splice
//    if false is never returned then it will return true
// RETURNS: BOOL
export const usesAvailableLetters = (input, lettersInHand) => {
  let workingLettersInHand = JSON.parse(JSON.stringify(lettersInHand))
  input = input.toUpperCase() 
  
  for (let letter of input) {
    let inHand = workingLettersInHand.includes(letter)
    
    if(inHand) {
      workingLettersInHand.splice(workingLettersInHand.indexOf(letter),1)
    } else {
        return false
    }
  } 
  return true
};

// OBJECTIVE: adds up the score for each letter in word provided
//    creates a new score variable to count and be returned. changes word to uppercase
//    for each letter the function adds the value of the letter from the score dictionary
//    additional points for a word with 7 or more letters
// RETURNS: score(NUM)
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

  for (const letter of word) {
      score += letterScore[letter]
  }
  
  if (word.length >= 7) {
    score += 8
  }
  return score;
};

// OBJECTIVE: determines the winning word and the score
//    iterates through the list of words. calls scoreWord() to determine the score
//    for each word and compare it to the highestScore. Breaks tie if the score is the same
//    returns the highest score and best word
// RETURN:  highestScore(NUM), bestWord(STR) in special data structure
export const highestScoreFrom = (words) => {
  let bestWord = ""
  let highestScore = 0

  for (const word of words) {
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