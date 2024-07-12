

const ratedScore = document.querySelector('.ratedScore')



const storedData = localStorage.getItem(`dataKey`)

console.log("Data retrieved from localStorage:", storedData)




console.log(' ')


ratedScore.textContent = `${storedData}`

