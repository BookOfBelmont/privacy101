import React from "react";
import '../../styles/recommendations.css';
import Title from "../../global-components/title.jsx";
import TableOfContents from "./table-of-contents-recommendations.jsx"
import BeforeWeStart from "./before-we-start.jsx";

function Recommendations() {
    return (
        <div>
            <Title />
            <TableOfContents />
            <div>
                <BeforeWeStart />
            </div>
            <div>{/*recommendations*/}
                <div> {/*big checklist*/}
                    {/*most important checklist*/}
                    {/*second step checklist*/}
                    {/*stealthy digital jedi*/}
                </div>
                <div> {/*no-commitment checklist*/}
                    {/*free beginner checklist*/}
                    {/*paid upgrades*/}
                </div>
                {/*hardware*/}
                {/*tips and tricks*/}
            </div>
            {/*app resources*/}
        </div>
    );
}

export default Recommendations;