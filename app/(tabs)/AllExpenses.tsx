import { StyleSheet, View } from "react-native";
import ExpensesList from "../componsnts/ExpensesList/ExpensesList";
import GlobalStyles from "../consts/theme";

const AllExpense = () => {
  return (
    <View style={Styles.container}>
      <ExpensesList />
    </View>
  );
};

export default AllExpense;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
