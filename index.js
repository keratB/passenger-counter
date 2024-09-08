let saveEl = document.getElementById("save-el")
let countEl =  document.getElementById('count-el')
let count = 0

console.log(saveEl);

function increment() {
    count += 1
    countEl.innerText = count
}

// Create a function, save(), which logs out the count and appends it to saveEl
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr  // Appending the count to the saveEl element
    countEl.textContent = 0
    count = 0
    console.log(count)
}

