/* Target elements by id or class with CSS
document.querySelectorAll(".main li:last-child")
document.querySelectorAll("main li:first-child").classList
document.querySelectorAll("main li").forEach(item => item.style.backgroundColour= "blue")
document.querySelector("main section:first-child").classList.add("new-class")
document.querySelector("#myButton").getAttribute("class")
document.querySelector("img").hasAttribute("src")
*/

// Select and element by id 
const selectElement = function(selector) {
    const element = document.querySelector(selector);
    if element{
        console.log("Element found", element)
        return element
    } else {
        console.error("Element not found", selector)
        return null 
    }
}

 
// Add a new event listener to an element
function addEventListener(selector, eventType, handler){
    const element = document.querySelector(selector);
    if (element) {
        element.addEventListener(eventType, handler);
        console.log("Element activated", element, eventType, handler)  
    } else {
        console.error("Element not functioning". selector)
    }
}


//Craete nav menu 
const mainNav = document.createElement("nav")



