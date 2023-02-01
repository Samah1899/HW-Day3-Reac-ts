import React from 'react'

interface TVShow {
    [index: string]: TVShows;
  }
  
   interface TVShows {
    name:string,
    img:string,
    date:number|String,
    evaluation:string|number,
    Availablenow?:boolean|string
   }
function TVShow(props:TVShows) {
  return (
    
        <nav className='TVshow1'>
            <img src= {props.img}></img>
            {props.name}
            {props.date}
            {(props.Availablenow )?'Available':'coming soon'}
           
        </nav>
  )
}

export default TVShow