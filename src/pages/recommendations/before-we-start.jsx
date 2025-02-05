function BeforeWeStart() {
    return (
        <div>
            <h2 id="before"><a href="#before"></a>Before we start</h2>


            {/*Why is privacy important?*/}
            <details name="collapsible" className="purple-box">
                <summary id="why">
                    <span className="spanCollapse topic purple-title">
                        <a href="#why"></a>Why is privacy important?
                    </span>
                </summary>
                <div className="purple-content">
                    <ul>
                        <li><a href="https://thenewoil.org/en/guides/prologue/why/">Why Privacy & Security Matter | The New Oil</a></li>
                        <br/>
                        <li><a href="https://www.youtube.com/watch?v=eR7D6Fx0fTQ">THIS is why privacy is CRUCIAL | Naomi Brockwell</a></li>
                    </ul>
                </div>
            </details>
            
            
            <br/>
            
            
            {/*Threat modelling*/}
            <details name="collapsible" className="purple-box">
                <summary id="threat">
                    <span className="spanCollapse topic purple-title">
                        <a href="#threat"></a>Threat Modelling
                    </span>
                </summary>
                <div className="purple-content">
                    <blockquote>
                        <p>Your privacy and security needs change depending on your individual circumstance, and it's up to you to adapt to your position. You don't need to be journalist, human rights activist or spy to care about your privacy. To learn more about evaluating your own threat model, click on the links below.</p>
                    </blockquote>
                    <ul>
                        <li><a href="https://securityplanner.consumerreports.org/">Security Planners | Consumer Reports</a></li>
                        <br/>
                        <li><a href="https://www.privacyguides.org/en/basics/threat-modeling/">Threat Modelling | Privacy Guides</a></li>
                        <br/>
                        <li><a href="https://ssd.eff.org/module/your-security-plan">Your Security Plan | Surveillence Self Defense</a></li>
                        <br/>
                        <li><a href="https://www.youtube.com/watch?v=DHZRhboZhfI">How to PROPERLY threat model | Techlore</a></li>
                        <br/>
                        <li><a href="https://www.youtube.com/watch?v=joem6sOHaoI">What is Threat Modeling? | The New Oil</a></li>
                    </ul>
                </div>
            </details>


            <br/>



            {/*What to look for in companies*/}
            <details name="collapsible" className="purple-box">
                <summary id="companies">
                    <span className="spanCollapse topic purple-title">
                        <a href="#companies"></a>What to look for in companies
                    </span>
                </summary>
                <div className="purple-content">
                    <p>
                        - ***If the app/service is free, you're the product***

                     Q: How does a company make money if the app/service they're selling is free?

                     A: Companies like Google and Amazon sell your data through various channels. They can also get your data through third party companies that use their services (Google Analitics for example) in the background - some of them don't even realize that data is being taken from their customers. Your data is primarily used to serve you personalized ads, but there is little to no regulation in the industry and your data can end up with a data broker who can sell it to anyone. The big companies like Google double dip by also selling ad space on their platforms. Understanding how a company makes money is crucial to choosing an app/service.

                - Open source vs proprietary

                     As you will learn, proprietary apps are not always, but often untrustworthy. Open source software software on the other hand, is freely available for inspection and is completely transparent. A popular, open source app is a very safe app because it has likely been reviewed by many people in the open source community.

                - Transparency, audits and trust

                     1Password is a great example of a proprietary app that *is* trustworthy because their products are regularly reviewed by multiple independent security firms. On the other hand, companies like Google offer little to no transparency into the inner workings of their apps and services, and have been caught lying and abusing customer data without consent. Companies that provide shady, unspecific updates and don't provide sound, community-supported decisions are a red flag.

                - Intentional decisions and awareness

                     The key to being digitally protected is to be able to make educated, intentional decisions by being aware of your digital environment. If you haven't already, I highly recommend reading through the [Learning Hub](https://cryptpad.fr/code/#/2/code/view/TSkJFIOqu46Ru2ginWYn8SRwZh40g+aCxRaBkH1Riyg/p/embed/present/) before browsing my recommendations.
                    </p>
                </div>
            </details>
        </div>
    );
}
export default BeforeWeStart;