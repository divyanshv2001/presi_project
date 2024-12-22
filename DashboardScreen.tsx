import React from 'react';
import { View } from 'react-native';
import { CustomImage } from './CustomImage';
import { IconButton } from './IconButton';
import { UserProfile } from './UserProfile';

const navigationIcons = [
  { id: 'nav1', source: 'https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/a8010756a6146958b2051f5fac5729565e1778de01348d3f1e84dcf66adabadc?apiKey=00f807350c1e4340a958a661cf300ecb&', className: "object-contain aspect-[0.97] w-[33px]" },
  { id: 'nav2', source: 'https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/911639e424f919ae5a89e0b7cc74ba5cbe885fce84a28940c0e0c513b2aad2de?apiKey=00f807350c1e4340a958a661cf300ecb&', className: "object-contain shrink-0 self-stretch my-auto aspect-square w-[31px]" },
  { id: 'nav3', source: 'https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/c591a8c26dfa9ce6923913a1a70084c0532113f0261f9417a1c922c563c1b2e0?apiKey=00f807350c1e4340a958a661cf300ecb&', className: "object-contain shrink-0 self-stretch my-auto aspect-[0.96] w-[26px]" },
  { id: 'nav4', source: 'https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/15bfa2ba6a03563ecb0ab34e876c76a74841e771e288854a0190e5ce3f38a266?apiKey=00f807350c1e4340a958a661cf300ecb&', className: "object-contain shrink-0 self-stretch my-auto aspect-[2.43] w-[34px]" }
];

export const DashboardScreen: React.FC = () => {
  return (
    <View className="flex flex-col mx-auto w-full max-w-[480px]">
      <View className="flex overflow-hidden flex-col pt-7 w-full bg-white">
        <View className="flex flex-col justify-center self-end p-0.5 w-20 text-xl text-center text-black whitespace-nowrap bg-orange-600 rounded-[50px]">
          <View className="px-2 py-2 rounded-full border border-black border-solid bg-zinc-300">
            <Text>SOS</Text>
          </View>
        </View>

        <CustomImage
          uri="https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/9d91a3f39ad286a69f288c27c7c3067e6661dfec8cb24cc3a6ed66d3b6bfbc45?apiKey=00f807350c1e4340a958a661cf300ecb&"
          className="object-contain self-center w-full aspect-[1.53] max-w-[399px] rounded-[35px]"
        />

        <View className="flex flex-col items-center mt-10 w-full bg-blue-400 rounded-[34px]">
          <UserProfile
            name="Thor Odinson"
            avatar="https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/c54766aa8f83478be0937cf5af3c2764d71e8bda89d0db63daec328dbbbd6591?apiKey=00f807350c1e4340a958a661cf300ecb&"
            odometerReading="6574 km"
          />

          <View className="flex gap-px self-stretch py-2.5 pr-20 pl-7 mx-8 mt-9 bg-cyan-900 rounded-[56px]">
            <CustomImage
              uri="https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/fdb0adae8ddb23cf06b56e00ffc130dddf4903e103b7c16b211dd518d8e91bc0?apiKey=00f807350c1e4340a958a661cf300ecb&"
              className="object-contain shrink-0 self-start aspect-[1.31] w-[51px]"
            />
            <CustomImage
              uri="https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/c8c5c92d2800fbbb2118f2763431d7c421169721dde87ac9e7f0d6e22fa734e9?apiKey=00f807350c1e4340a958a661cf300ecb&"
              className="object-contain shrink-0 max-w-full aspect-[5.13] w-[210px]"
            />
          </View>

          <View className="flex gap-2.5 px-7 py-3.5 mt-12 w-full text-xl text-center text-white bg-cyan-900 max-w-[311px] rounded-[56px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <CustomImage
              uri="https://cdn.builder.io/api/v1/image/assets/00f807350c1e4340a958a661cf300ecb/8c68f94f3e082d4b9d66f7543a0fe5fff16c31a763b8c5a32dd700122db6109d?apiKey=00f807350c1e4340a958a661cf300ecb&"
              className="object-contain shrink-0 aspect-[1.05] w-[42px]"
            />
            <View className="grow shrink self-start mt-2 w-[198px]">
              <Text>PAIR WITH VECHICLE</Text>
            </View>
          </View>

          <View className="flex gap-5 justify-between items-center self-stretch px-7 py-4 mt-11 w-full bg-cyan-900 rounded-[34px]">
            {navigationIcons.map((icon) => (
              <IconButton
                key={icon.id}
                imageSource={icon.source}
                className={icon.className}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};