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
    console.log("input[i]: ", input[i])
    console.log("i: ", i)
    if (workingLettersInHand.includes(input[i]) === true) {
      console.log("initial letters: ", workingLettersInHand)
      let letterIndex = workingLettersInHand.indexOf(input[i])
      workingLettersInHand.splice(letterIndex,1)
      console.log("remaining letters: ", workingLettersInHand)
    } else if (workingLettersInHand.includes(input[i]) === false) {
        return false
    }
  } 
  return true
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
