import react from "react";
import { map_card_data } from "../../global-components/map_svg_logos";
import company_card_db from "./company-card-db.json";


const password_manager_cards = map_card_data(company_card_db, "password_manager");

function StealthyDigitalJedi() {
    return (
        <div class="checklist jedi-setup-checklist">
            <p class="checklistTitle" id="jedi"><a href="#jedi"></a>(Stealthy) Digital Jedi</p>
            {/*  */}
            <p>test</p>
            

        </div>
    );
}

export default StealthyDigitalJedi;