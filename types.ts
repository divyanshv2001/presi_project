export interface ImageProps {
    uri: string;
    className: string;
  }
  
  export interface IconButtonProps {
    imageSource: string;
    className?: string;
    onPress?: () => void;
  }
  
  export interface UserProfileProps {
    name: string;
    avatar: string;
    odometerReading: string;
  }