// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Brian Schreiner" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let gbTotal = document.getElementById('qty-gb') //Gingerbread Total Amount
let ccTotal = document.getElementById('qty-cc') //Choclate Chip Total Amount
let sugarTotal = document.getElementById('qty-sugar') //Sugar Total Amount



// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

// selecting the element with an id of add-cc
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

// selecting the element with an id of add-sugar
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1
    gbTotal.textContent = gb
    totalCookies.textContent = gb+cc+sugar

})

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function() {
    if(gb > 0) {
    gb = gb - 1
    totalCookies.textContent = gb+cc+sugar
}
    gbTotal.textContent = gb

})

//End Ginger Bread Cookie

//Start Choclate Chip Cookie

// Event listener for clicks on the "+" button for ChoclateChip cookies
ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1
    ccTotal.textContent = cc
    totalCookies.textContent = gb+cc+sugar

    })
    
    // Event listener for clicks on the "-" button for ChoclateChip cookies
    ccMinusBtn.addEventListener('click', function() {
        if(cc > 0) {
            cc = cc - 1
            totalCookies.textContent = gb+cc+sugar
        }
            ccTotal.textContent = cc

    })

//End Choclate Chip Cookie

//Start Sugar Cookie

// Event listener for clicks on the "+" button for Sugar cookies
sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1
    sugarTotal.textContent = sugar
    totalCookies.textContent = gb+cc+sugar

    })
    
    // Event listener for clicks on the "-" button for Sugar cookies
    sugarMinusBtn.addEventListener('click', function() {
        if(sugar > 0) {
            sugar = sugar - 1
            totalCookies.textContent = gb+cc+sugar
        }
        sugarTotal.textContent = sugar

    })

//End Sugar Cookie

//Find Totals
const totalCookies = document.querySelector('#qty-total')







