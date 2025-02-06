import React from "react";
import '../../styles/recommendations.css';
import Title from "../../global-components/title.jsx";
import TableOfContents from "./table-of-contents-recommendations.jsx"
import BeforeWeStart from "./before-we-start.jsx";
import MostImportantChecklist from "./most-important-checklist.jsx";

function Recommendations() {
    return (
        <div>
            <Title />
            <TableOfContents />
            <div>
                <BeforeWeStart />
            </div>
            <h2 id="recommendations"><a href="#recommendations"></a>Recommendations</h2>
            <h3 class="listTitle" id="big"><a href="#big"></a>The big checklist</h3>

            <MostImportantChecklist />

            {/*second step checklist*/}
            
            {/*stealthy digital jedi*/}
            
            {/*free beginner checklist*/}
            
            {/*paid upgrades*/}
            
            {/*hardware*/}
            {/*tips and tricks*/}
            {/*app resources*/}
        </div>
    );
}

export default Recommendations;