import { View, Text, Pressable, Image } from 'react-native'
import { FoodProps } from '@/src/model/food'
import { Ionicons } from '@expo/vector-icons'
import { formatarMoedaReal } from '@/src/hooks/formatarMoeda'

export function CardHorizontalFood({food}:{food: FoodProps}) {
    const delivery = formatarMoedaReal(food.delivery)
    const price = formatarMoedaReal(food.price)
  return (
    <Pressable className='flex flex-col rounded-xl relative'>
        <Image source={{uri: food.image}}
        className='w-44 h-36 rounded-xl' />
        <View className='flex flex-row bg-neutral-900/90 gap-1 rounded-full absolute top-2 right-2 px-2 py-1
        items-center justify-center
        '>
            <Ionicons name='star' size={14} color="#ca8a04"/>
            <Text className='text-white text-sm'>{food.rating}</Text>
        </View>
        <Text className='text-green-700 font-medium text-lg'>{price}</Text>
        <Text className='text-black-700'>{food.name}</Text>
        <Text className='text-neutral-700 text-sm'>{food.time} - {delivery}</Text>
    </Pressable>
  )
}