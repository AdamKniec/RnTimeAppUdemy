import { Text, View } from "react-native"

interface ExpensesSummaryProps {
    period: string
    totalPrice: number
}

const ExpensesSummary = (props: ExpensesSummaryProps) => {
    return <View>
        <Text>{props.period}</Text>
        <Text>{props.totalPrice}</Text>
    </View>
}

export default ExpensesSummary