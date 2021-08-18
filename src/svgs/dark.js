import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = (props) => {
  const xml = `
  <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M107.625 189.876C111.165 190.348 114.793 190.594 118.486 190.594C157.806 190.594 189.68 162.8 189.68 128.517C189.68 94.232 157.805 66.44 118.486 66.44C115.848 66.44 113.242 66.566 110.681 66.809C130.185 79.693 143.082 102.013 143.082 127.388C143.08 154.066 128.828 177.365 107.625 189.876ZM127.7 204.963C170.427 204.963 205.063 170.327 205.063 127.6C205.063 84.873 170.427 50.237 127.7 50.237C84.9732 50.237 50.3372 84.873 50.3372 127.6C50.3372 170.327 84.9732 204.963 127.7 204.963Z" fill="white"/>
  </svg>
`;

  return (
    <View>
      <SvgXml xml={xml} {...props} />
    </View>
  );
};

export default Svg;
