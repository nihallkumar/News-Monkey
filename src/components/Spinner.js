import React from 'react'
import loading from './loading.gif'

const Spinner = () => {

    return (
        <div className="text-center my-3">
            <img src={loading} alt="Loading..." />
        </div>
    )
}
export default Spinner

// import React, { Component } from 'react'
// import loading from './loading.gif'

// export class Spinner extends Component {
//     render() {
//         return (
//             <div className="text-center my-3">
//                 <img src={loading} alt="Loading..." />
//             </div>
//         )
//     }
// }

// export default Spinner
