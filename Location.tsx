import * as React from "react";
import { View, Image, Text } from "react-native";

const LocationHeader: React.FC = () => {
  return (
    <View className="flex gap-5 justify-between px-6 py-3.5 w-full text-2xl text-white bg-cyan-900 rounded-3xl">
      <View className="flex gap-3">
        <Image
          loading="lazy"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/a361b97e70fbb76c265fbbb9be05d3125dff8a2e336fa47c29f8ddd42d7341e9?apiKey=00f807350c1e4340a958a661cf300ecb&" }}
          className="object-contain shrink-0 w-9 aspect-[0.75]"
        />
        <View className="my-auto basis-auto">
          <Text>Location ?</Text>
        </View>
      </View>
      <Image
        loading="lazy"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/72e53bf3440d27392beba7896047d4bf94b5638e5289f7c0af1329cd29b2b68d?apiKey=00f807350c1e4340a958a661cf300ecb&" }}
        className="object-contain shrink-0 my-auto w-6 aspect-[0.67]"
      />
    </View>
  );
};

export default LocationHeader;