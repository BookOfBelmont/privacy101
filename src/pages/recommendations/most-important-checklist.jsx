import react from "react";
import { map_card_data } from "../../global-components/map_svg_logos";
import company_card_db from "./company-card-db.json";


function MostImportantChecklist() {
    return (
        <div className="checklist most-important-checklist">
            <p className="checklistTitle" id="important"><a href="#important"></a>Most important</p>
            {/* harden //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div className="purple-box purple-box2">
                <p className="topic purple-title purple-title2">Harden (secure) devices, apps and accounts</p>
                <div className="purple-content">
                    <li>Use strong passwords and keep track of them with a password manager</li>
                    <ul>{map_card_data(company_card_db, "password_manager")}</ul>
                    <li>Use multi-factor authentication</li>
                    <ul>{map_card_data(company_card_db, "mfa")}</ul>
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
            {/* communications //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div class="purple-box purple-box2">
                <p class="topic purple-title purple-title2">Secure communications</p>
                <div class="purple-content">
                    <li>Encrypted email/calendar providers</li>
                    <ul>{map_card_data(company_card_db, "email")}</ul>
                    <li>Realtime messengers</li>
                    <ul>{map_card_data(company_card_db, "messengers")}</ul>
                    <li>Email/calendar front end apps?????</li>
                    <ul>{map_card_data(company_card_db, "email_client")}</ul>
                    <li>TIP! stay away from SMS</li>
                    <li>Signal is the only messenger I recommend (including sms and rcs texting) because it is encrypted nad cross-platform. It is also the most popular in this category which makes it easier to connect with people.</li>
                    <li>[Best WhatsApp Alternatives For 2024 | Tuta](https://tuta.com/blog/best-whatsapp-alternatives-privacy)</li>
                </div>
            </div>
            {/* cloud storage /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div class="purple-box purple-box2">
                <p class="topic purple-title purple-title2">Storage</p>
                <div class="purple-content">
                    <li>Why use cloud storage?</li>
                    <li>Cloud storage providers</li>
                    <ul>{map_card_data(company_card_db, "cloud_storage")}</ul>
                    <li>Photo storage</li>
                    <ul>{map_card_data(company_card_db, "cloud_photo")}</ul>
                </div>
            </div>
            {/* browsers //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div class="purple-box purple-box2">
                <p class="topic purple-title purple-title2">Secure browsers</p>
                <div class="purple-content">
                    <ul>{map_card_data(company_card_db, "browsers")}</ul>
                    <li>Search engines</li>
                    <ul>{map_card_data(company_card_db, "search_engine")}</ul>
                    <li>Use an ad blocker</li>
                    <ul>{map_card_data(company_card_db, "ad_blocker")}</ul>
                    <li>Use as few extensions as possible. I recommend ONLY using an ad blocker and a password manager</li>
                </div>
            </div>
        </div>
    );
}

export default MostImportantChecklist;