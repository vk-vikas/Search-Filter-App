import React from 'react'
import './Table.css';
const Table = ({arr}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
            </tr>
            {arr.map(i => (
                <tr key={i.id}>
                <td>{i.first_name}</td>
                <td>{i.last_name}</td>
                <td>{i.email}</td>
            </tr>
            ))}
            
        </tbody>
    </table>
  )
}

export default Table