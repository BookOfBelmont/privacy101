/* link tags: ['new', 'excellent', 'instructional', 'current', 'video'] */
/*
export const template = [
    {
        title: "",
        url: "",
        tags: [0, 0, 1, 0, 1]
    },
]
export const template = [
    {
        title: "",
        url_des: "",
        url: "",
    },
]
/* reco card tags: ['open source', 'recently audited', 'e1ee', 'cross-platform', 'free/paid/freemium'] */
/*
export const template = [
    {
        title: "",
        logo_src: "",
        tags: [0, 0, 0, 0, 0],
        talking_points: [
        "",
        ],
    },
]
*/

export function map_data(datum) {
    return datum.map((data) =>
        <div className="list-item-prefix">
            <p>{data.tags[0] === 1 ? '🌱' : '\u00A0\u00A0\u00A0\u00A0\u00A0'} {data.tags[1] === 1 ? '⭐️' : '\u00A0\u00A0\u00A0\u00A0\u00A0'} {data.tags[2] === 1 ? '🏛️' : '\u00A0\u00A0\u00A0\u00A0\u00A0'} {data.tags[3] === 1 ? '🚨' : '\u00A0\u00A0\u00A0\u00A0\u00A0'} {data.tags[4] === 1 ? '🎬' : '\u00A0\u00A0\u00A0\u00A0\u00A0'} </p>
            <a href={data.url} target="_blank" rel="noopener noreferrer">{data.title}</a>
        </div>
    );
}

export function map_resource_data(datum) {
    return datum.map((data) =>
        <div className="list-item-prefix">
            <li><a href={data.url} target="_blank" rel="noopener noreferrer">{data.title}</a>{data.link_desc}</li>
        </div>
    );
}
export function map_card_data(datum) {
    return datum.map((data) =>
        <div className="recommendation-tile">
            <a className="logo-container" style="transform: scale(1.3);" href="https://proton.me/pass"><media-tag className="logo light-shadow" src="https://files.cryptpad.fr/blob/41/41abc2de9929b2bda4729d1f80a083b9b50102dd15e94986" data-crypto-key="cryptpad:1fEglCKmnBFHtN5unmU3Prvd11LToEslJdYC615I9x0="></media-tag></a>
            <p className="recommendation-tag-bin">
                <span className="recommendation-tag">Open source</span>
                <span className="recommendation-tag">Recently audited</span>
                <span className="recommendation-tag">e2ee</span>
                <span className="recommendation-tag">Cross-platform</span>
                <span className="recommendation-tag">Freemium</span>
            </p>
            <div className="recommendation-text">
                <ul>
                    <li>item 1</li>
                </ul>
            </div>
        </div>
    );
}

