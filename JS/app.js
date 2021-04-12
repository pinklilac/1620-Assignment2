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

let darkModeOn=false;
let notesArray=[]

function dark_light(){
    // document.getElementById('appli').classList.toggle("dark");
    document.getElementsByTagName('body')[0].classList.toggle("dark");
    // document.getElementsByClassName('container')[0].classList.toggle("dark");
    var word=document.getElementsByTagName('a');
    if (darkModeOn){
        for(var i =0; i<word.length; i++){
            word[i].style.color='#31748f';
        }
        if (document.querySelector('input')!=null){
            document.querySelector('textarea').style.backgroundColor='#fffaf3';
            document.querySelector('textarea').style.color='#2a273f';
            document.querySelector('input').style.backgroundColor='#fffaf3';
            document.querySelector('input').style.color='#2a273f';
        }
        darkModeOn=false;
    }else{
        for(vari=0; i<word.length; i++){
            word[i].style.color='#fffaf3';
        }
        if(document.querySelector('input') !=null){
           document.querySelector('input').style.backgroundColor='#59546d';
           document.querySelector('textarea').style.backgroundColor='#59546d';
           document.querySelector('input').style.color='#fffaf3';
           document.querySelector('textarea').style.color='#fffaf3';
        }
        darkModeOn=true;
    }
}
function defineNoteWritingSection() {
    html = `
        <div id="note-area">
        <div id="note" contenteditable="true"></div>
        <button onclick="saveNote">save</button>
        <button onclick="cleanUp">cancel</button>
    </div>`
    return html
}

function createContentWritingArea() {
    const div=document.querySelector('#content')
    div.insertAdjacentHTML('beforeend', defineNoteWritingSection())
    set_cursor()
}

function set_cursor(){
    const div=document.querySelector('#note')
    div.focus()
}
function saveNote(){
    const div = document.querySelector('#note')
    const title=div.firstChild.textContent
    notesArray.push(createNote(title, "body"))
    console.log(notesArray)
}
function createNote(title, body){
    return {title, body}
}

 function convertDivsToString(){
     let str=""
     const divs = [...document.querySelectorAll('[contenteditable]>div:not(:first-child)')]
     for (const i of divs){
         str += `${i.textContent}\n`
     }
     return str
 }
function cleanUp(){
    const div=document.querySelector('#note-area')
    div.remove()
}
function saveTextArea(){
    const note = document.querySelector('textarea').value
    console.log(note)
    const notearr = note.split('\n\n')
    notesArray.push(createNoteObject(notearr))
    document.querySelector('textarea').value=""
    console.log(notesArray)
}
function createNoteObject(arr){
    return newObject={title:arr[0], body:arr[1]}
}
    
