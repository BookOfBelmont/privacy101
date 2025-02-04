import React from "react";
import '../../styles/learning-hub.css';
import './table-of-contents-learning-hub.jsx';
import Title from "../../global-components/title.jsx";
import TableOfContents from "./table-of-contents-learning-hub.jsx";
import EmojiLegend from "../../global-components/emoji-legend.jsx";
import TechConcepts from "./guide-links/tech-concepts/tech-concepts.jsx";
import DigitalThreats from "./guide-links/digital-threats/digital-threats.jsx";
import Solutions from "./guide-links/solutions/solutions.jsx";

function LearningHub() {
    return (
        <div>
            <Title />
            <TableOfContents />
            <EmojiLegend />
            <TechConcepts />
            <DigitalThreats />
            <Solutions />

        </div>
    );
}

export default LearningHub;
