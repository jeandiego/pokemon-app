import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = (props) => {
  const xml = `
  <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M128.833 210.928C99.5987 210.592 77.0597 190.845 71.4507 165.126C68.9147 153.497 70.0177 142.132 74.2647 130.986C80.7667 113.923 89.3377 97.933 99.0347 82.521C107.515 69.044 116.146 55.662 124.703 42.233C125.688 40.687 126.631 39.113 127.584 37.546C128.079 36.732 128.556 36.74 129.046 37.542C129.176 37.755 129.309 37.968 129.438 38.181C138.598 53.3 148.577 67.9 157.87 82.934C166.297 96.566 174.121 110.513 180.12 125.416C182.487 131.295 184.878 137.16 185.792 143.5C188.314 160.979 184.111 176.648 172.763 190.169C162.219 202.731 148.545 209.449 132.189 210.696C130.86 210.797 129.53 210.88 128.833 210.928ZM125.098 192.58C131.084 192.609 136.741 191.328 141.89 188.323C151.963 182.444 157.749 173.821 158.233 161.967C158.269 161.088 158.616 159.588 157.929 159.439C156.825 159.2 156.75 160.735 156.295 161.52C150.493 171.541 141.822 177.115 130.279 177.572C112.325 178.282 98.1537 163.613 98.5537 146.474C98.5697 145.807 98.6037 145.14 98.5897 144.475C98.5847 144.254 98.5177 143.933 98.3657 143.837C97.9877 143.598 97.7757 143.959 97.5807 144.209C97.3247 144.537 97.0827 144.879 96.8687 145.236C90.7977 155.38 90.2297 165.798 96.1287 176.089C102.474 187.16 112.525 192.218 125.098 192.58Z" fill="#FEFEFE"/>
  </svg>
  
`;

  return (
    <View>
      <SvgXml xml={xml} {...props} />
    </View>
  );
};

export default Svg;
