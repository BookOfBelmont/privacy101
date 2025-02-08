import react from "react";
import { map_card_data } from "../../logos-svg/map_svg_logos";
import company_card_db from "./company-card-db.json";


const password_manager_cards = map_card_data(company_card_db, "password_manager");



function MostImportantChecklist() {
    return (
        <div className="checklist most-important-checklist">
            <p className="checklistTitle" id="important"><a href="#important"></a>Most important</p>
            <div className="purple-box purple-box2">
                <p className="topic purple-title purple-title2">Harden (secure) devices, apps and accounts</p>
                <div className="purple-content">
                    <li>Use strong passwords and keep track of them with a password manager</li>
                    <ul>{password_manager_cards}</ul>
                    <li>Use multi-factor authentication</li>
                    <li>Keep devices and apps updated</li>
                    <li>SIM password</li>
                    <li>!TIP! password strength testers are unreliable; only random, long passwords are secure</li>
                    <li>Check the <a href="https://cryptpad.fr/code/#/2/code/view/TSkJFIOqu46Ru2ginWYn8SRwZh40g+aCxRaBkH1Riyg/p/embed/present/">Learning Hub</a> page to learn more about password strength</li>
                    <li>!TIP! sign up for notifications on <a href="https://haveibeenpwned.com/">haveibeenpwned</a></li>
                    <li>Keep apps updated</li>
                    <li>Optimize settings: <a href="https://thenewoil.org/en/guides/most-important/mobile-settings/">Private and secure settings list | The New Oil</a></li>
                    <li>Turn on full disk encryption (FileVault (mac native), BitLocker (windows native))</li>
                    <li>Restart phone once per week</li>
                </div>
            </div>
        </div>
    );
}

export default MostImportantChecklist;