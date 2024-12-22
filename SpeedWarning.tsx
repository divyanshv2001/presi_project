import React from 'react';
import { View, Text, Image } from 'react-native';
import { SpeedWarningProps } from './types';
import ToggleSwitch from './ToggleSwitch';

const SpeedWarning: React.FC<SpeedWarningProps> = ({ speed }) => {
  return (
    <View className="flex flex-col pt-4 mt-5 w-full bg-cyan-900 rounded-[34px]">
      <View className="flex gap-5 justify-between self-center w-full max-w-[390px]">
        <View className="self-start mt-3 text-2xl leading-none text-center text-white">
          <Text>Speed Warning</Text>
        </View>
        <ToggleSwitch />
      </View>
      <View className="flex gap-2 px-7 py-4 mt-5 w-full bg-blue-400 rounded-[34px]">
        <View className="flex flex-auto gap-1.5 items-center">
          <View className="flex overflow-hidden flex-col flex-1 shrink justify-center self-stretch my-auto rounded-2xl basis-0">
            <View className="flex w-full bg-blue-600 rounded-2xl min-h-[16px]" />
          </View>
          <View className="flex shrink-0 self-stretch my-auto w-1 h-11 fill-black" />
          <View className="flex relative flex-col flex-1 shrink justify-center self-stretch my-auto basis-0">
            <View className="flex z-0 w-full bg-white rounded-sm min-h-[16px]" />
            <Image
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/e7d7e458e0468461e66362e93bfac108aa5912bcfb5d474f15282df0d9ef315b?apiKey=00f807350c1e4340a958a661cf300ecb&" }}
              className="object-contain absolute right-1 top-2/4 z-0 w-1 h-1 -translate-y-2/4 aspect-square translate-x-[0%]"
            />
          </View>
        </View>
        <View className="my-auto text-base font-bold leading-none text-center text-black">
          <Text>{speed}</Text>
        </View>
      </View>
    </View>
  );
};

export default SpeedWarning;