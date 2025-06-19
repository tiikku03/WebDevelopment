/*
API (Application Programming Interface): APIs stablish a set of rules and protocols that allow software applications 
                                         to communicate with each other and exchange data efficiently
                                            Browser API: 
DOM: it is a programming interface that let us interact with html documents 

document.innerHTML: it is used to insert html tags and tex /

document.innerText: represents the visible text content of the HTML element and its descendants. it only renders text, it returns a string with the text within the container, 
                    excluding any hidden text or text within hidden elements

document.textContent: it returns the plain text content of an element including all the text within its descendants. it keeps the indentation and spacing
                    returns the plain text content of an element, including all text within child elements, regardless of whether it is visible or hidden.


document.createElement() it returns a new element object

/////////////////////////////////ADDING NODES FROM THE DOM///////////////////////////
parentNode.appendChild(newNode);  this method is used to add a node to the end of the list of children of a specified parent node

 
/////////////////////////////////REMOVING NODES FROM THE DOM///////////////////////////
parentNode.removeChild(childNode); this method removes a node from the DOM

            <section id="example-section">
                <h2>Example sub heading</h2>
                <p>first paragraph</p>
                <p>second paragraph</p>
            </section>


            const sectionEl = document.getElementById("example-section");
            const lastParagraph = document.querySelector("#example-section p:last-of-type");

            sectionEl.removeChild(lastParagraph);

            // The new section element is 
            
            <section id="example-section">
                <h2>Example sub heading</h2>
                <p>first paragraph</p>
            </section>


//////////////////////////NAVIGATION WINDOW AND DOCUMENT INTERFACES////////////////////////////
Interface: it is a collection of methods and properties that define a particular object.

Navigation interface: it provides information about the browser environment, such as the user agent string, the platform, and the version of the browser
        console.log(navigator.userAgent) // it logs a string with the information about the browser and operating system being used.
        console.log(navigator.language) // it returns the language preference of the user

Window interface: it represents the browser window that contains the DOM information, it provides methods for interacting with the window interface, rezising the window
                  opening a new window and navigating to different urls
        console.log(window.innerWith) // it returns the width of the browser window in pixels
        console.log(window.innerWith) // provides information about the current URL


Document Interface: it represents the DOM that is displayed in the browser Window

///////////////////////////ADDING ATTRIBUTES WITH setAttributes() //////////////////////////////
setAttribute(attribute, value);

<p id="para">I am a paragraph</p>

const para = document.getElementById("para");
para.setAttribute("class", "my-class");   // if the HTML element already has a class, the class will be updated with the new class


<p id="para" class="my-class">I am a paragraph</p>

///////////////////////////EVENT OBJECT ////////////////////////////////////////
element.addEventListener("event", listener)


I. Mouse Events
click: Fired when a pointing device (like a mouse or a finger on a touchscreen) is clicked (pressed and released) over an element.
dblclick: Fired when a pointing device is double-clicked over an element.
mousedown: Fired when a pointing device button is pressed down over an element.
mouseup: Fired when a pointing device button is released over an element.
mousemove: Fired when a pointer (typically the mouse cursor) is moved while it is over an element.
mouseover: Fired when a pointer is moved onto an element or onto one of its descendant elements.
mouseout: Fired when a pointer is moved off an element or off one of its descendant elements.
mouseenter: Fired when a pointer is moved onto an element. This event does not bubble.
mouseleave: Fired when a pointer is moved off an element. This event does not bubble.
contextmenu: Fired when the user attempts to open a context menu (usually by right-clicking on desktop or long-pressing on touch).


II. Keyboard Events
keydown: Fired when a key is pressed down. This event fires repeatedly if the key is held down.
keyup: Fired when a key is released.
keypress: Fired when an alphabetic, numeric, or punctuation key is pressed, resulting in a character.


III. Form Events
submit: Fired when a form is submitted (e.g., by clicking a submit button or pressing Enter in a text field).
change: Fired when the value of an <input>, <select>, or <textarea> element has been changed and committed (e.g., after the user types and then unfocuses the input, or selects a new option from a dropdown).
input: Fired immediately when the value of an <input> or <textarea> element is changed (i.e., as the user types or pastes content).
focus: Fired when an element (like an input field or button) gains focus.
blur: Fired when an element loses focus.


IV. Document/Window Events
load: Fired when an entire page (including all dependent resources like images, stylesheets, scripts) has finished loading.
DOMContentLoaded: Fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
resize: Fired when the browser window has been resized.
scroll: Fired when an element's scrollbar is used, or the document itself is scrolled.
beforeunload: Fired when the window, document, or a resource is about to be unloaded. Can be used to prompt a user if they want to leave the page.
unload: Fired when the document or a child resource is being unloaded.


V. Touch Events (for Mobile Devices)
touchstart: Fired when one or more touch points are placed on the touch surface.
touchend: Fired when one or more touch points are removed from the touch surface.
touchmove: Fired when one or more touch points are moved along the touch surface.


VI. Media Events (for Audio/Video Elements)
play: Fired when the media has started or resumed playback.
pause: Fired when playback is paused.
ended: Fired when the media has reached the end.
timeupdate: Fired when the current playback position changes.

////////////////////////////////setTimeOut() setIntervals() ////////////////////////////
setTimeOut(FunctionToRun, delay) It delays an action for a specified time and then runs a function.

setIntervals(FunctionToRun, delay(time in milliseconds)) it keeps repeating a function at a set of interval like refreshing data or creating an animation

//////////////////////////////// requestAnimationFrame() ////////////////////////////
it is a method that allows to schedule the next step of an animation before the next screen repaint, resulting in a fluid and visually appealing experience

requestAnimationFrame(callBack) it is used inside an animation

//////////////////////////////// Web Animations API ////////////////////////////////
They alow to create and control animations directly within JavaScript, The animation constructor provides several instance methods and properties that allow to
dynamically animate elements.

animate(keyFrames, options) it allows to create an animation by specifying keyframes and options like duration, directions easing and iterations.

//////////////////////////////// Canvas API ///////////////////////////////////////






*/

const storyObj = {
  scary: {
    story: `In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.`,
    borderColor: "#ee4b2b",
  },
  funny: {
    story: `During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.`,
    borderColor: "#f1be32",
  },
  adventure: {
    story: `Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.`,
    borderColor: "#acd157",
  },
};

for (let storyGenre in storyObj) {
  console.log(storyObj[storyGenre].story);
}

const object = storyObj.adventure.story;
console.log(object)