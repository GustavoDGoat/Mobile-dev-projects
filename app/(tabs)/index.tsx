import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Link } from 'expo-router'; 
import  useTheme, { type ColorScheme }  from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native";
import Header from "@/components/Header";
import Todoinput from "@/components/Todoinput";

export default function Index() {
  const {toggleDarkMode,colors}= useTheme();

  const homeStyles= createHomeStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background}style={homeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle}/>
      <SafeAreaView style={homeStyles.safeArea}>
        <Header/>
        <Todoinput/>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle the mode</Text>
        </TouchableOpacity>
        

      </SafeAreaView>
    </LinearGradient>
  );
}



  //initialize the query to get todos
  //const todos= useQuery(api.todos.getTodos);
  //console.log(todos);
