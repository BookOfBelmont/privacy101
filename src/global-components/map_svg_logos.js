import react from "react";
import { ReactComponent as Password1Wordmark } from "../logos-svg/1password-wordmark.svg";
import { ReactComponent as AddyWordmark } from "../logos-svg/addy-wordmark.svg";
import { ReactComponent as BitwardenWordmark } from "../logos-svg/bitwarden-wordmark.svg";
import { ReactComponent as BraveWordmark } from "../logos-svg/brave-wordmark.svg";
import { ReactComponent as ControlDWordmark } from "../logos-svg/control-d-wordmark.svg";
import { ReactComponent as CrypteeWordmark } from "../logos-svg/cryptee-wordmark.svg";
import { ReactComponent as CryptomatorWordmark } from "../logos-svg/cryptomator-wordmark.svg";
import { ReactComponent as CryptpadWordmark } from "../logos-svg/cryptpad-wordmark.svg";
import { ReactComponent as DuckDuckGoWordmark } from "../logos-svg/duckduckgo-wordmark.svg";
import { ReactComponent as EnteDuckyWordmark } from "../logos-svg/ente-ducky.png";
import { ReactComponent as EnteWordmark } from "../logos-svg/ente-wordmark.svg";
import { ReactComponent as FilenWordmark } from "../logos-svg/filen-wordmark.svg";
import { ReactComponent as HushedWordmark } from "../logos-svg/hushed-wordmark.svg";
import { ReactComponent as IvpnWordmark } from "../logos-svg/ivpn-wordmark.svg";
import { ReactComponent as LibreOfficeWordmark } from "../logos-svg/libreoffice-wordmark.svg";
import { ReactComponent as MullvadBrowserWordmark } from "../logos-svg/mullvad-browser-wordmark.svg";
import { ReactComponent as MullvadDnsWordmark} from "../logos-svg/mullvad-dns-wordmark.svg";
import { ReactComponent as MullvadVpnWordmark } from "../logos-svg/mullvad-vpn-wordmark.svg";
import { ReactComponent as NextDnsWordmark } from "../logos-svg/nextdns-wordmark.svg";
import { ReactComponent as ObsidianWordmark } from "../logos-svg/obsidian-wordmark.svg";
import { ReactComponent as OnlyofficeWordmark } from "../logos-svg/onlyoffice-wordmark.svg";
import { ReactComponent as ProtonCalendarWordmark } from "../logos-svg/proton-calendar-wordmark.svg";
import { ReactComponent as ProtonDriveWordmark } from "../logos-svg/proton-drive-wordmark.svg";
import { ReactComponent as ProtonMailWordmark } from "../logos-svg/proton-mail-wordmark.svg";
import { ReactComponent as ProtonPassWordmark } from "../logos-svg/proton-pass-wordmark.svg";
import { ReactComponent as ProtonVpnWordmark } from "../logos-svg/proton-vpn-wordmark.svg";
import { ReactComponent as SearxngWordmark } from "../logos-svg/searxng-wordmark.svg";
import { ReactComponent as Quad9Wordmark } from "../logos-svg/quad9-wordmark.svg"
import { ReactComponent as SignalWordmark } from "../logos-svg/signal-wordmark.svg";
import { ReactComponent as SimpleLoginWordmark } from "../logos-svg/simple-login-wordmark.svg";
import { ReactComponent as StandardNotesWordmark } from "../logos-svg/standard-notes-wordmark.svg";
import { ReactComponent as StartpageWordmark } from "../logos-svg/startpage-wordmark.svg";
import { ReactComponent as ThunderbirdWordmark } from "../logos-svg/thunderbird-wordmark.svg";
import { ReactComponent as TutaCalendarWordmark } from "../logos-svg/tuta-calendar-wordmark.svg";
import { ReactComponent as TutaMailWordmark } from "../logos-svg/tuta-mail-wordmark.svg";
import { ReactComponent as UblockOriginWordmark } from "../logos-svg/ublock-origin-wordmark.svg";
import { ReactComponent as WindscribeWordmark } from "../logos-svg/windscribe-wordmark.svg";

// to add new svg:
// add svg to logos-svg folder
// import above using ReactComponent
// add to FindCardLogo() else if statement
// add logo details in company-card-db.json

