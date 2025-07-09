import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import logo from "../../Imagens/logo.png";
import folhaImage from "../../Imagens/folha.png";

export default function SplashScreen (){
  return (
    <View>
    <Image
    style={styles.imageLogo}
    source={logo}
    />


    <Image
    style={styles.imageFolha}
    source={folhaImage}
    />
  
    </View>
); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(0, 100%, 50%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLogo: {
    alignSelf: "center",
    marginTop: "70%",
    width: 281,
    height: 281,
  },
  imageFolha: {
    resizeMode: "contain",
    marginTop: "43%",
    marginLeft: "10%",
    width: 155,
    height: 155,
    bottom: 0,
  }
});
