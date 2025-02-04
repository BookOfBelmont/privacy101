import { map_data, map_resource_data } from "../../../../global-components/map-data";
import { guides_data } from "./guides-data";
import { tools_data } from "./tools-data";
import { other_data } from "./other-data";


const guides_data_list = map_resource_data(guides_data);
const tools_data_list = map_resource_data(tools_data);
const other_data_list = map_resource_data(other_data);


function Resources() {
    return (
        <div>
            <h2 id="resources"><a href="#resources" class="anchor" ></a>Resources</h2>
            <h3 class="topic" id="guides"><a href="#guides" class="anchor" ></a>Guides</h3>
            <ul>{guides_data_list}</ul>
            <h3 class="topic" id="tools"><a href="#tools" class="anchor" ></a>Tools</h3>
            <ul>{tools_data_list}</ul>
            <h3 class="topic" id="otherR"><a href="#otherR" class="anchor" ></a>Other</h3>
            <ul>{other_data_list}</ul>
        </div>
    );
}

export default Resources;