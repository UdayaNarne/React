import {useState} from 'react';
export default function TextForm(props){
    const [text,setText]=useState("");
    const [search,setSearch]=useState("");
    const [count,setCount]=useState(0);
    // setText()
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.alert("Converted to UpperCase","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.alert("Converted to LowerCase","success");
    }
    const handleCopy=(event)=>{
        //let text2=event.target.value;
        navigator.clipboard.writeText(text);
        props.alert("Copied to clipboard","success");
    }
    const handleSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.alert("Spaces removed","success");
    }
    const handleSearch=(event)=>{
        const input=event.target.value
        setSearch(input);
        if(input.trim()===""){
            setCount(0);
        }
        else{
            const regex = new RegExp(search, 'gi'); // global, case-insensitive
            const matches = text.match(regex);
            setCount(matches ? matches.length : 0);
        }
    }
    const reFactor=()=>{
        navigator.clipboard.writeText(text);
        let newText=text.charAt(0).toUpperCase()+text.slice(1);
        newText=newText.split(/[ ]+/);
        
        setText(newText.join(" "));
        props.alert("Removed Errors","success");
    }
    const handleCaptilize=()=>{
        let newText=text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText);
        props.alert("Converted to UpperCase","success");
    }
    return(
        <>
            <div className={`container bg-${props.mode} text-${props.mode==="light"?"dark":"light"} my-20`}>
              <h1>{props.heading}</h1>
              <input type="text" className=" my-2 input" placeholder="Enter the word to Search" id="input" onChange={handleSearch}/>
              <div className={`mb-3 bg-${props.mode}`}>
                <textarea placeholder="Enter text here" className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
              </div>
              <button className={`btn btn-${props.color} mx-2 my-2`} onClick={handleUpClick}>Convert to UpperCase</button>
              <button className={`btn btn-${props.color} mx-2 my-2`} onClick={handleLoClick}>Convert to LowerCase</button>
              <button className={`btn btn-${props.color} mx-2 my-2`} onClick={handleSearch}>Search</button>
              <button className={`btn btn-${props.color} mx-2 my-2`} onClick={handleCopy}>Copy</button>
              <button className={`btn btn-${props.color} mx-2 my-2`} onClick={handleSpaces}>Remove Spaces</button>
              <button className={`btn btn-${props.color} mx-2 my-2`} onClick={handleCaptilize}>Captilize start</button>
              <button className={`btn btn-${props.color} mx-2 my-2`} onClick={reFactor}>Cleanize</button>
            </div>
            <div className={`container my-3 bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}>
                <h1>Your text Summary</h1>
                <p>{text.trim()===""?0:text.trim().split(/\s+/).length} words and {text.replace(/\s/g,"").length} characters</p>
                <p>It takes approxmatively {0.008*text.split(" ").length} minutes to read the given text.</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview it here"}</p>
                <p>Word {search} has repeated {count} times </p>
            </div>
        </>
    )
}