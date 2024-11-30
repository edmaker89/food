import { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { RestaurantProps } from '@/src/model/restaurant'
import { CarHorizontalRestaurant } from './restaurant'

export function Restaurants() {
    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([])
    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch("http://192.168.15.8:3000/restaurants")
            const data = await response.json()
            console.log(data)
            setRestaurants(data)
        }
        getRestaurants();
    }, [])
  return (
    <FlatList
        data={restaurants}
        renderItem={({item}) => <CarHorizontalRestaurant restaurant={item}/>}
        horizontal={true}
        contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight:16}}
        showsHorizontalScrollIndicator={false}
    />
  )
}