import React from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const Svg = (props) => {
  const xml = `
  <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M80.1081 106.591L123.543 127.724L80.1081 148.809L36.6721 127.729L80.1081 106.591Z" fill="white"/>
  <path d="M175.292 106.591L131.857 127.724L175.292 148.809L218.728 127.729L175.292 106.591Z" fill="white"/>
  <path d="M175.292 52.227L131.857 75.089V119.855L132.187 119.691L132.804 119.384L175.28 98.248L175.279 98.247L175.292 98.241V52.227Z" fill="white"/>
  <path d="M175.292 203.173L131.857 180.311V135.545L132.187 135.709L132.804 136.016L175.28 157.152L175.279 157.153L175.292 157.159V203.173Z" fill="white"/>
  <path d="M80.1082 52.227L123.543 75.089V119.855L123.213 119.691L122.596 119.384L80.1201 98.248L80.1212 98.247L80.1082 98.241V52.227Z" fill="white"/>
  <path d="M80.1082 203.173L123.543 180.311V135.545L123.213 135.709L122.596 136.016L80.1201 157.152L80.1212 157.153L80.1082 157.159V203.173Z" fill="white"/>
  </svg>
`;

  return (
    <View>
      <SvgXml xml={xml} {...props} />
    </View>
  );
};

export default Svg;
