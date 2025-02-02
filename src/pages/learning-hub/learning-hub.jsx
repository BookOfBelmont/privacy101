import React from "react";
import '../../styles/learning-hub.css';
import './table-of-contents-learning-hub.jsx';
import Title from "../../global-components/title.jsx";
import TableOfContents from "./table-of-contents-learning-hub.jsx";

function LearningHub() {
    return (
        <div>
            <Title />
            <TableOfContents />

        </div>
    );
}

export default LearningHub;
