import React from "react";
import '../../styles/components/table-of-contents.css';

function TableOfContents() {
    return (
        <div className="table-of-contents">
            <h2 className="contents" >Table of Contents</h2>
            <div className="toc">
                <p className="toc-1">• <a className="toc-link" href="#tech-concepts" data-href="tech-concepts">Tech concepts</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="security">Security, privacy and anonymity</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="wireless">Wireless connections</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="modems">Modems, routers, firewalls and networks</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="ips">IP addresses and DNS</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="metadata">Metadata</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="cookies">Cookies</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="encryption">Encryption</a></p>

                <p className="toc-1">• <a className="toc-link" href="#" data-href="threats">Digital threats</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="social">Social engineering</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="malware">Malware</a></p>
                <p className="toc-3">• <a className="toc-link" href="#" data-href="phishing">Phishing</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="sim">Sim swapping</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="fingerprinting">Fingerprinting</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="dataBreaches">Data breaches</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="trackers">Trackers and mass surveillence</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="dataBrokers">Data brokers</a></p>

                <p className="toc-1">• <a className="toc-link" href="#" data-href="solutions">Solutions and How They Work</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="passwords">Passwords</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="2fa">2FA, MFA, passkeys and security keys</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="encryption2">Encryption?</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="browsers">Browsers and search engines</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="vpns">VPNS, DNS and ad blockers</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="firewalls">Firewalls, anti-virus (not) and networking</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="aliases">Aliases</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="dataBrokerM">Data broker maintenance</a></p>

                <p className="toc-1">• <a className="toc-link" href="#" data-href="otherT">Other Interesting Topics</a></p>
                <p className="toc-1">• <a className="toc-link" href="#" data-href="set">You're all set!</a></p>
                <p className="toc-1">• <a className="toc-link" href="#" data-href="resources">Resources</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="guides">Guides</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="tools">Tools</a></p>
                <p className="toc-2">• <a className="toc-link" href="#" data-href="otherR">Other</a></p>
            </div>
        </div>
    );
}

export default TableOfContents;