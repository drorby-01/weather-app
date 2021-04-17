import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { IWheater } from '../redux/CountryWeather/CountryWeather.action'

const Favorites = () => {


    const state:Array<IWheater> = useSelector((state:any)=>state.FavoriteReducer.favorites)

    if(state.length === 0) return <div style={{height:"100vh",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center"}}> <h1>No Favorite Weather where found</h1></div>
    return (
        <div>
            {
                state.map((element:IWheater)=>(
                    <Card key={element.locationKey} className="p-2">
                        <Card.Body> City: {element.city}</Card.Body>
                        <Card.Body> Tempature: {element.tempatureValue} {element.tempatureUnit}</Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default Favorites
