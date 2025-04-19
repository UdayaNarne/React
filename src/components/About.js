import {useState} from 'react';
import './About.css'; 
export default function About(props){
    const [openIndex, setOpenIndex] = useState(0);
    const isOpen = (index) => openIndex === index;
    return(
<>
<div className="container my-3">
<div className={`accordion`} id="accordionExample">
  <div className={`accordion-item bg-${props.mode}`} >
    <h2 className="accordion-header" style={{color:props.mode==="light"?"black":"white"}}>
    <button
            className={`accordion-button ${!isOpen(1) ? 'collapsed' : ''} ${isOpen(1) ? 'bg-primary text-white' : props.mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-white'}`}
            type="button"
            onClick={() => setOpenIndex(isOpen(1) ? null : 1)}
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded={isOpen(1)}
            aria-controls="collapseOne"
          >
            Analyze the Text
          </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
      <div className="accordion-body text-justify" style={{color:props.mode==="light"?"black":"white"}}>
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or the time taken to read the text. It also provides you with a way to convert your text to upper case, lower case, title case, etc. It also provides you with a way to remove extra spaces from your text. You can also copy the text to clipboard.
      </div>
    </div>
  </div>
  <div className={`accordion-item bg-${props.mode}`} >
    <h2 className="accordion-header" style={{color:props.mode==="light"?"black":"white"}}>
    <button
            className={`accordion-button ${!isOpen(2) ? 'collapsed' : ''} ${isOpen(2) ? 'bg-primary text-white' : props.mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-white'}`}
            type="button"
            onClick={() => setOpenIndex(isOpen(2) ? null : 2)}
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded={isOpen(2)}
            aria-controls="collapseTwo"
          >
            Free to use
          </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body text-justify" style={{color:props.mode==="light"?"black":"white"}}>
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit. This is a free online character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className={`accordion-item bg-${props.mode}`}>
    <h2 className="accordion-header" style={{color:props.mode==="light"?"black":"white"}}>
    <button
            className={`accordion-button ${!isOpen(3) ? 'collapsed' : ''} ${isOpen(3) ? 'bg-primary text-white' : props.mode === 'light' ? 'bg-light text-dark' : 'bg-dark text-white'}`}
            type="button"
            onClick={() => setOpenIndex(isOpen(3) ? null : 3)}
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded={isOpen(3)}
            aria-controls="collapseThree"
          >
            Browser Compatible
          </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
      <div className="accordion-body text-justify" style={{color:props.mode==="light"?"black":"white"}}>
        This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc. You can use this tool from anywhere in the world as it is a web-based tool.
      </div>
    </div>
  </div>
  </div>
  </div>
</>
    )
}