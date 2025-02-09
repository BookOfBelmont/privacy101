import React from "react";
import '../../styles/pages/recommendations.css';
import Title from "../../global-components/title.jsx";
import TableOfContents from "./table-of-contents-recommendations.jsx"
import BeforeWeStart from "./before-we-start.jsx";
import MostImportantChecklist from "./most-important-checklist.jsx";
import SecondStepChecklist from "./second-step-checklist.jsx";
import StealthyDigitalJedi from "./stealthy-digital-jedi.jsx";

function Recommendations() {
    return (
        <div>
            <Title />
            <TableOfContents />
            <div>
                <BeforeWeStart />
            </div>
            <h2 id="recommendations"><a href="#recommendations"></a>Recommendations</h2>
            <h3 className="listTitle" id="big"><a href="#big"></a>The big checklist</h3>

            <MostImportantChecklist />
            <SecondStepChecklist />
            <StealthyDigitalJedi />
            
            <h3 class="listTitle" id="no-commitment"><a href="#no-commitment"></a>The no-commitment checklist</h3>
            {/*free beginner checklist*/}
            {/*paid upgrades*/}
            
            {/*hardware*/}
            {/*tips and tricks*/}
            {/*app resources*/}
        </div>
    );
}

export default Recommendations;