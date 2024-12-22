import React from 'react';
import { View, Image } from 'react-native';
import { NavigationBarItemProps } from './types';

const navigationItems: NavigationBarItemProps[] = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/a8010756a6146958b2051f5fac5729565e1778de01348d3f1e84dcf66adabadc?apiKey=00f807350c1e4340a958a661cf300ecb&" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/c591a8c26dfa9ce6923913a1a70084c0532113f0261f9417a1c922c563c1b2e0?apiKey=00f807350c1e4340a958a661cf300ecb&" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/15bfa2ba6a03563ecb0ab34e876c76a74841e771e288854a0190e5ce3f38a266?apiKey=00f807350c1e4340a958a661cf300ecb&" }
];

const NavigationBar = () => {
  return (
    <View className="flex gap-5 justify-between items-center px-8 py-4 mt-32 w-full bg-cyan-900 rounded-[34px]">
      {navigationItems.map((item, index) => (
        <Image
          key={index}
          source={{ uri: item.icon }}
          className="object-contain shrink-0 self-stretch my-auto aspect-[0.97] w-[33px]"
        />
      ))}
      <View className="flex shrink-0 self-stretch bg-blue-400 rounded-full h-[52px] w-[52px]" />
    </View>
  );
};

export default NavigationBar;