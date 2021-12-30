import * as React from 'react'
import { Keyboard, StyleSheet, View } from 'react-native'
import { AppView, SearchBar } from './src/components'
import { RestaurantsList } from './src/screens'

export default function App() {
  const handleSearch = (search: string): void => {
    console.log({ search })
    Keyboard.dismiss()
  }

  return (
    <AppView>
      <View style={styles.search}>
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search..."
          searchOnChars={3}
        />
      </View>
      <View style={styles.body}>
        <RestaurantsList />
      </View>
    </AppView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 16,
  },
  text: {},
  search: {
    padding: 16,
  },
  searchInput: {
    borderColor: 'red',
  },
  searchBarContainer: {
    borderRadius: 10,
  },
})
