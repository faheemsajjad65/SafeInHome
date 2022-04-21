import React from 'react'
import { useSelector } from 'react-redux'

export default function CarePlansList() {
  
  const carePlans = useSelector((state) => state.carePlans)
  
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
            carePlans.map( client => 
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
