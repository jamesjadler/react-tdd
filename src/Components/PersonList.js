import React from 'react'

const PersonList = ({people})=> {
    return (
        <ul>
            {people.map(p => <li>{p.firstName} {p.lastName}</li>)}
        </ul>
    )
}

export default PersonList