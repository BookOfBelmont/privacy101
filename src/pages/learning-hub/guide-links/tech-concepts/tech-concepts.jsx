import { map_data } from "../../../../global-components/map-data";
import { security_privacy_anon_data } from "./security-privacy-anon-data";
import { wireless_connections_data } from "./wireless-connections-data";
import { modems_networks_data } from "./modems-networks-data";
import { ip_and_dns_data } from "./ip-and-dns-data";
import { metadata_data } from "./metadata-data";
import { cookies_data } from "./cookies-data";
import { encryption_data } from "./encryption-data";


const security_privacy_anon_data_list = map_data(security_privacy_anon_data);
const wireless_connections_data_list = map_data(wireless_connections_data);
const modems_networks_data_list = map_data(modems_networks_data);
const ip_and_dns_data_list = map_data(ip_and_dns_data);
const metadata_data_list = map_data(metadata_data);
const cookies_data_list = map_data(cookies_data);
const encryption_data_list = map_data(encryption_data);


function TechConcepts() {
    return (
        <div className="tech-concepts">
            <h2 id="tech-concepts"><a href="#tech-concepts" className="anchor" ></a>Tech Concepts</h2>
            <h3 className="topic" id="security"><a href="#security" className="anchor" ></a>Security, privacy and anonymity</h3>
            <ul>{security_privacy_anon_data_list}</ul>
            <h3 className="topic" id="wireless"><a href="#wireless" className="anchor" ></a>Wireless connections</h3>
            <ul>{wireless_connections_data_list}</ul>
            <h3 className="topic" id="modems"><a href="#modems" className="anchor" ></a>Modems, routers, firewalls and networks</h3>
            <ul>{modems_networks_data_list}</ul>
            <h3 className="topic" id="ips"><a href="#ips" className="anchor" ></a>IP addresses and DNS</h3>
            <ul>{ip_and_dns_data_list}</ul>
            <h3 className="topic" id="metadata"><a href="#metadata" className="anchor" ></a>Metadata</h3>
            <ul>{metadata_data_list}</ul>
            <h3 className="topic" id="cookies"><a href="#cookies" className="anchor" ></a>Cookies</h3>
            <ul>{cookies_data_list}</ul>
            <h3 className="topic" id="encryption"><a href="#encryption" className="anchor" ></a>Encryption</h3>
            <ul>{encryption_data_list}</ul>
        </div>
    );
}

export default TechConcepts;