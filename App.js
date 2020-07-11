import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.savedComponent}>
              <Text style={styles.text}> Component to be saved </Text>
              <Image
                source={{
                  uri:
                    'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=75&w=126',
                }}
                style={styles.image}
              />
              <Text style={styles.text}>Some random text, also saved</Text>
            </View>

            <View style={styles.row}>
              <TouchableOpacity style={styles.button}>
                <Text>Share</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    marginTop: 100,
    alignItems: 'center',
  },
  savedComponent: {
    backgroundColor: 'white',
    marginBottom: 30,
  },
  text: {
    textAlign: 'center',
  },
  image: {
    width: 252,
    height: 150,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 5,
  },
  row: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '75%',
  },
  button: {
    backgroundColor: '#ad4fcc',
    padding: 15,
    paddingHorizontal: 35,
    borderRadius: 5,
  },
});

export default App;
