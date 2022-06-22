import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import LoctionIcon from '../assets/icons/location2.svg'

export default SearchBar = () => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderRightButton={() => (
          <View style={styles.searchButton}>
           <Text>search</Text>
          </View>  
        )}  
      />
    </View>
  );
};


const styles=StyleSheet.create({
  searchButton:{
    backgroundColor:'white',
    flexDirection:'row',
    padding:9,
    borderRadius:30,
    marginRight:8
  }
});


