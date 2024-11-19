import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const RootLayout = () => {
  return (
    <View>
      <View style={{backgroundColor:'black'}}>
        <Text style={{color:'white'}}>Go Back</Text>
      </View>
      <Slot />
    </View>
  );
};

export default RootLayout;
