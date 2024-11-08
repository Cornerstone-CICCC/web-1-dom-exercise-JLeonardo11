// YOUR CODE HERE
const Output1 = document.querySelector('#output1')
const togglebtn = document.querySelector('#btn1')
const togglebtn2 = document.querySelector('#btn2')
const output2 = document.querySelector('#output2')
const smalltext = document.querySelector('.small-text')
const togglebtn3 = document.querySelector('#btn3')
const togglebtn4= document.querySelector('#btn4')
const paragraphs = document.querySelector("#output4")
const consolebtn = document.querySelector('#btn5')
const inputconsole = document.querySelector('#message')

togglebtn.addEventListener('click', () => {
    Output1.classList.toggle('output1')
})

togglebtn4.addEventListener('click', () => {
    paragraphs.classList.toggle('output4')
})



togglebtn3.addEventListener('click', () => {
    smalltext.classList.remove('small-text')
})

consolebtn.addEventListener('click', (event) => {
    event.preventDefault()
    alert('Please check Console!');
    console.log(inputconsole.value);
})

togglebtn2.addEventListener('click', () => {
    const span = document.createElement('span');
    span.textContent = 'Hello world';
    output2.appendChild(span)

})