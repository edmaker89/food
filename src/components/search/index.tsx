import { View, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const Search = () => {
  return (
    <View className='flex-row border border-slate-500 h-14 items-center gap-2 px-4 rounded-full bg-transparent'>
      <Feather name='search' size={24} color="#64748b" />
      <TextInput placeholder='Procure sua comida...' className='w-full flex-1 h-full bg-transparent'></TextInput>
    </View>
  )
}

export default Search