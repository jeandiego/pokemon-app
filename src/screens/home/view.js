import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, SafeAreaView, FlatList, Image } from 'react-native';

// import { Container } from './styles';

const HomerView = ({ pokemons }) => {
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#3de' }}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => {
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/female/25.png`;

          return (
            <>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={{ width: 100, height: 100 }}
              />
              <Text>{item.name}</Text>
            </>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default HomerView;
