import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { VictoryPie } from 'victory-native';

import { Svg } from 'react-native-svg';

function HomeScreen() {

  const sampleData = [
    { x: 1, y: 3, label: "3%", valor: 500 },
    { x: 2, y: 7, label: "7%", valor: 500 },
    { x: 3, y: 19, label: "19%", valor: 500 },
    { x: 4, y: 12, label: "12%", valor: 500 },
    { x: 5, y: 13, label: "13%", valor: 500 },
    { x: 6, y: 14, label: "14%", valor: 500 },
    { x: 7, y: 18, label: "18%", valor: 500 },
    { x: 8, y: 20, label: "20%", valor: 700 },
  ]
  const color = ["tomato", "orange", "gold", "cyan", "navy"];
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#EBECF0', paddingVertical: 10 }}>
      <View style={{ width: '90%', alignItems: 'center', backgroundColor: '#fff', borderColor: '#E7E9EC', borderWidth: 1, marginVertical: 5 }}>
        <View style={{ width: '100%', padding: 10 }}>
          <Text>Receitas</Text>
        </View>

        <VictoryPie
          colorScale={color}
          padAngle={1}
          innerRadius={60}
          labelRadius={({ innerRadius }) => innerRadius + 30}
          data={sampleData}

        />


        <View style={{ paddingHorizontal: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#D5D5D5' }}>
            <View style={{ backgroundColor: 'tomato', width: 10, height: 10, marginRight: 5, borderRadius:50 }}></View>
            <View style={{ flex: 2 ,}}><Text>1.001.001 - receitas</Text></View>
            <View style={{  alignItems: 'flex-end' }}><Text>300,00 - 10%</Text></View>
          </View>
        </View>

      </View>

      {/* <View style={{ marginHorizontal: 20, borderColor: '#E7E9EC', borderWidth: 1, backgroundColor: '#fff', width: '90%', marginVertical: 5 }}>


        <View style={{ paddingHorizontal: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#D5D5D5' }}>
            <View style={{ backgroundColor: 'tomato', width: 10, height: 10, marginRight: 5 }}></View>
            <View style={{ flex: 3 }}><Text>1.001.001 - receitas</Text></View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}><Text>300,00 - 10%</Text></View>
          </View>
        </View>
 

      </View> */}

    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Tab.Navigator style={{ paddingTop: 20 }}>
        <Tab.Screen name="Dashboard" component={HomeScreen} />
        <Tab.Screen name="relatorios" component={SettingsScreen} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
