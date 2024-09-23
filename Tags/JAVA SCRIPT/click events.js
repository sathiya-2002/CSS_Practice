document.addEventListener("DOMContentLoaded", () => {
    // Get references to elements
    const clickButton = document.getElementById("clickButton");
    const h3Element = document.getElementById("h3Element");
    const actionElement = document.getElementById("action");
    const element = document.getElementById("element");
    const changeStyleButton = document.getElementById("changeStyleButton");
    
    // Add event listeners
    clickButton.addEventListener("click", () => {
        console.log("Button Clicked");
    });
  
    h3Element.addEventListener("click", () => {
        h3Element.style.fontSize = "100px";
    });
  
    document.getElementById("changeColorButton").addEventListener("click", () => {
        actionElement.style.color = "green";
    });
  
    document.getElementById("changeBgColorButton").addEventListener("click", () => {
        actionElement.style.backgroundColor = "pink";
    });
  
    changeStyleButton.addEventListener("click", () => {
        change("bg"); // Change background color
        change("color"); // Change text color
    });
  
    function change(e) {
        if (e === "bg") {
            element.style.backgroundColor = "pink";
        } else if (e === "color") {
            element.style.color = "green";
        }
    }
  });
  
  
  /*
       list of some commonly used JavaScript event listeners:
  
  click: Fires when a mouse click event occurs on an element.
  
          <button id="clickButton">Click Me</button>
          <script>
              const button = document.getElementById("clickButton");
              button.addEventListener("click", () => {
                  alert("Button clicked!");
              });
          </script>
  
  
  
  dblclick: Fires when a mouse double-click event occurs on an element.
  
          <div id="doubleClickDiv">Double Click Me</div>
          <script>
              const div = document.getElementById("doubleClickDiv");
              div.addEventListener("dblclick", () => {
                  alert("Double-clicked the div!");
              });
          </script>
  
  mouseenter: Fires when the mouse enters an element's boundary.
  mouseleave: Fires when the mouse leaves an element's boundary.
  
            <div id="hoverDiv">Hover Over Me</div>
            <script>
                const div = document.getElementById("hoverDiv");
                div.addEventListener("mouseenter", () => {
                    div.style.backgroundColor = "lightblue";
                });
                div.addEventListener("mouseleave", () => {
                    div.style.backgroundColor = "white";
                }); 
            </script>
  
  
  mousemove: Fires when the mouse pointer moves over an element.
  mousedown: Fires when a mouse button is pressed down on an element.
  mouseup: Fires when a mouse button is released on an element.
  
  
  keydown: Fires when a keyboard key is pressed down.
  keyup: Fires when a keyboard key is released.
  keypress: Fires when a key is pressed and released.
  
            <input id="textInput" type="text">
            <script>
                const input = document.getElementById("textInput");
                input.addEventListener("keydown", (event) => {
                    console.log("Key down: " + event.key);
                });
                input.addEventListener("keyup", (event) => {
                    console.log("Key up: " + event.key);
                });
                input.addEventListener("keypress", (event) => {
                    console.log("Key pressed: " + event.key);
                });
            </script>
  
  Event:	        Occurs When
  
  onclick	        The user clicks on an element
  oncontextmenu	The user right-clicks on an element
  ondblclick	    The user double-clicks on an element
  onmousedown	    A mouse button is pressed over an element
  onmouseenter	The pointer is moved onto an element
  onmouseleave	The pointer is moved out of an element
  onmousemove	    The pointer is moving over an element
  onmouseout	    The mouse pointer moves out of an element
  onmouseover	    The mouse pointer is moved over an element
  onmouseup	    The mouse button is released over an element
  
  */