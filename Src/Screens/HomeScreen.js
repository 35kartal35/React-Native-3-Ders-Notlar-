import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center',gap: 5, padding: 5,margin: 5, justifyContent: 'center', backgroundColor: '#fce2b1' }}>
      <Text style={{fontSize: 15, marginBottom: 20}}>Yavuz Sultan Selim Ortaokulu 7. Sınıf Ders Notları</Text>
      <Button
        title="Matematik"
        onPress={() => navigation.navigate('Matematik')}
      />
      <Button
        title="Fen Bilgisi"
        onPress={() => navigation.navigate('Fen Bilgisi')}
      />
      <Button
        title="Sosyal Bilgiler"
        onPress={() => navigation.navigate('Sosyal Bilgi')}
      />
      <Button
        title="Türkçe"
        onPress={() => navigation.navigate('Türkçe')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})