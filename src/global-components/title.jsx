import React from "react";
import "../styles/components/title.css";
import Navigation from "./navigation.jsx"

function Title() {
    return (
        <div className="title">
            <h1 className="primary-title">
	            <span>
                    <span id="redact">T</span><span id="redact">h</span><span id="redact">e&nbsp;</span>
	            </span>
	            <span id="singleRedact">
	        	    <span id="redact">H</span><span id="redact">a</span><span id="redact">r</span><span id="redact">l</span><span id="redact">e</span><span id="redact">y&nbsp;</span> 
	            </span>
                <span>      
                    <span id="redact">P</span><span id="redact">r</span><span id="redact">o</span><span id="redact">t</span><span id="redact">o</span><span id="redact">c</span><span id="redact">o</span><span id="redact">l</span>
                </span> 
            </h1>
            <h1 className="secondary-title" >A guide to privacy and security in the digital world</h1>
            <h1 className="secondary-title" >- Landing Page -</h1>
            <hr />
            <Navigation />
            <hr />
        </div>
    );
}

export default Title;