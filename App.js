import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { VictoryPie } from 'victory-native';

import { Svg } from 'react-native-svg';

function HomeScreen() {

  const saldoBancario = [
    { id: 1, banco: 'Santander', imagem: 'https://play-lh.googleusercontent.com/g_QDzrOlw8Belx8qb47fUu0MPL6AVFzDdbOz_NJZYQDNLveHYxwiUoe09Wvkxf-_548q=w240-h480-rw', saldo: '13.000,00' },
    { id: 2, banco: 'Banco do Brasil', imagem: 'https://play-lh.googleusercontent.com/1-aNhsSPNqiVluwNGZar_7F5PbQ4u1zteuJ1jumnArhe8bfYHHaVwu4aVOF5-NAmLaA=w240-h480-rw', saldo: '5.000,00' },
    { id: 3, banco: 'Caixa Economica', imagem: 'https://play-lh.googleusercontent.com/ubV0x2kGJIEe10shxuFnH9Cy21OgHARwVUZ89nyE0YOZN9c25ov_dyHdk1rMgbPvoDI=w240-h480-rw', saldo: '500,00' },
    { id: 4, banco: 'Itau', imagem: 'https://play-lh.googleusercontent.com/gRcutACE4XkEHmxcbUdOehxpTbp_LjmwJ6qIEbqfD34oh9feTNhTnlDgf97HEZ9eGKY=w240-h480-rw', saldo: '500,00' },
    { id: 5, banco: 'Bradesco', imagem: 'https://play-lh.googleusercontent.com/ReQEaxm44OuduIlJEVO_-xs9iZXSyRNdzGKrONYoLSgAdOzyhPKTb1xuuoPXK6tABm0=s48-rw', saldo: '500,00' },


  ]

  const mappedDataSaldoBancario = saldoBancario.map(item => (

    <View key={item.id} style={{ marginTop: 10, flexDirection:'row', alignItems:'center' }}>
    <Image
      style={{
        width: 25,
        height: 25,
        marginRight:5,
        borderRadius:5
      }}
      source={{
        uri: item.imagem,
      }}
    />
    <View style={{flex:1}}>
    <Text>{item.banco}</Text>
    </View>
   
    <Text>{item.saldo}</Text>


  </View>

  ));

  const color = [
    "tomato",
    "orange",
    "gold",
    "cyan",
    "red",
    "green",
    "yellow",
    "purple",
    "pink",
    "brown",
    "gray",
    "black",
    "white",
    "silver",
    "maroon",
    "olive",
    "lime",
    "teal",
    "tomato",
    "orange",
    "gold",
    "cyan",
    "red",
    "green",
    "yellow",
    "purple",
    "pink",
    "brown",
    "gray",
    "black",
    "white",
    "silver",
    "maroon",
    "olive",
    "lime",
    "teal",
  ];


  const dataReceita = [
    { x: 1, y: 50, label: "50%", valor: '5.000,35', descricao: '1.01.001 - Taxa de condominio' },
    { x: 2, y: 10.25, label: "10,25%", valor: '1.250,00', descricao: '1.01.002 - Taxa Extra' },
    { x: 3, y: 10.25, label: "10,25%", valor: '1.250,00', descricao: '1.01.003 - Reserva de Espaço' },
    { x: 4, y: 10, label: "10%", valor: '1.000,00', descricao: '1.01.004 - Taxa Lavanderia' },
    { x: 5, y: 15, label: "15%", valor: '1.500,00', descricao: '1.01.004 - Fundo de Reserva' },

  ]

  const mappedData = dataReceita.map(item => (

    <View key={item.x} style={{ paddingHorizontal: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#D5D5D5' }}>
        <View style={{ backgroundColor: color[item.x - 1], width: 10, height: 10, marginRight: 5, borderRadius: 50 }}></View>
        <View style={{ flex: 2, }}><Text>{item.descricao}</Text></View>
        <View style={{ alignItems: 'flex-end' }}><Text>{item.valor} - {item.y}% </Text></View>
      </View>
    </View>

  ));


  const dataDespesa = [
    { x: 1, y: 25, label: "25%", valor: '25.00,00', descricao: '2.01 - Despesas com Pessoas' },
    { x: 2, y: 5, label: "5%", valor: '5.000,00', descricao: '2.02 - Despesas com Portaria' },
    { x: 3, y: 2, label: "2%", valor: '2.000,00', descricao: '2.03 - Fornecedores' },
    { x: 4, y: 3, label: "3%", valor: '4.000,00', descricao: '2.04 - Despesas Diversas' },
    { x: 5, y: 10.25, label: "10,25%", valor: '1.250,00', descricao: '2.05 - Reformas' },
    { x: 6, y: 10.25, label: "10,25%", valor: '1.250,00', descricao: '2.06 - Juridico' },
    { x: 7, y: 30, label: "30%", valor: '3.000,00', descricao: '2.07 - Repasses Bancários' },


  ]
  const mappedDataDespesa = dataDespesa.map(item => (

    <View key={item.x} style={{ paddingHorizontal: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#D5D5D5' }}>
        <View style={{ backgroundColor: color[item.x - 1], width: 10, height: 10, marginRight: 5, borderRadius: 50 }}></View>
        <View style={{ flex: 2, }}><Text>{item.descricao}</Text></View>
        <View style={{ alignItems: 'flex-end' }}><Text>{item.valor} - {item.y}% </Text></View>
      </View>
    </View>

  ));

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#EBECF0', paddingVertical: 10 }}>

        <View style={{ width: '90%', alignItems: 'center', backgroundColor: '#fff', borderColor: '#E7E9EC', borderWidth: 1, marginVertical: 5, borderRadius: 10 }}>
          <View style={{ width: '100%', padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Receitas</Text>
          </View>

          <VictoryPie
            colorScale={color}
            padAngle={1}
            innerRadius={60}
            labelRadius={({ innerRadius }) => innerRadius + 30}
            data={dataReceita}
            style={{
              labels: { fill: "white", fontWeight: 'bold', fontSize: 15 },
              parent: {
                ...styles.shadow
              },
            }}

          />
          {mappedData}
        </View>



        <View style={{ width: '90%', alignItems: 'center', backgroundColor: '#fff', borderColor: '#E7E9EC', borderWidth: 1, marginVertical: 5, borderRadius: 10 }}>
          <View style={{ width: '100%', padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Despesas</Text>
          </View>

          <VictoryPie
            colorScale={color}
            padAngle={1}
            innerRadius={60}
            labelRadius={({ innerRadius }) => innerRadius + 30}
            data={dataDespesa}
            style={{
              labels: { fill: "white", fontWeight: 'bold', fontSize: 15 },
              parent: {
                ...styles.shadow
              },
            }}

          />
          {mappedDataDespesa}


        </View>

        <View style={{ marginHorizontal: 20, padding: 10, borderColor: '#E7E9EC', borderWidth: 1, backgroundColor: '#fff', width: '90%', marginVertical: 5, borderRadius: 10 }}>

          <View style={{ width: '100%' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Saldo Bancário</Text>
          </View>

          {mappedDataSaldoBancario}

        </View>

      </View>
    </ScrollView>
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

      <Tab.Navigator style={{ paddingTop: 60 }}>
        <Tab.Screen name="Dashboard" component={HomeScreen} />
        <Tab.Screen name="relatorios" component={SettingsScreen} />
      </Tab.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  }
})