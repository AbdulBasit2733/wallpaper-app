import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  useColorScheme,
  Pressable,
} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

const DownloadPicture = ({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) => {
  const theme = useColorScheme();
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={["95%"]}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image style={styles.image} source={{ uri: wallpaper.url }} />
        <View style={styles.topbar}>
          <Ionicons
            name="close"
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
          <View style={styles.topbarInner}>
            <Ionicons
              name="share"
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
            <Ionicons
              name="heart"
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
        </View>
        <DownloadButton />
      </BottomSheetView>
    </BottomSheet>
  );
};

const DownloadButton = () => {
  const theme = useColorScheme();
  return (
    <Pressable
      style={{
        backgroundColor: "black",
        borderRadius: 10,
        paddingVertical: 15,
        marginHorizontal: 40,
        justifyContent: "center",
        flexDirection: "row",
        gap: 5,
      }}
    >
      <Text style={{ fontSize: 20, color: "white", fontWeight: 600 }}>
        Download
      </Text>
      <Ionicons
        name="download"
        size={24}
        color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: "70%",
    borderRadius: 14,
  },
  topbar: {
    color: "white",
    position: "absolute",
    padding: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topbarInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textContainer: {
    width: "100%",
    marginTop: 20,
    padding: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 600,
    color: "black",
  },
});

export default DownloadPicture;
