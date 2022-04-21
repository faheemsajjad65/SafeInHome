import React from 'react'
import { useSelector } from 'react-redux'

export default function ClientsList() {

  const clientsList = useSelector((state) => state.clients);
  
  return (
    <table className="table table-dark">
        <thead>
            <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
            </tr>
        </thead>
        <tbody>
          {
            clientsList.map( client => 
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            )
          } 
        </tbody>
    </table>
  )
}
