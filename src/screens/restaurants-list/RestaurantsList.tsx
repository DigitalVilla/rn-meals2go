import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { RestaurantCard } from '../../components'

export function RestaurantsList() {
  return (
    <View style={styles.container}>
      <RestaurantCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})

export default RestaurantsList
