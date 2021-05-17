import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const HomerView = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Pagina Inicial</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}
        style={{
          height: 54,
          backgroundColor: 'orange',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          marginHorizontal: 16,
        }}>
        <Text> Ir para detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomerView;
