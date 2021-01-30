import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../../utils/colors";

const ViewPagerComponent = ({ imgSrc }) => {
  return (
    <View style={styles.viewPager}>
      <Image source={imgSrc} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    alignItems: "center",
    justifyContent: "center"
  },
});

export default ViewPagerComponent;
