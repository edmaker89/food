import { RestaurantProps } from '@/src/model/restaurant'
import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { RestaurantItem } from './item'

export function RestaurantsVerticalList() {
    const [restaurants, setRestaurants] = useState<RestaurantProps[]>([])
    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch("http://192.168.15.8:3000/restaurants")
            const data = await response.json()
            setRestaurants(data)
        }
        getRestaurants();
    }, [])
  return (
    <View className='px-4 gap-4 flex-1 w-full h-full mb-11 '>
        {restaurants.map(restaurant => (
          <RestaurantItem restaurant={restaurant} key={restaurant.id}/>
        ))}
    </View>
  )
}