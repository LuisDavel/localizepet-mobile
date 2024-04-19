import React from 'react';
import { Tabs } from 'expo-router';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Icons } from '@/libs/lucide/icons';
import { Pressable, TouchableWithoutFeedbackProps, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


function TabBarButtons(props: TouchableWithoutFeedbackProps) {
  const { styles } = useStyles(stylesheet)
  return (
    <Pressable onPress={props.onPress} style={styles.buttons}>{props.children}</Pressable>
  )
}

export default function TabLayout() {
  const insets = useSafeAreaInsets()
  const { styles, theme } = useStyles(stylesheet)
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.container,
        tabBarLabelStyle: styles.label,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarButton: (props) => <TabBarButtons {...props} />
        
      }}
      sceneContainerStyle={{
        paddingTop: insets.top,
        paddingLeft: 16,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => <Icons.home size={size} color={color} />,
          title: 'Inicio'
        }}
       />
      <Tabs.Screen
        name="pets-register"
        options={{
          tabBarIcon: ({ color, size }) => <Icons.paw size={size} color={color} />,
          title: 'Animais'
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarIcon: ({ color, size }) => <Icons.calendar size={size} color={color} />,
          title: 'Agenda'
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => <Icons.user size={size} color={color} />,
          title: 'Eu'
        }}
      />
    </Tabs>
  );
}

const stylesheet = createStyleSheet( theme => {
  const SIZE = 16;
  const SPACING = 10;
  return ({
    container: {
      height: 60,
      borderRadius: 10,
      
      position: 'absolute',
      bottom: SIZE,
      right: SIZE,
      left: SIZE,
    },
    label: {
      fontFamily: theme.fonts.primary.medium,
      fontSize: theme.fonts.sizes.sm,
      fontWeight: '400',

      paddingBottom: SPACING,
    },
    buttons: { 
      flex: 1, 
      paddingTop: SPACING,
      position: 'relative',
    }
  })
});
