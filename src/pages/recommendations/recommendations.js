import React from "react";
import '../../styles/recommendations.css';
import Title from "../../global-components/title.js";
import TableOfContents from "./table-of-contents-recommendations.js"

function Recommendations() {
    return (
        <div>
            <Title />
            <TableOfContents />
        </div>
    );
}

export default Recommendations;