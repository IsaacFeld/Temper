import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import Button from "@/components/Button"
export default function Index() {
  const theme = useColorScheme();
  const styles = makeStyles(theme)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: (theme === 'light' ? Colors.light.background : Colors.dark.background),
      }}
    >
      <View style={{
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        alignItems: "center"
      }}>
      <Text  
      style={styles.title}> Temper</Text>
      <Button></Button>
      </View>
   

    </View>
  );
}


const makeStyles =(theme: 'light'  | 'dark' | null  | undefined) => StyleSheet.create({
  title: {
    color: theme != null  ? Colors[theme].text : "#b0b0b0",
    fontSize: 48,
    marginTop: 40,
    fontFamily: 'CherryBomb'
  },
  buttonContainer: {
    backgroundColor: '#F0C808'
  }
})