import React from "react";
import '../../styles/learning-hub.css';
import './table-of-contents-learning-hub';
import Title from "../../global-components/title.js";
import TableOfContents from "./table-of-contents-learning-hub";

function LearningHub() {
    return (
        <div>
            <Title />
            <TableOfContents />

        </div>
    );
}

export default LearningHub;
