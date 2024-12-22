import React from 'react';
import { View, Text } from 'react-native';
import ToggleItem from './ToggleItem';
import SpeedWarning from './SpeedWarning';
import NavigationBar from './NavigationBar';

const Settings = () => {
  const notificationItems = [
    { title: 'Incoming calls', icon: 'https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/dadf53c4ec9073a10c3756165d5dddfd2152cdd5afc8bfe558e80462827b01d2?apiKey=00f807350c1e4340a958a661cf300ecb&' },
    { title: 'Messages', icon: 'https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/c2c6242c3dcc09ecdc1ba46c7b8a5646d36a3caff1f660d32433fee7edf63170?apiKey=00f807350c1e4340a958a661cf300ecb&' },
    { title: 'WhatsApp Calls', icon: 'https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/05896a9f9af9b66fd0a6b752fcfa6145e109ae285baa7b2b321f0bb2c21f95a0?apiKey=00f807350c1e4340a958a661cf300ecb&' },
    { title: 'WhatsApp Text', icon: 'https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/6365c73bbc40b573ce2901d8e8e927b3854b57a1477d04d2367601c505a2b15f?apiKey=00f807350c1e4340a958a661cf300ecb&' }
  ];

  return (
    <View className="flex overflow-hidden flex-col pt-16 mx-auto w-full bg-white max-w-[480px]">
      <View className="px-16 pt-4 pb-8 w-full text-3xl text-center text-white whitespace-nowrap bg-cyan-900 rounded-[34px]">
        <Text>SETTINGS</Text>
      </View>
      
      <View className="flex flex-col pt-4 mt-5 w-full bg-cyan-900 rounded-[34px]">
        <View className="flex gap-5 justify-between self-center w-full max-w-[390px]">
          <View className="my-auto text-2xl leading-none text-center text-white">
            <Text>Notifications</Text>
          </View>
          <ToggleSwitch />
        </View>
        
        {notificationItems.map((item, index) => (
          <ToggleItem
            key={index}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </View>

      <SpeedWarning speed="50 km/hr" />
      <NavigationBar />
    </View>
  );
};

export default Settings;