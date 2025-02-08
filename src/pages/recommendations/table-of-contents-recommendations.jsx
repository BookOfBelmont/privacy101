import React from "react";
import '../../styles/components/table-of-contents.css';

function TableOfContents() {
    return (
    <div className="table-of-contents">
        <h2 className="tableOfContents">Table of Contents</h2>
        <div className="toc">
            <p className="toc-1">• <a className="toc-link" href="#" data-href="before">Before we start</a></p>
            <p className="toc-2">• <a className="toc-link" href="#" data-href="why">Why is privacy important?</a></p>
            <p className="toc-2">• <a className="toc-link" href="#" data-href="threat">Threat modelling</a></p>
            <p className="toc-2">• <a className="toc-link" href="#" data-href="companies">Criteria</a></p>
            <p className="toc-1">• <a className="toc-link" href="#" data-href="recommendations">Recommendations</a></p>
            <p className="toc-2">• <a className="toc-link" href="#" data-href="big">The big checklist</a></p>
            <p className="toc-3">• <a className="toc-link" href="#" data-href="important">Most important</a></p>
            <p className="toc-3">• <a className="toc-link" href="#" data-href="second">Second step</a></p>
            <p className="toc-3">• <a className="toc-link" href="#" data-href="jedi">(Stealthy) Digital Jedi</a></p>
            <p className="toc-2">• <a className="toc-link" href="#" data-href="no-commitment">The no-commitment checklist</a></p>
            <p className="toc-3">• <a className="toc-link" href="#" data-href="free">Free beginner setup</a></p>
            <p className="toc-3">• <a className="toc-link" href="#" data-href="paid">Paid upgrades</a></p>
            <p className="toc-2">• <a className="toc-link" href="#" data-href="hardware">Hardware</a></p>
            <p className="toc-2">• <a className="toc-link" href="#" data-href="tips">Tips and tricks</a></p>
            <p className="toc-1">• <a className="toc-link" href="#" data-href="resources">App resources</a></p>
        </div>
    </div>
    );
}

export default TableOfContents;