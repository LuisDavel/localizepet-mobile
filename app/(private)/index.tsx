import { Text, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles'


export default function PageHome() {
  
  const { styles } = useStyles(stylesheet)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio ?</Text>
      <View style={styles.separator}  />
    </View>
  );
}

const stylesheet = createStyleSheet( theme => ({
  container:{
    flex: 1,
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
