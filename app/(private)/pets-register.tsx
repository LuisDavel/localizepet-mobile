import { StyleSheet, Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles'


export default function PageAnimalsRegister() {
  const { styles } = useStyles(stylesheet)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animais</Text>
      <View style={styles.separator}  />
    </View>
  );
}

const stylesheet = createStyleSheet( theme => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: theme.colors.muted,
    fontFamily: theme.fonts.primary.semiBold
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
}));
