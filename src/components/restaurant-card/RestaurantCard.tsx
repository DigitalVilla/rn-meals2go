import { StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper'

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
}) => {
  const {
    name = 'Puyol Mexico',
    icon,
    photos = [
      'https://images.unsplash.com/photo-1623800330578-2cd67efaec75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3456&q=80',
    ],
    address = '123 Main St SW Calgary',
    openingHours,
    rating,
    isClosedTemporaly,
  } = restaurant

  return (
    <Card style={styles.container}>
      <Card.Title title={name} />
      <Text>Hello Card</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})

export type RestaurantCardProps = {
  restaurant?: Record<string, string>
  hideStatusBar?: boolean
}

export default RestaurantCard
