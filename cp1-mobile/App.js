import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormComponent from './components/FormComponent';

export default function App() {
  return (
    
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Open up App.js to start working on your </Text>
        <FormComponent/>
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
