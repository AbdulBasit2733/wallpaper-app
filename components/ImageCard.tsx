import {
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
  Pressable,
} from "react-native";
import React from "react";
import { Wallpaper } from "@/hooks/useWallpapers";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const ImageCard = ({
  wallpaper,
  onPress,
}: {
  wallpaper: Wallpaper;
  onPress: () => void;
}) => {
  const theme = useColorScheme();
  return (
    <Pressable onPress={onPress}>
      <View>
        <Image source={{ uri: wallpaper.url }} style={styles.image} />
        <View style={styles.labelContainer}>
          <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
          <View style={styles.iconContainer}>
            <Ionicons
              name="heart"
              size={18}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: 220,
    borderRadius: 20,
  },
  label: {
    color: "white",
  },
  labelContainer: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    position: "absolute",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default ImageCard;
