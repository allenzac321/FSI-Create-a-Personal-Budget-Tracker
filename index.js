let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer

}
for(let m = 0; m < monthlyExpenseQuestions.length; m++){
    let manswer = parseFloat(window.prompt(monthlyExpenseQuestions[m]))
    monthlyExpenses = monthlyExpenses + manswer
}
for(let a = 0; a < annualExpenseQuestions.length; a++){
    let answer = parseFloat(window.prompt(annualExpenseQuestions[a]))
    annualExpenses = annualExpenses + answer
}