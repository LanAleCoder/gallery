import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import stylesLayout from './Layout.styles';

const Layout = () => {
  return (
    <SafeAreaView>
      <View style={stylesLayout.searchBarContainer}>
        <TextInput style={stylesLayout.searchBar} />
      </View>
      <View style={stylesLayout.main}>
        <ScrollView
          horizontal={true}
          alwaysBounceHorizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View>
            <TouchableOpacity style={stylesLayout.firsObjectNavbar}>
              <Text style={stylesLayout.objectsNavbar}>Todo</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={stylesLayout.objectsNavbar}>
              <Text style={stylesLayout.objectsNavbar}>Tus pref...</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={stylesLayout.objectsNavbar}>
              <Text style={stylesLayout.objectsNavbar}>Diseños</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={stylesLayout.objectsNavbar}>
              <Text style={stylesLayout.objectsNavbar}>Paisajes</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={stylesLayout.objectsNavbar}>
              <Text style={stylesLayout.objectsNavbar}>Imagenes</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={stylesLayout.objectsNavbar}>
              <Text style={stylesLayout.objectsNavbar}>Linux</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={stylesLayout.objectsNavbar}>
              <Text style={stylesLayout.objectsNavbar}>Coding</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={stylesLayout.imagesContainer}>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/17/01/22/170122f3b6ce5029e239f45e9c669767.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/3b/14/0b/3b140bd68fd7e901c9c7fc47c94857a6.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/e6/10/a6/e610a699a1ae793402128d2d2a3c1edf.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/dc/e4/d7/dce4d77671c6e832df7022f181a79de4.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/dd/55/db/dd55dbe4e1a2cf7533297645942051f0.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/d4/31/8a/d4318abe3b1876aba66aac7690f04c28.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/e8/03/4a/e8034a1d71d172f8421346269003d084.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/c3/e3/35/c3e335114a371f0219f42ebb14c8da03.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/77/bc/fc/77bcfc574dbd58e47b8d71e7889e5a44.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/60/47/98/604798a5c093cd6aa84b5713e015db2d.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/39/13/79/3913791af1b4207ca802b57d12acdca9.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/d4/31/8a/d4318abe3b1876aba66aac7690f04c28.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/66/ee/af/66eeaf5e760eacea8cbbf01ae743b765.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/07/5d/af/075daf02fd0bcab6ab49aa1265e9f42c.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
        <View style={stylesLayout.imagesSubContainer}>
          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/91/ee/e3/91eee3445a73631136a6408d5a841269.jpg',
              }}
              style={stylesLayout.imagesLayout}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Layout;
