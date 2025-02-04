import React from "react";
import '../../styles/table-of-contents.css';

function TableOfContents() {
    return (
    <div className="table-of-contents">
        <h2 class="tableOfContents">Table of Contents</h2>
        <div class="toc">
            <p class="toc-1">• <a class="toc-link" href="#" data-href="before">Before we start</a></p>
            <p class="toc-2">• <a class="toc-link" href="#" data-href="why">Why is privacy important?</a></p>
            <p class="toc-2">• <a class="toc-link" href="#" data-href="threat">Threat modelling</a></p>
            <p class="toc-2">• <a class="toc-link" href="#" data-href="companies">Criteria</a></p>
            <p class="toc-1">• <a class="toc-link" href="#" data-href="recommendations">Recommendations</a></p>
            <p class="toc-2">• <a class="toc-link" href="#" data-href="big">The big checklist</a></p>
            <p class="toc-3">• <a class="toc-link" href="#" data-href="important">Most important</a></p>
            <p class="toc-3">• <a class="toc-link" href="#" data-href="second">Second step</a></p>
            <p class="toc-3">• <a class="toc-link" href="#" data-href="jedi">(Stealthy) Digital Jedi</a></p>
            <p class="toc-2">• <a class="toc-link" href="#" data-href="no-commitment">The no-commitment checklist</a></p>
            <p class="toc-3">• <a class="toc-link" href="#" data-href="free">Free beginner setup</a></p>
            <p class="toc-3">• <a class="toc-link" href="#" data-href="paid">Paid upgrades</a></p>
            <p class="toc-2">• <a class="toc-link" href="#" data-href="hardware">Hardware</a></p>
            <p class="toc-2">• <a class="toc-link" href="#" data-href="tips">Tips and tricks</a></p>
            <p class="toc-1">• <a class="toc-link" href="#" data-href="resources">App resources</a></p>
        </div>
    </div>
    );
}

export default TableOfContents;