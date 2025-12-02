import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Link } from 'expo-router'; 
import  useTheme  from "@/hooks/useTheme";

export default function Index() {
  const {toggleDarkMode}= useTheme();
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>am a G</Text>
      <Text>hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
    gap: 10
  },
  content: {
    fontSize: 22
  }
})