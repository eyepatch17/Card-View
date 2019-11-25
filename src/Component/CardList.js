import React from 'react'
import './Cardlist.css'

export  const Cardlist =(props)=><div className='card-list'><p>{props.children}</p><p>{props.id}</p> <img alt="monster" src={'https://robohash.org/'+props.id+'/?set=set3'} />  </div>

export default Cardlist