import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

// SCREEN
import Home from "../screens/Home";
import DetailMakanan from "../screens/DetailMakanan";
import Favorit from "../screens/Favorit";
import TambahMenu from "../screens/TambahMenu";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import SplashScreen from "../screens/SplashScreen";
import Login from "../screens/Login";
import Register from "../screens/Register";
import EditMenu from "../screens/EditMenu";

const Stack = createStackNavigator();

export default function Router() {

  const [kategori, setKategori] = useState("Semua");
  const [favorit, setFavorit] = useState([]);

  // STATE PROFILE
  const [profile, setProfile] = useState({
    nama: "Muhammad Khilmi Lutfan Albab",
    email: "khilmi55@gmail.com",
    phone: "08536281234"
  });

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
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
      />

      <Stack.Screen
        name="Login"
        component={Login}
      />

      <Stack.Screen
        name="Register"
        component={Register}
      />

      {/* HOME */}
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

      {/* DETAIL */}
      <Stack.Screen name="Detail">
        {(props) => (
          <DetailMakanan
            {...props}
            favorit={favorit}
            setFavorit={setFavorit}
          />
        )}
      </Stack.Screen>

      {/* FAVORIT */}
      <Stack.Screen name="Favorit">
        {(props) => (
          <Favorit
            {...props}
            favorit={favorit}
            setFavorit={setFavorit}
          />
        )}
      </Stack.Screen>

      {/* TAMBAH MENU */}
      <Stack.Screen name="Tambah">
        {(props) => (
          <TambahMenu
            {...props}
          />
        )}
      </Stack.Screen>

      {/* PROFILE */}
      <Stack.Screen name="Profile">
        {(props) => (
          <Profile
            {...props}
            profile={profile}
          />
        )}
      </Stack.Screen>

      {/* EDIT PROFILE */}
      <Stack.Screen name="EditProfile">
        {(props) => (
          <EditProfile
            {...props}
            profile={profile}
            setProfile={setProfile}
          />
        )}
      </Stack.Screen>

      {/* EDIT MENU */}
      <Stack.Screen name="EditMenu">
        {(props) => (
          <EditMenu
            {...props}
          />
        )}
      </Stack.Screen>

    </Stack.Navigator>
  );
}