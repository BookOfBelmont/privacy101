import react from "react";
import { map_card_data } from "../../global-components/map_svg_logos";
import company_card_db from "./company-card-db.json";


const password_manager_cards = map_card_data(company_card_db, "password_manager");

function SecondStepChecklist() {
    return (
        <div class="checklist second-step-checklist">
            <p class="checklistTitle" id="second"><a href="#second"></a>Second step</p>
            {/*  */}
            <p>test</p>

        </div>
    );
}

export default SecondStepChecklist;