const bub_grandparent = document.getElementById('bub-grandparent')
const bub_parent = document.getElementById('bub-parent')
const bub_child = document.getElementById('bub-child')

const cap_grandparent = document.getElementById('cap-grandparent')
const cap_parent = document.getElementById('cap-parent')
const cap_child = document.getElementById('cap-child')


bub_grandparent.addEventListener('click', () => {
    console.log('grandparent fired')
}) // useCapture, the third optional argument, is false by default

bub_parent.addEventListener('click', () => {
    console.log('parent fired')
})

bub_child.addEventListener('click', () => {
    console.log('child fired')
})


cap_grandparent.addEventListener('click', () => {
    console.log('grandparent fired')
}, true)

cap_parent.addEventListener('click', () => {
    console.log('parent fired')
}, true)

cap_child.addEventListener('click', () => {
    console.log('child fired')
}, true)
