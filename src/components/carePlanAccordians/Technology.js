import React, { useState } from 'react'

export default function Technology() {
  
  const technologiesList = ['abc' , 'xyz']//useState((carePlan) => carePlan.technologies);

  return (
    <table>
        <thead>
            <tr>
              <th>Types</th>
            </tr>
        </thead>
        <tbody>
          {
            technologiesList.map( ( technology , index ) => 
              <tr key={index}>
                <td>{technology}</td>
              </tr>
            )
          } 
        </tbody>
    </table>
  )
}
