import React from "react";
import '../../styles/recommendations.css';
import Title from "../../global-components/title.jsx";
import TableOfContents from "./table-of-contents-recommendations.jsx"

function Recommendations() {
    return (
        <div>
            <Title />
            <TableOfContents />
        </div>
    );
}

export default Recommendations;