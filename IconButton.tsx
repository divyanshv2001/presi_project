import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { IconButtonProps } from './types';

export const IconButton: React.FC<IconButtonProps> = ({ imageSource, className, onPress }) => (
  <TouchableOpacity onPress={onPress} className={className}>
    <Image
      loading="lazy"
      source={{ uri: imageSource }}
      className={className}
    />
  </TouchableOpacity>
);
