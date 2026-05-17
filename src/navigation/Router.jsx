import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

// SCREEN LAMA
import Home from "../screens/Home";
import DetailMakanan from "../screens/DetailMakanan";
import Favorit from "../screens/Favorit";
import TambahMenu from "../screens/TambahMenu";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import SplashScreen from "../screens/SplashScreen";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

export default function Router() {

  const [kategori, setKategori] = useState("Semua");
  const [favorit, setFavorit] = useState([]);

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
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

      {/* AUTH FLOW */}
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />

      {/* MAIN APP */}
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
          />
        )}
      </Stack.Screen>

      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />

    </Stack.Navigator>
  );
}