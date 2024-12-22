import React from 'react';
import { Image } from 'react-native';
import { ImageProps } from './types';

export const CustomImage: React.FC<ImageProps> = ({ uri, className }) => (
  <Image
    loading="lazy"
    source={{ uri }}
    className={className}
  />
);