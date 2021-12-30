import * as React from 'react'
import { Keyboard, StyleSheet, View, TextInput } from 'react-native'
import { Searchbar } from 'react-native-paper'

export const SearchBar: React.FC<SearchBarProps> = ({
  onClear,
  onSearch,
  placeholder = '',
  searchOnChars = 0,
}) => {
  const [search, setSearch] = React.useState('')
  const hasSearched = React.useRef(false)
  const elementRef = React.useRef<TextInput>(null)

  React.useEffect(() => {
    hasSearched.current = false

    if (searchOnChars && search.length >= searchOnChars) {
      handleSearch()
      elementRef.current && elementRef.current.focus()
    }
  }, [search])

  const handleSearch = () => {
    hasSearched.current = true
    onSearch(search)
  }

  const handleChange = (txt: string): void => {
    setSearch(txt)
  }

  const handleIconPress = (): void => {
    Keyboard.dismiss()
    !hasSearched.current && handleSearch()
  }
  const handleBlur = (): void => {
    !hasSearched.current && handleSearch()
  }

  return (
    <View style={styles.searchView}>
      <Searchbar
        style={styles.searchBarContainer}
        inputStyle={styles.searchInput}
        onChangeText={handleChange}
        onIconPress={handleIconPress}
        onBlur={handleBlur}
        placeholder={placeholder}
        value={search}
        ref={elementRef}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchView: {
    padding: 5,
  },
  searchInput: {},
  searchBarContainer: {
    borderRadius: 10,
  },
})

export type SearchBarProps = {
  onClear?: () => void
  onSearch: (string: string) => void
  placeholder?: string
  /**
   * Set a min number of characters to start automatic search
   * Default disabled
   */
  searchOnChars?: number
}

export default SearchBar
