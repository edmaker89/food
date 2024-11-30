import { RestaurantProps } from '@/src/model/restaurant'
import { View, Text, Pressable, Image } from 'react-native'

export function CarHorizontalRestaurant({restaurant}: {restaurant: RestaurantProps}) {
  return (
    <Pressable key={restaurant.id} className='flex flex-col items-center justify-center'
        onPress={() => console.log("clicou: " + restaurant.name)}
    >
        <Image className='w-20 h-20 rounded-full'
            source={{uri: restaurant.image}}
        />
        <Text className='text-sm mt-2 w-20 text-center leading-4' 
        numberOfLines={2}>
            {restaurant.name}
        </Text>
    </Pressable>
  )
}