import * as React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

export const AppView: React.FC<SafeAreaProps> = ({
  bgColor,
  children,
  hideStatusBar,
}) => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
          backgroundColor: bgColor ? bgColor : '#fff',
        }}
      >
        {children}
      </SafeAreaView>
      <ExpoStatusBar style="auto" hidden={hideStatusBar} />
    </PaperProvider>
  )
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#05a',
  },
}

export default AppView

export type SafeAreaProps = {
  bgColor?: string
  hideStatusBar?: boolean
}
