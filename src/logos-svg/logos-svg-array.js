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


export function map_card_data(datum) {

    console.log(datum);
    const LogoToRender = "test" === "bitwarden" ? BitwardenWordmark : BraveWordmark;

    const ReturnComponent = datum.map((data) =>
        <div className="recommendation-tile">
            <a className="logo-container" href={data.url}>
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


function FindCardLogo(data) {
    if (data.logo_title === "Bitwarden") {
        return <BitwardenWordmark />;
    } else if (data.logo_title === "ProtonMail") {
        return <ProtonMailWordmark />;
    } else {
        return null;
    }
}