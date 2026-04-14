import { FlatList, Text } from "react-native"

export const ExpensesList = () => {
    return <FlatList data={[]} renderItem={item => <Text>1</Text>} />
}

export default ExpensesList