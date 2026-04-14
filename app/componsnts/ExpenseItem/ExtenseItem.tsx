import { Text, View } from "react-native";

interface ExpenseItemProps {
    name: string;
    price: number
}

// TODO MAKE SURE THIS COMPONENT IS USEFUL

const ExpenseItem = (props: ExpenseItemProps) => {
    return <View>
        <Text>{props.name}</Text>
        <Text>${props.price}</Text>
    </View>
}

export default ExpenseItem