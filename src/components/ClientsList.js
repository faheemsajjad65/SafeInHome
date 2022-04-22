import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import CarePlan from './CarePlan'

export default function ClientsList() {

  const clientsList = useSelector((state) => state.clients);

  const navigate =  useNavigate();

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
            <tr onClick={() => navigate('/wizard/carePlan/1')}>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
          {
            clientsList.map( client => 
              <tr onClick={() => navigate(`/wizard/carePlan/${client.id}`)}>
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
