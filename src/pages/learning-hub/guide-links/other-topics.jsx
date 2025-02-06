import { map_data } from "../../../global-components/map-data";
import other_topics_data from "./other-topics";

const other_topics_data_list = map_data(other_topics_data);

function OtherTopics() {
    return (
        <div>
            <h2 id="otherT"><a href="#otherT" className="anchor" ></a>Other Interesting Topics</h2>
            <ul>{other_topics_data_list}</ul>
        </div>
    );
}

export default OtherTopics;