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

/* link lists in learning hub */
export function map_data(datum) {
    return datum.map((data) =>
        <div className="list-item-prefix">
            <p>{data.tags[0] === 1 ? '🌱' : '\u00A0\u00A0\u00A0\u00A0\u00A0'} {data.tags[1] === 1 ? '⭐️' : '\u00A0\u00A0\u00A0\u00A0\u00A0'} {data.tags[2] === 1 ? '🏛️' : '\u00A0\u00A0\u00A0\u00A0\u00A0'} {data.tags[3] === 1 ? '🚨' : '\u00A0\u00A0\u00A0\u00A0\u00A0'} {data.tags[4] === 1 ? '🎬' : '\u00A0\u00A0\u00A0\u00A0\u00A0'} </p>
            <a href={data.url} target="_blank" rel="noopener noreferrer">{data.title}</a>
        </div>
    );
}

/* resource link lists in learning hub */
export function map_resource_data(datum) {
    return datum.map((data) =>
        <div className="list-item-prefix">
            <li><a href={data.url} target="_blank" rel="noopener noreferrer">{data.title}</a>{data.link_desc}</li>
        </div>
    );
}

