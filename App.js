import React from 'react';
import { View, Button, StyleSheet, SafeAreaView, Platform, Alert } from 'react-native';
import axios from 'axios';

export default function LedYakmaScreen() {
  // HTTP isteğini yapacak fonksiyon
  const handleButtonPress = () => {
    axios.get('http://192.168.1.5/moveServo')
      .then(response => {
        console.log('Servo hareket ettirildi');
      })
      .catch(error => {
        console.error('HTTP isteği sırasında bir hata oluştu:', error);
      });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.box}>
          {/* Buton */}
          <Button title="Move Servo" onPress={handleButtonPress} color="#808080" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', // SafeAreaView arka plan rengini beyaz yapar
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Yatayda ortalar
    alignItems: 'center', // Dikeyde ortalar
    padding: 10,
  },
  box: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Android için gölge efekti
    shadowColor: '#000', // iOS için gölge rengi
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});