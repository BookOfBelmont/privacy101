import { map_data } from "../../../../global-components/map-data";
import data_breaches_data from "./data-breaches-data";
import data_brokers_data from "./data-brokers-data";
import fingerprinting_data from "./fingerprinting-data";
import malware_data from "./malware-data";
import phishing_data from "./phishing-data";
import sim_swapping_data from "./sim-swapping-data";
import social_engineering_data from "./social-engineering-data";
import trackers_mass_surveillence_data from "./trackers-mass-surveillence-data";


const data_breaches_data_list = map_data(data_breaches_data);
const data_brokers_data_list = map_data(data_brokers_data);
const fingerprinting_data_list = map_data(fingerprinting_data);
const malware_data_list = map_data(malware_data);
const phishing_data_list = map_data(phishing_data);
const sim_swapping_data_list = map_data(sim_swapping_data);
const social_engineering_data_list = map_data(social_engineering_data);
const trackers_mass_surveillence_data_list = map_data(trackers_mass_surveillence_data);


function DigitalThreats() {
    return (
        <div className="digital-threats">
            <h2 id="threats"><a href="#threats" className="anchor" ></a>Digital threats</h2>
            <h3 className="topic" id="social"><a href="#social" className="anchor" ></a>Social engineering</h3>
            <ul>{social_engineering_data_list}</ul>
            <h3 className="topic" id="malware"><a href="#malware" className="anchor" ></a>Malware</h3>
            <ul>{malware_data_list}</ul>
            <h3 className="topic" id="phishing"><a href="#phishing" className="anchor" ></a>Phishing</h3>
            <ul>{phishing_data_list}</ul>
            <h3 className="topic" id="sim"><a href="#sim" className="anchor" ></a>SIM swapping</h3>
            <ul>{sim_swapping_data_list}</ul>
            <h3 className="topic" id="fingerprinting"><a href="#fingerprinting" className="anchor" ></a>Fingerprinting</h3>
            <ul>{fingerprinting_data_list}</ul>
            <h3 className="topic" id="dataBreaches"><a href="#dataBreaches" className="anchor" ></a>Data breaches</h3>
            <ul>{data_breaches_data_list}</ul>
            <h3 className="topic" id="trackers"><a href="#trackers" className="anchor" ></a>Trackers and mass surveillence</h3>
            <ul>{trackers_mass_surveillence_data_list}</ul>
            <h3 className="topic" id="dataBrokers"><a href="#dataBrokers" className="anchor" ></a>Data brokers</h3>
            <ul>{data_brokers_data_list}</ul>
        </div>
    );
}

export default DigitalThreats;