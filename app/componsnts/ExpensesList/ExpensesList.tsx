import { FlatList, Text } from "react-native"

const DATA = [
    {id: '1', name: 'Grocery', price: 12, date: '01.01.2026'},
    {id: '2', name: 'Water', price: 122, date: '02.01.2026'},
    {id: '3', name: 'Taxes', price: 1, date: '03.01.2026'},
    {id: '4', name: 'Light', price: 132, date: '04.01.2026'},
    {id: '5', name: 'Restaurant', price: 125, date: '05.01.2026'},
]
export const ExpensesList = () => {
    return <FlatList data={DATA} renderItem={({item}) => <Text>{item.name}</Text>} />
}

export default ExpensesList