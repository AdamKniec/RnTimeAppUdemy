import GlobalStyles from "@/app/consts/theme";
import { StyleSheet, Text, View } from "react-native";

interface ExpensesSummaryProps {
  period: string;
  totalPrice: number;
}

const ExpensesSummary = (props: ExpensesSummaryProps) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.period}>{props.period}</Text>
      <Text style={Styles.sum}>${props.totalPrice}</Text>
    </View>
  );
};

export default ExpensesSummary;

const Styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
