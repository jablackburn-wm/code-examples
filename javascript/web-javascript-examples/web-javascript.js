
//getting elements

const element = document.getElementById('ID') // gets reference for an element with id='ID', this reference is an object which can be manipulated by setting its properties
const class_elements = document.getElementsByClassName('class') //gets all elements of class 'class'
const paragraphs = document.getElementsByTagName('p') //gets all <p> elements 
const elements_by_selector = document.querySelectorAll('p.class') //gets all <p> elements of class 'class'

//get all child elements of x of class 'content'
const x = document.getElementById('x')
const y = x.getElementsByClassName('content')


element.InnerHTML = 'new content' // changes content of element to 'new content'
element.classList.add('new-class')  // adds class 'new-class' to element
element.style.color =  'red'; // changes the color of the element to 'red'


// adds event listener to element, on click it will log 'click' to the console
// each time the element is clicked.
element.addEventListener('click', (e) => { 
    console.log('click')
    console.log(e);
})