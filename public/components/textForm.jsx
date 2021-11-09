import React from 'react'
import './textForm.css';
import {useState} from 'react'

export default function  TextForm(props) {

    //button function//
    const handleupClick = () =>{
            //console.log("uppercase was clicked" +text);
            let newText = text.toUpperCase ();  
            setText(newText);
            //props.showAlert("convertes to UpperCase", "success");
    }

    const handlelpClick = () =>{
        console.log("lowercase was clicked" +text);
        let newText = text.toLowerCase ();  
        setText(newText);

        }

        const handleclearClick = () =>{
            console.log("clear was clicked" +text);
            let newText = '';  
            setText(newText);
            }

            const handleCopy = () =>{
                console.log("copied" );
                let newText = document.getElementById("mybox");  
                newText.select();
                navigator.clipboard.writeText(newText.value);
               // props.showAlert("copied","success");
                }

                //extra spaces//
                const handleExtraSpaces = () =>{
                    let newText = text.split(/[ ]+/);
                    setText(newText.join(" "))
                }


    const handleOnChange = (event) =>{
        console.log("OnChange clicked");
        setText(event.target.value);
        }

    //states//
    const [text , setText] = useState("enter the text here");
    return (
        <>
        <div className="container">
           <h1>{props.heading}</h1> 
             <div class="mb-3">
               <textarea class="form-control" onChange={handleOnChange} value={text} id="mybox" rows="9"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupClick}>convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handlelpClick}>convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleclearClick}>clear</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove extra spaces</button>

        </div>
        <div className="container my-3">
            <h1>your text summary</h1>
            <p>{text.split(" ").length-1} words and {text.length}character</p>
            <p>{0.008* text.split(" ").length} minutes reads</p>    
            <p>preview</p>
            <p>{text}</p>
        </div>
        </>
    ) 
}
