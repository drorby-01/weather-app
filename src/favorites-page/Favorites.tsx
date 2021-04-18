import React from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { IWheater, setCountryWeather } from '../redux/CountryWeather/CountryWeather.action'
import { Weather } from '../Weather'

const Favorites = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const goHome = (city:string)=>{
        console.log(city)
         Weather.getWather(city).then((data:IWheater)=>dispatch(setCountryWeather(data)))
         history.goBack()
    }

    

    const state:Array<IWheater> = useSelector((state:any)=>state.FavoriteReducer.favorites)

    if(state.length === 0) return <div style={{height:"100vh",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center"}}> <h1>No Favorite Weather where found</h1></div>
    return (
        <div>
            {
                state.map((element:IWheater)=>(
                    <Card key={element.locationKey} className="p-2" onClick={()=>goHome(element.city)}>
                        <Card.Body> City: {element.city}</Card.Body>
                        <Card.Body> Tempature: {element.tempatureValue} {element.tempatureUnit}</Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default Favorites
