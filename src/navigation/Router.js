import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import DetailMakanan from "../screens/DetailMakanan";
import Favorit from "../screens/Favorit";
import TambahMenu from "../screens/TambahMenu";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

export default function Router({ setKeyboardVisible }) {

    const [kategori, setKategori] = useState("Semua");
    const [favorit, setFavorit] = useState([]);

    return (
       <Stack.Navigator
  screenOptions={{
    headerShown: false,
    animationEnabled: true,
    cardStyleInterpolator: ({ current }) => ({
      cardStyle: {
        opacity: current.progress,
      },
    }),
  }}
>

  <Stack.Screen name="Home">
    {(props) => (
      <Home
        {...props}
        kategori={kategori}
        setKategori={setKategori}
        favorit={favorit}
        setFavorit={setFavorit}
      />
    )}
  </Stack.Screen>

  <Stack.Screen name="Detail">
    {(props) => (
      <DetailMakanan
        {...props}
        favorit={favorit}
        setFavorit={setFavorit}
      />
    )}
  </Stack.Screen>

  <Stack.Screen name="Favorit">
    {(props) => (
      <Favorit
        {...props}
        favorit={favorit}
        setFavorit={setFavorit}
      />
    )}
  </Stack.Screen>

  <Stack.Screen name="Tambah">
    {(props) => (
      <TambahMenu
        {...props}
        setKeyboardVisible={setKeyboardVisible}
      />
    )}
  </Stack.Screen>

  <Stack.Screen name="Profile" component={Profile} />

</Stack.Navigator>
    );
}