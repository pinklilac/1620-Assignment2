/*
<To change the button to a dark/light theme>
    - Create a button in html to toggle between two themes
    - Create a dark-mode class on the button in css
    - Using javascript, create a "toggle" method to the object
            - click to change to dark theme:
                    initialize darkModeOn using boolean, default is False
                    if darkModeOn is false: change the file background color and text color
            - click again to change the button to light theme to indicate the theme is light:
                    if darkModeOn is false, it will change the button text to dark mode
                    else change the button text light mode
            -click again to to change to light theme:
                    if darkModeOn is true: change the file background color and text color

<New note button>
- Click to create note taking area with save and cancel button:
    - note taking area <text area> is displayed in the main area
    - click save to save the note and remove the note taking area and buttons

        - click to save the note: make a new note object with title and body
                                  add the object into the notesArray
        - remove the note taking area and buttons: 
    
    - click cancel to remove the note taking area and buttons without saving the note: 
        - use remove() to delete the note taking area and button

<Notes stored>
- To display stored note title on the side of the application
    - loop through the notesArray and display object.titles on the side
- To display the note along with a close button in the main area by clikcing the note title on the side
    -find object with the title in the notesArray
    -display the note body in the main area

*/



