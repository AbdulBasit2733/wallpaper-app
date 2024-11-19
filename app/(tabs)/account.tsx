import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DownloadPicture from "@/components/BottomSheet";

const account = () => {
  const [pictureOpen, setPictureOpen] = useState(false);
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
        <Text>account</Text>
        <Button
          title="Open Bottom Sheet"
          onPress={() => {
            setPictureOpen(true);
          }}
        ></Button>
        {pictureOpen && <DownloadPicture onClose={() => setPictureOpen(false)}  />}
      </View>
    </SafeAreaView>
  );
};

export default account;
