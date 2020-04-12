import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Landing from './Landing';
import Search from './Search';

export default function App() {
  const [currentScreen, switchScreen] = useState<string>('landing');

  function renderScreen() {
    if (currentScreen === 'search') {
      return <Search></Search>;
    } else {
      return <Landing handleSwitchScreen={switchScreen}></Landing>;
    }
  }
  return (
    <SafeAreaView style={{backgroundColor: 'rgb(248,248,248)', flex: 1}}>
      {renderScreen()}
    </SafeAreaView>
  );
}
