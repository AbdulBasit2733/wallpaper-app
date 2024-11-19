import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const explore = () => {
  return (
    <View>
      <Text>explore</Text>
      <Link href={"/AccountInfo"}>
        <Text>Account Info</Text>
      </Link>
    </View>
  );
};

export default explore;
