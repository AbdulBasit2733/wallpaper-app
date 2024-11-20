import { View, Text, Button, Image, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import useWallpapers, { Wallpaper } from "@/hooks/useWallpapers";
import ImageCard from "@/components/ImageCard";
import { ThemedView } from "@/components/ThemedView";
import DownloadPicture from "@/components/BottomSheet";

const explore = () => {
  const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] =
    useState<null | Wallpaper>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{ uri: wallpapers[2]?.url ?? "" }}
          />
        }
      >
        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard
                    onPress={() => {
                      setSelectedWallpaper(item);
                    }}
                    wallpaper={item}
                  />
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 1)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard
                    onPress={() => {
                      setSelectedWallpaper(item);
                    }}
                    wallpaper={item}
                  />
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
      {selectedWallpaper && (
        <DownloadPicture
          onClose={() => setSelectedWallpaper(null)}
          wallpaper={selectedWallpaper}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    paddingVertical: 10,
  },
});

export default explore;
