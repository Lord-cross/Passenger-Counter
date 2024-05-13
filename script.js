// Variables
let countEl = document.getElementById('count-el');
let count = 0;
let saveEl = document.getElementById('save-el');



// Functions
function increment () {
    count += 1
    countEl.innerText = count
}
function save() {
    let save = count + ' - '
    console.log(count)
    saveEl.textContent = saveEl.textContent + save
    countEl.textContent = 0
    count = 0
}