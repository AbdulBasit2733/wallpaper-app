import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const foryou = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Like" component={LikeScreen} />
    </Tab.Navigator>
  );
};

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
const LikeScreen = () => {
  return (
    <View>
      <Text>Liked Screen</Text>
    </View>
  );
};
const LibraryScreen = () => {
  return (
    <View>
      <Text>Library Screen</Text>
    </View>
  );
};

export default foryou;
