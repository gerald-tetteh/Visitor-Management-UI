import React from "react";
import { View, StyleSheet, Image } from "react-native";

const ViewPagerComponent = ({ imgSrc, isCheckIn }) => {
  return (
    <View style={styles.viewPager}>
      <Image
        source={imgSrc}
        resizeMode="contain"
        style={styles.image}
        resizeMethod="scale"
      />
      {isCheckIn ? (
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            resizeMethod="scale"
            source={require("../../../assets/images/checkInSub.png")}
            style={styles.checkImage}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  image: {
    height: 200,
  },
  imageContainer: {
    position: "relative",
  },
  checkImage: {
    position: "absolute",
    height: 30,
    bottom: 50,
    right: -215,
  },
});

export default ViewPagerComponent;
