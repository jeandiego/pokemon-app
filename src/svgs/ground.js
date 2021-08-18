import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = (props) => {
  const xml = `
  <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M83.051 173.956C83.008 173.956 82.978 173.914 82.992 173.873L123.28 71.0379C123.289 71.0129 123.312 70.9969 123.339 70.9969H174.346C174.372 70.9969 174.396 71.0139 174.405 71.0389L214.094 173.874C214.108 173.914 214.078 173.956 214.035 173.956H83.051ZM35.359 174.402C35.316 174.402 35.286 174.359 35.301 174.318L66.301 94.2249C66.31 94.2009 66.333 94.1849 66.359 94.1849H92.426C92.469 94.1849 92.499 94.2279 92.484 94.2679L62.475 174.361C62.466 174.385 62.443 174.402 62.417 174.402H35.359V174.402Z" fill="white"/>
  </svg>
  
`;

  return (
    <View>
      <SvgXml xml={xml} {...props} />
    </View>
  );
};

export default Svg;
