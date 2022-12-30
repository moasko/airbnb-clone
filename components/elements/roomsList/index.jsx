import React,{useState,useEffect} from 'react'
import { faker } from '@faker-js/faker/locale/fr';
import RoomCard from '../../cellules/roomCard'

function RoomsList() {
 const [rooms,setRooms]=useState([])

 function generateListing() {
    const listing = {
      id: faker.datatype.uuid(),
      name: faker.lorem.words(),
      picture_url: `${faker.image.city()}?random=${Math.round(Math.random() * 1000)}?width=271?height=257`,
      price: faker.commerce.price(),
      location: faker.address.city(),
    };
    return listing;
  }


useEffect(()=>{
    const createUsers = (numUsers = 10) => {
        return Array.from({length: numUsers}, generateListing);
    }
    setRooms(createUsers(30))
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