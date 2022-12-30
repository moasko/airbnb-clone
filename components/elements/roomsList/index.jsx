import React,{useState,useEffect} from 'react'
import { get_all_rooms } from '../../../backend/rooms'
import RoomCard from '../../cellules/roomCard'

function RoomsList() {
 const [rooms,setRooms]=useState([])

const allRoomsc= ()=>{
get_all_rooms()
.then(data=>{
    setRooms(data)
})
}

useEffect(()=>{
    allRoomsc()
},[])

  return (
    <div className="w-full 2xl:px-20 px-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6 mt-4 mb-5">
           {
            rooms.map((room)=>{
                return <RoomCard key={room.id} location={room.location} price={room.price} image={room.picture_url} />
            })
           }
          </div>
  )
}

export default RoomsList