import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Image, Button, FlatList } from "react-native";

import { AuthContext } from "./Auth";
import { Data } from "./data";
export default function Home({ route, navigation }) {
  const { user } = useContext(AuthContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const currencyFormat = (num) => {
    return "Rp " + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  const updateHarga = (price) => {
    console.log("UpdatPrice : " + price);
    const temp = Number(price) + totalPrice;
    console.log(temp);
    setTotalPrice(temp);
    //? #Bonus (10 poin) -- HomeScreen.js --
    //? agar harga dapat update misal di tambah lebih dari 1 item atau lebih -->
  };
  const updatePrice = (harga) => {
    console.log("UpdatePrice : " + harga.harga);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 16,
        }}
      >
        <View>
          <Text>Selamat Datang,</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{user.name}</Text>
        </View>
        <View>
          <Text>Total Harga:</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {" "}
            {currencyFormat(totalPrice)}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          marginBottom: 20,
          paddingBottom: 60,

          flex: 1,
        }}
      >
        {/* //? #Soal No 2 (15 poin) -- Home.js -- Function Home
            //? Buatlah 1 komponen FlatList dengan input berasal dari data.js   
            //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal) -->

            //? #Soal No 3 (15 poin) -- HomeScreen.js --
             //? Buatlah styling komponen Flatlist, agar dapat tampil dengan baik di device untuk layouting bebas  --> */}
        <FlatList
          data={Data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ borderWidth: 1, margin: 15 }}>
              <Text>{item.title}</Text>
              <Image style={{ width: 100, height: 100 }} source={item.image} />
              <Text>{item.harga}</Text>
              <Text>{item.type}</Text>
              <Button
                title="beli"
                onPress={() => {
                  updateHarga(item.harga);
                }}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    width: 150,
    height: 220,
    margin: 5,
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 5,
    borderColor: "grey",
  },
});
