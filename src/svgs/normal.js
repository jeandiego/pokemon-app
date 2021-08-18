import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = (props) => {
  const xml = `
  <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M204.09 127.99C204.09 169.99 170.09 203.99 128.09 203.99C86.0901 203.99 52.0901 169.99 52.0901 127.99C52.0901 85.99 86.0901 51.99 128.09 51.99C170.09 51.99 204.09 85.99 204.09 127.99ZM176.016 127.65C176.016 154.153 154.519 175.65 128.016 175.65C101.513 175.65 80.1631 154.006 80.1631 127.65C80.1631 101.294 101.66 79.65 128.163 79.65C154.666 79.65 176.016 101.147 176.016 127.65Z" fill="white"/>
  </svg>
  
`;

  return (
    <View>
      <SvgXml xml={xml} {...props} />
    </View>
  );
};

export default Svg;
