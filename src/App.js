import { useState } from "react"
import Toggle from "./Toggle"
function App () {
  const [coworkers, setCowrokers] = useState( [
    { first_name: 'Max', last_name: 'Mustermann', inOffice: "true" },
    { first_name: 'Vladimir', last_name: 'Leles', inOffice: false },
    { first_name: 'Tobias', last_name: 'Anhalt', inOffice: false },
  ] )

  const changeStatus = ( e ) => {
    console.log( "change" )
    setCowrokers(...coworkers, )
  }

  return (
    <div> 
      <Toggle co_worker={coworkers[0]} changeStatus={changeStatus}></Toggle>
    </div>
  )
}

export default App
