import React from 'react';
import { View, Text } from 'react-native';
import { CustomImage } from './CustomImage';
import { UserProfileProps } from './types';

export const UserProfile: React.FC<UserProfileProps> = ({ name, avatar, odometerReading }) => (
  <View className="flex flex-col items-center">
    <CustomImage
      uri={avatar}
      className="object-contain z-10 mt-0 max-w-full aspect-square w-[150px]"
    />
    <View className="mt-2.5 text-2xl text-center text-black">
      <Text>{name}</Text>
    </View>
    <View className="mt-9 text-2xl text-center text-black">
      <Text>ODO METER</Text>
    </View>
    <View className="mt-6 text-2xl text-center text-black">
      <Text>{odometerReading}</Text>
    </View>
  </View>
);