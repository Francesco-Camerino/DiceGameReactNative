/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { DiceLogic } from './classes/DiceLogic';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  let [dicePlayer, setDicePlayer] = useState(0);
  let [diceCpu, setDiceCpu] = useState(0);
  let [scorePlayer, setScorePlayer] = useState(0);
  let [scoreCpu, setScoreCpu] = useState(0);
  let diceLogic = new DiceLogic();

  const onPressPlay = () => {
    const result = diceLogic.getRandom();
    setDicePlayer(result[1]);
    setDiceCpu(result[2]);
    if (result[0] === 0) {
      setScorePlayer(scorePlayer + 1);
    } else if (result[0] === 1) {
      setScoreCpu(scoreCpu + 1);
    }
  }
  const onPressReset = () => {
    setScorePlayer(0);
    setScoreCpu(0);
    setDicePlayer(0);
    setDiceCpu(0);
  }
  return (
    <SafeAreaView>
      <Text>Dices</Text>
      <Text>Player</Text>
      <Text>{dicePlayer}</Text>
      <Text>Cpu</Text>
      <Text>{diceCpu}</Text>
      <Text>Points</Text>
      <Text>{scorePlayer}</Text>
      <Text>Cpu</Text>
      <Text>{scoreCpu}</Text>
      <Button title='play' onPress={onPressPlay} />
      <Button title='reset' onPress={onPressReset} />
    </SafeAreaView>
  );
};

export default App;
