import React from 'react'


interface Movies {
    [index: string]: Movie;
  }
  
   interface Movie {
    name:string,
    img:string,
    date:number|String,
    evaluation:string|number,
    Availablenow ?:boolean|string
  }
function Movies(props:Movie) {
    // let user:any
    // if(user.movie.Availablenow=="false" console.log("soon!");
    
    // else("aleadey exisiest");
    
    
  return (
    <nav className='movie1'>
        <img src= {props.img}></img>
        {props.name}
        {props.date}
        {(props.Availablenow )?'Available':'coming soon'}
        {/* <button>Click Here</button> */}
       
    </nav>
    
    
  


   
  )
}

export default Movies