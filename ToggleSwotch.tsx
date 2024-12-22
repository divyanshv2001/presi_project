import React from 'react';
import { View } from 'react-native';

const ToggleSwitch = () => {
  return (
    <View className="flex overflow-hidden flex-col justify-center items-end px-3.5 py-2 bg-blue-600 rounded-[100px]">
      <View className="flex shrink-0 bg-white shadow-sm h-[27px] rounded-[100px] w-[27px]" />
    </View>
  );
};

export default ToggleSwitch;