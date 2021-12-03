import React from 'react'

const Newsitem = (props) => {

    let { title, source, description, imgurl, url, author, date } = props;
    return (
        <>
            <div className="card bg-light" >
                <div style={{ display: 'flex', position: 'absolute', right: 0 }}>
                    <span class="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={imgurl} className="card-img-top" alt=".." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description ? description.slice(0, 80) + "..." : ''}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-warning">Let`s See</a>
                </div>
            </div>
        </>
    )
}
export default Newsitem


// import React, { Component } from 'react'

// export class Newsitem extends Component {
//     pro
//     render() {
//         let { title, source, description, imgurl, url, author, date } = this.props;
//         return (

//             <>
//                 <div className="card bg-light" >
//                     <div style={{ display: 'flex', position: 'absolute', right: 0 }}>
//                         <span class="badge rounded-pill bg-danger">{source}</span>
//                     </div>
//                     <img src={imgurl} className="card-img-top" alt=".." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}</h5>
//                         <p className="card-text">{description ? description.slice(0, 80) + "..." : ''}</p>
//                         <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
//                         <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-warning">Let`s See</a>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

// export default Newsitem