import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default HeaderTabs = () => {
  const [activeBtu, setActiveBut] = useState('Delivery');
 //useEffect(() => console.log(activeBtu), [activeBtu]);
  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        activeBut={activeBtu}
        setActiveButton={setActiveBut}
      />
      <HeaderButton
        text="Pickup"
        activeBut={activeBtu}
        setActiveButton={setActiveBut}
      />
    </View>
  );
};

HeaderButton = props => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeBut==props.text  ? 'black' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => props.setActiveButton(props.text)}>
      <Text
        style={{
          color: props.activeBut==props.text ? 'white' : 'black',
          fontSize: 15,
          fontWeight: '700',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
