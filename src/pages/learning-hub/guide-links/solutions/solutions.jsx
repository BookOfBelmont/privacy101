import { map_data } from "../../../../global-components/map-data";
import passwords_data from "./passwords-data";
import mfa_data from "./mfa-data";
import encryption_data from "./encryption-data";
import browsers_and_search_data from "./browsers-and-search-data";
import vpns_data from "./vpns-data";
import firewalls_and_networking_data from "./firewalls-and-networking-data";
import aliases_data from "./aliases-data";
import data_broker_maintenance_data from "./data-broker-maintenance-data";


const passwords_data_list = map_data(passwords_data);
const mfa_data_list = map_data(mfa_data);
const encryption_data_list = map_data(encryption_data);
const browsers_and_search_data_list = map_data(browsers_and_search_data);
const vpns_data_list = map_data(vpns_data);
const firewalls_and_networking_data_list = map_data(firewalls_and_networking_data);
const aliases_data_list = map_data(aliases_data);
const data_broker_maintenance_data_list = map_data(data_broker_maintenance_data);


function Solutions() {
    return (
        <div>
            <h2 id="solutions"><a href="#solutions" className="anchor" ></a>Solutions and How They Work</h2>
            <h3 className="topic" id="passwords"><a href="#passwords" className="anchor" ></a>Passwords</h3>
            <ul>{passwords_data_list}</ul>
            <h3 className="topic" id="2fa"><a href="#2fa" className="anchor" ></a>2FA, MFA, passkeys and security keys</h3>
            <ul>{mfa_data_list}</ul>
            <h3 className="topic" id="encryption2"><a href="#encryption2" className="anchor" ></a>Encryption?</h3>
            <ul>{encryption_data_list}</ul>
            <h3 className="topic" id="browsers"><a href="#browsers" className="anchor" ></a>Browsers and search engines</h3>
            <ul>{browsers_and_search_data_list}</ul>
            <h3 className="topic" id="vpns"><a href="#vpns" className="anchor" ></a>VPNs, DNS and ad blockers</h3>
            <ul>{vpns_data_list}</ul>
            <h3 className="topic" id="firewalls"><a href="#firewalls" className="anchor" ></a>Firewalls, antivirus (not) and networking</h3>
            <ul>{firewalls_and_networking_data_list}</ul>
            <h3 className="topic" id="aliases"><a href="#aliases" className="anchor" ></a>Aliases</h3>
            <ul>{aliases_data_list}</ul>
            <h3 className="topic" id="dataBrokerM"><a href="#dataBrokerM" className="anchor" ></a>Data broker maintenance</h3>
            <ul>{data_broker_maintenance_data_list}</ul>
        </div>
    );
}

export default Solutions;