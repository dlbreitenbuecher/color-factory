import React from 'react';
import { Link } from "react-router-dom";

/**Homepage for colors. Includes links to individual colors and an add color form 
 * 
 * Props:
 * -colors [{name, hex},...]
 * 
 * State: 
 * -None
 * 
 * App -> Route (/colors) ->  ColorsHome
*/

function ColorsHome({colors}) {

  const header = (
    <header className='ColorsHome-header'>
      <h3>Welcome to the color factory.</h3>
      <Link to='/colors/new'><h2>Add a color</h2></Link>
    </header>
  )

  const colorsList = colors.map( color => (
    <Link 
      to={`/colors/${color.name}`} 
      key={color.hex}
    >
      {color.name}
    </Link>
  ))

  return (
    <div className='ColorsHome'>
      {header}
      <p>Please Select a Color:</p>
      {colorsList}
    </div>
  )
}


ColorsHome.defaultProps = {
  colors: [
    { name: 'blue', hex: '#0000FF' },
    { name: 'green', hex: '#008000' },
    { name: 'teal', hex: '	#008080' }
  ]
}

export default ColorsHome;