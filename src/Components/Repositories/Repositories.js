import React from 'react'
import '../Repositories/Repositories.css'

const Repositories = (props) => {
    let options = props.results.map(r => (
        <div className="col-md-6" key={r.id}>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th colSpan="3">Repository Name: {r.name ? r.name : 'N/A'}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Stars: {r.stars ? r.stars : 'None'}</td>
                        <td>Forks: {r.forks ? r.forks : 'None'}</td>
                        <td>Contributors: {r.contributors ? r.contributors : 'Alone'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    ))
    return <div className="row">{options}</div>
}

export default Repositories