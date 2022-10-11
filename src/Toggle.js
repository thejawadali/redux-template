import React from 'react'

function CoworkerList({co_worker, changeStatus}) {
  return (
    <div>
      <h1>Name: {co_worker.first_name} {co_worker.last_name}</h1>
      <p>In Office {co_worker.inOffice}</p>
      <button onClick={changeStatus}>change Status</button>
    </div>
  )
}

export default CoworkerList