/*  
Project Name: Drag & Drop Images
Description: Here is a basic drag and drop example. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
*/

const boxes = document.querySelectorAll('.box')
const image = document.querySelector('img')

image.addEventListener('dragstart', dragStart)
image.addEventListener('dragend', dragEnd)

for (const empty of boxes) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart () {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd () {
    this.className = 'visible'
    //console.log(' Darg End')
}

function dragOver (e) {
    e.preventDefault()
    //console.log(' Darg Over')
}

function dragEnter (e) {
    e.preventDefault()
    this.className += ' hovered'
    //console.log(' Darg Enter')
}

function dragLeave () {
    this.className = 'box'
    //console.log(' Darg Leave')
}

function dragDrop (e) {
    e.preventDefault()
    this.append(image)
    this.className = 'box'
    //console.log(' Darg Drop')
}

function creatElement () {
    boxes.forEach((el) => {
        const placeholderEl = document.createElement('h3')
        placeholderEl.innerText = 'Drop Here'
        el.append(placeholderEl)
    })
}
creatElement ()