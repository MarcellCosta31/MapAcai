import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import Logo from "../../Imagens/logo.png";
import Cliente from "../../Imagens/logo_comprador.png";
import Vendedor from "../../Imagens/logo_vendedor.png";
import folhaImage from "../../Imagens/folha.png";


export default function Cliente_Vendedor() {
  return (
    <View>

      <Image
      style={styles.logo}
      source={Logo}
      />
      <Text 
      style={styles.text}
      >Você é o que?</Text>
      <View style={styles.cards}>
        <TouchableOpacity style={styles.cardCliente}>
          <Image 
          source={Cliente}
          />
          <Text style={styles.text2}>Cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardVendedor}>
          <Image 
          source={Vendedor}
          style={styles.imgVendedor}
          />
          <Text style={styles.text2}>Vendedor</Text>
        </TouchableOpacity>
      </View>
      <Text 
      style={styles.text3}
      >Você pode mudar depois</Text>

      <Image
          style={styles.imageFolha}
          source={folhaImage}
          />
     
    </View>


      

    
); 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "fff",
    flex: 1,
    alignItems: "center",
  },
  logo: {
    marginTop: 30,
    height: 201,
    width: 201,
    alignSelf: "center",
  },
  text: {
    fontSize: 32,
    marginBottom: 70,
    alignSelf: "center",

  },
  cards: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignSelf: "center",

  },
  cardCliente: {
    backgroundColor: "hsl(270, 73%, 35%)",
    borderRadius: 20,
    textAlign: "center",
    alignContent: "center",
    paddingHorizontal:20,
    paddingVertical:10,
  },
  cardVendedor: {
    backgroundColor: "hsl(270, 73%, 35%)",
    borderRadius: 20,
    textAlign: "center",
    alignContent: "center",
    paddingHorizontal:20,
    paddingVertical:10,
  },
  imgVendedor:{
    margin: 10,
  },
  text2:{
    fontSize: 20,
    alignSelf: "center",
    color: "#fff",
  },
  text3: {
    fontSize: 20,
    marginTop:70,
    alignSelf: "center",

  },
  imageFolha: {
    resizeMode: "contain",
    marginTop: "29%",
    marginLeft: "10%",
    width: 155,
    height: 155,
    bottom: 0,
  }
  
});
