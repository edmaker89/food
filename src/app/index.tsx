import { Text, View, ScrollView } from "react-native";
import Header from "../components/header";
import Constants from "expo-constants";
import Banner from "../components/banner";
import Search from "../components/search";
import Section from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantsVerticalList } from "../components/list";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full mt-2 px-4">
        <Header />
        <Banner />
        <Search />
      </View>
      <Section
        name="Comidas em alta"
        label="Veja mais"
        action={() => console.log("Clicou no veja mais comidas em alta")}
        size="text-2xl"
      />
      <TrendingFoods />
      <Section
        name="Famosos no DevFood"
        label="Veja todos"
        action={() => console.log("Clicou no veja todas devfood")}
        size="text-xl"
      />
      <Restaurants />
      <Section
        name="Restaurantes"
        label="Veja todos"
        action={() => console.log("Clicou no restaurantes")}
        size="text-xl"
      />
      <RestaurantsVerticalList/>
    </ScrollView>
  );
}