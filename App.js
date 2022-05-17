/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Layout from './src/views/layout';
import stylesApp from './App.styles';

const App = () => {
  return (
    <SafeAreaView style={stylesApp.main}>
      <View>
        <Text style={stylesApp.textApp}>Gallery App</Text>
        <Layout />
      </View>
    </SafeAreaView>
  );
};
export default App;
