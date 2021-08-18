import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = (props) => {
  const xml = `
  <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M181.275 138.406L154.149 54.619H95.7014L111.438 101.734H66.5254L154.932 206.581L137.643 138.406H181.275Z" fill="white"/>
  </svg>
  
`;

  return (
    <View>
      <SvgXml xml={xml} {...props} />
    </View>
  );
};

export default Svg;
