import React from "react";
import '../styles/pages/landing-page.css';
import Title from "../global-components/title.jsx";

function LandingPage() {
    return (
        <div className="landing-page">
            <Title />
            <iframe src="https://cryptpad.fr/code/#/2/code/view/OwytGOUVgNpdEanZb+0XKdyPCg3mFnr8Gp5JqqcAn2Q/embed/present/"></iframe>
        </div>
    );
}

export default LandingPage;