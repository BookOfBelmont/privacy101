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

    const ReturnComponent = datum.filter(datum => datum.category == category).map((data) =>
        <div className="recommendation-tile">
            <a className="logo-container" href={data.url}>
                <FindCardLogo logo_title={data.title} logo_category={data.category} />
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
    if (props.logo_title === "1password" && props.logo_category == "password_manager") {
        return <Password1Wordmark />;
    } else if (props.logo_title === "addy.io" && props.logo_category == "aliasing") {
        return <AddyWordmark />;
    } else if (props.logo_title === "bitwarden" && props.logo_category == "password_manager") {
        return <BitwardenWordmark />;
    } else if (props.logo_title === "brave" && props.logo_category == "browser") { {/* */}
        return <BraveWordmark />;
    } else if (props.logo_title === "cryptee" && props.logo_category == "notes") { {/* */}
        return <CrypteeWordmark />;
    } else if (props.logo_title === "cryptomator" && props.logo_category == "encryption") {
        return <CryptomatorWordmark />;
    } else if (props.logo_title === "cryptpad" && props.logo_category == "collaborative_docs") {
        return <CryptpadWordmark />;
    } else if (props.logo_title === "duckduckgo" && props.logo_category == "browser") { {/* */}
        return <DuckDuckGoWordmark />;
    } else if (props.logo_title === "ente" && props.logo_category == "cloud_photos") {
        return <EnteWordmark />;
    } else if (props.logo_title === "filen" && props.logo_category == "cloud_drive") {
        return <FilenWordmark />;
    } else if (props.logo_title === "hushed" && props.logo_category == "alias") { {/* */}
        return <HushedWordmark />;
    } else if (props.logo_title === "ivpn" && props.logo_category == "vpn") {
        return <IvpnWordmark />;
    } else if (props.logo_title === "libreoffice" && props.logo_category == "docs") {
        return <LibreOfficeWordmark />;
    } else if (props.logo_title === "mullvad_browser" && props.logo_category == "browser") {
        return <MullvadBrowserWordmark />;
    } else if (props.logo_title === "mullvad_vpn" && props.logo_category == "vpn") {
        return <MullvadVpnWordmark />;
    } else if (props.logo_title === "obsidian" && props.logo_category == "notes") {
        return <ObsidianWordmark />;
    } else if (props.logo_title === "onlyoffice" && props.logo_category == "docs") { {/* */}
        return <OnlyofficeWordmark />;
    } else if (props.logo_title === "proton_calendar" && props.logo_category == "calendar") {
        return <ProtonCalendarWordmark />;
    } else if (props.logo_title === "proton_drive" && props.logo_category == "cloud_drive") {
        return <ProtonDriveWordmark />;
    } else if (props.logo_title === "proton_mail" && props.logo_category == "email") {
        return <ProtonMailWordmark />;
    } else if (props.logo_title === "proton_pass" && props.logo_category == "password_manager") {
        return <ProtonPassWordmark />;
    } else if (props.logo_title === "proton_vpn" && props.logo_category == "vpn") {
        return <ProtonVpnWordmark />;
    } else if (props.logo_title === "searxng" && props.logo_category == "search_engine") {
        return <SearxngWordmark />;
    } else if (props.logo_title === "signal" && props.logo_category == "messenger") {
        return <SignalWordmark />;
    } else if (props.logo_title === "simplelogin" && props.logo_category == "alias") { {/* */}
        return <SimpleLoginWordmark />;
    } else if (props.logo_title === "standard_notes" && props.logo_category == "notes") {
        return <StandardNotesWordmark />;
    } else if (props.logo_title === "startpage" && props.logo_category == "search_engine") {
        return <StartpageWordmark />;
    } else if (props.logo_title === "thunderbird" && props.logo_category == "email_client") {
        return <ThunderbirdWordmark />;
    } else if (props.logo_title === "tuta_calendar" && props.logo_category == "calendar") {
        return <TutaCalendarWordmark />;
    } else if (props.logo_title === "tuta_mail" && props.logo_category == "email") {
        return <TutaMailWordmark />;
    } else if (props.logo_title === "ublock_origin" && props.logo_category == "browser_extensions") {
        return <UblockOriginWordmark />;
    } else if (props.logo_title === "windscribe" && props.logo_category == "vpn") {
        return <WindscribeWordmark />;
    } else {
        return <p>ERROR!</p>;
    }
}