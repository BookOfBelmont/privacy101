import react from "react";
import { ReactComponent as Password1Wordmark } from "./1password-wordmark.svg";
import { ReactComponent as AddyWordmark } from "./addy-wordmark.svg";
import { ReactComponent as BitwardenWordmark } from "./bitwarden-wordmark.svg";
import { ReactComponent as BraveWordmark } from "./brave-wordmark.svg";
import { ReactComponent as CrypteeWordmark } from "./cryptee-wordmark.svg";
import { ReactComponent as CryptomatorWordmark } from "./cryptomator-wordmark.svg";
import { ReactComponent as CryptpadWordmark } from "./cryptpad-wordmark.svg";
import { ReactComponent as DuckDuckGoWordmark } from "./duckduckgo-wordmark.svg";
import { ReactComponent as EnteDuckyWordmark } from "./ente-ducky.png";
import { ReactComponent as EnteWordmark } from "./ente-wordmark.svg";
import { ReactComponent as FilenWordmark } from "./filen-wordmark.svg";
import { ReactComponent as HushedWordmark } from "./hushed-wordmark.svg";
import { ReactComponent as IvpnWordmark } from "./ivpn-wordmark.svg";
import { ReactComponent as LibreOfficeWordmark } from "./libreoffice-wordmark.svg";
import { ReactComponent as MullvadBrowserWordmark } from "./mullvad-browser-wordmark.svg";
import { ReactComponent as MullvadVpnWordmark } from "./mullvad-vpn-wordmark.svg";
import { ReactComponent as ObsidianWordmark } from "./obsidian-wordmark.svg";
import { ReactComponent as OnlyofficeWordmark } from "./onlyoffice-wordmark.svg";
import { ReactComponent as ProtonCalendarWordmark } from "./proton-calendar-wordmark.svg";
import { ReactComponent as ProtonDriveWordmark } from "./proton-drive-wordmark.svg";
import { ReactComponent as ProtonMailWordmark } from "./proton-mail-wordmark.svg";
import { ReactComponent as ProtonPassWordmark } from "./proton-pass-wordmark.svg";
import { ReactComponent as ProtonVpnWordmark } from "./proton-vpn-wordmark.svg";
import { ReactComponent as SearxngWordmark } from "./searxng-wordmark.svg";
import { ReactComponent as SignalWordmark } from "./signal-wordmark.svg";
import { ReactComponent as SimpleLoginWordmark } from "./simple-login-wordmark.svg";
import { ReactComponent as StandardNotesWordmark } from "./standard-notes-wordmark.svg";
import { ReactComponent as StartpageWordmark } from "./startpage-wordmark.svg";
import { ReactComponent as ThunderbirdWordmark } from "./thunderbird-wordmark.svg";
import { ReactComponent as TutaCalendarWordmark } from "./tuta-calendar-wordmark.svg";
import { ReactComponent as TutaMailWordmark } from "./tuta-mail-wordmark.svg";
import { ReactComponent as UblockOriginWordmark } from "./ublock-origin-wordmark.svg";
import { ReactComponent as WindscribeWordmark } from "./windscribe-wordmark.svg";

// to use svg:
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
                {data.tags[0] === 1 ? <span className="recommendation-tag">Open source</span> : null }
                {data.tags[1] === 1 ? <span className="recommendation-tag">Recently audited</span> : null }
                {data.tags[2] === 1 ? <span className="recommendation-tag">e2ee</span> : null }
                {data.tags[3] === 1 ? <span className="recommendation-tag">Cross-platform</span> : null }
                {data.tags[4] === 1 ? <span className="recommendation-tag">Freemium</span> : null }
            </p>
            <div className="recommendation-text">
                {map_card_talking_points(data.talking_points)}
            </div>
        </div>
    );

    return ReturnComponent;
}

function map_card_talking_points(datum) {
    return datum.map((data) =>
        <li>{data}</li>
    );
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
    } else if (props.logo_title === "mullvad_vpn") {
        return <MullvadVpnWordmark />;
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