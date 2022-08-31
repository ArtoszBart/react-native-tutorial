import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  SafeAreaView, // iOS only?
  TouchableWithoutFeedback, 
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback, // Android only
  Button,
  Alert,
  Platform,
  Dimensions
 } from 'react-native';
 import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

export default function App() {
  
  console.log(useDimensions());
  console.log(useDeviceOrientation());

  const {landscape} = useDeviceOrientation();

  const handlePress = () => {
    console.log("Text clicked");
  };

  return (
    // <SafeAreaView style={styles.container}>
    // <SafeAreaView style={[styles.container, containerStyle]}>
    
    // START POSITIONING
    <SafeAreaView style={{
      backgroundColor: "white",
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center', // main axis (same as higher)
      alignItems: 'center', // stretch !!!
      flexWrap: 'wrap',
      alignContent: 'center', // only with flexWrap
    }}>
      
      <View style={{
        backgroundColor: 'dodgerblue',
        // width: 100,
        flexBasis: 100, // width or height (from flexDirection)
        height: 500,
        flexGrow: 1, // element fill free space (flexDirection)
        // flexShrink: 1, // if too large -> shrink to fit
      }}/>
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 400,
        alignSelf: 'flex-start'
      }}/>
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 300,
        position: 'relative', // relative default
        left: 20,
      }}/>
      <View style={{
        backgroundColor: 'gray',
        width: 100,
        height: 200,
      }}/>
      <View style={{
        backgroundColor: 'greenyellow',
        width: 100,
        height: 100,
      }}/>

      {/* END POSITIONING */}

      {/* <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: landscape ? '100%' : '30%',
      }}></View>

      <Text numberOfLines={1} onPress={handlePress}>Hello React Native - A really really long text. Now I wanna make this even longer and see what happens.</Text>
      
      <TouchableHighlight onPress={() => console.log("Image clicked")}>
        <Image 
          blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }}/>
      </TouchableHighlight>
        
      <TouchableNativeFeedback onPress={() => console.log("Box clicked")}>
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue"}}></View>
      </TouchableNativeFeedback>

      <Button
        color="yellow"
        title='Show alert' 
        // onPress={() => alert("Button tapped")}/>
        onPress={() => Alert.alert("My title", "My message", [
          { text: "Yes", onPress: () => console.log("Yes clicked") },
          { text: "No", onPress: () => console.log("No clicked") }
        ])}/>

      <Button
        color="darkgreen"
        title='Show prompt'
        onPress={() => Alert.prompt("My title", "My message", text => console.log(text))}/> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: 'orange' };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