export function map_card_data(datum, category) {
    
    const LogoToRender = "test" === "bitwarden" ? BitwardenWordmark : BraveWordmark;

    const ReturnComponent = datum.filter(datum => datum.category.includes(category)).map((data) =>
        <div className="recommendation-tile">
            <a className="logo-container" href={data.url} target="_blank" rel="noopener noreferrer">
                <FindCardLogo logo_title={data.title} />
            </a>
            <p className="recommendation-tag-bin">
                {data.tags[0] === 0 ? <span className="recommendation-tag">Proprietary</span> : null }
                {data.tags[0] === 1 ? <span className="recommendation-tag">Open source</span> : null }
                {data.tags[1] === 1 ? <span className="recommendation-tag">Recently audited</span> : null }
                {data.tags[2] === 1 ? <span className="recommendation-tag">e2ee</span> : null }
                {data.tags[3] === 1 ? <span className="recommendation-tag">Cross-platform</span> : null }
                {data.tags[4] === 0 ? <span className="recommendation-tag">Free</span> : null }
                {data.tags[4] === 1 ? <span className="recommendation-tag">Freemium</span> : null }
                {data.tags[4] === 2 ? <span className="recommendation-tag">Paid</span> : null }
            </p>
            <div className="recommendation-text">
                {data.talking_points.map(data => <li>{data}</li>)}
            </div>
        </div>
    );

    return ReturnComponent;
}


function FindCardLogo(props) {
    if (props.logo_title === "1password") {
        return <Password1Wordmark />;
    } else if (props.logo_title === "addy.io") {
        return <AddyWordmark />;
    } else if (props.logo_title === "bitwarden") {
        return <BitwardenWordmark />;
    } else if (props.logo_title === "brave") {
        return <BraveWordmark />;
    } else if (props.logo_title === "control-d"){
        return <ControlDWordmark />
    } else if (props.logo_title === "cryptee") {
        return <CrypteeWordmark />;
    } else if (props.logo_title === "cryptomator") {
        return <CryptomatorWordmark />;
    } else if (props.logo_title === "cryptpad") {
        return <CryptpadWordmark />;
    } else if (props.logo_title === "duckduckgo") {
        return <DuckDuckGoWordmark />;
    } else if (props.logo_title === "ente") {
        return <EnteWordmark />;
    } else if (props.logo_title === "filen") {
        return <FilenWordmark />;
    } else if (props.logo_title === "hushed") {
        return <HushedWordmark />;
    } else if (props.logo_title === "ivpn") {
        return <IvpnWordmark />;
    } else if (props.logo_title === "libreoffice") {
        return <LibreOfficeWordmark />;
    } else if (props.logo_title === "mullvad_browser") {
        return <MullvadBrowserWordmark />;
    } else if (props.logo_title === "mullvad_dns"){
        return <MullvadDnsWordmark />
    } else if (props.logo_title === "mullvad_vpn") {
        return <MullvadVpnWordmark />;
    } else if (props.logo_title === "nextdns") {
        return <NextDnsWordmark />;
    } else if (props.logo_title === "obsidian") {
        return <ObsidianWordmark />;
    } else if (props.logo_title === "onlyoffice") {
        return <OnlyofficeWordmark />;
    } else if (props.logo_title === "proton_calendar") {
        return <ProtonCalendarWordmark />;
    } else if (props.logo_title === "proton_drive") {
        return <ProtonDriveWordmark />;
    } else if (props.logo_title === "proton_mail") {
        return <ProtonMailWordmark />;
    } else if (props.logo_title === "proton_pass") {
        return <ProtonPassWordmark />;
    } else if (props.logo_title === "proton_vpn") {
        return <ProtonVpnWordmark />;
    } else if (props.logo_title === " quad9") {
        return <Quad9Wordmark />;
    } else if (props.logo_title === "searxng") {
        return <SearxngWordmark />;
    } else if (props.logo_title === "signal") {
        return <SignalWordmark />;
    } else if (props.logo_title === "simplelogin") {
        return <SimpleLoginWordmark />;
    } else if (props.logo_title === "standard_notes") {
        return <StandardNotesWordmark />;
    } else if (props.logo_title === "startpage") {
        return <StartpageWordmark />;
    } else if (props.logo_title === "thunderbird") {
        return <ThunderbirdWordmark />;
    } else if (props.logo_title === "tuta_calendar") {
        return <TutaCalendarWordmark />;
    } else if (props.logo_title === "tuta_mail") {
        return <TutaMailWordmark />;
    } else if (props.logo_title === "ublock_origin") {
        return <UblockOriginWordmark />;
    } else if (props.logo_title === "windscribe") {
        return <WindscribeWordmark />;
    } else {
        return <p className="error" >ERROR!</p>;
    }
}