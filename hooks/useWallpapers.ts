import { View, Text } from "react-native";
import React from "react";
export interface Wallpaper {
  url: string;
  name: string;
}
const useWallpapers = (): Wallpaper[] => {
  return [
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/q48Lo3bTQCuPignfz27aaw",
      name: "heritage",
    },
    {
      url: "https://ideogram.ai/assets/image/lossless/response/gCsEqNrLRESI7DcFHRztEA",
      name: "Grenn",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/Rp2rkIO7T7yw7YoSh6AvVQ",
      name: "brade",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/KpgwUVBETBKRefPxe1R9bg",
      name: "progress",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/I1ZhMqW0SSut8ijiIWzjbw",
      name: "progress1",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/isPpLFx9Tg2dRpmv48no_w",
      name: "progress2",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/QWfpDpy3RgywwO1uyERitg",
      name: "progress2",
    },
  ];
};

export default useWallpapers;
