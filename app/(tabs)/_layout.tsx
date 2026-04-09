import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";
import GlobalStyles from '../consts/theme';


export default function TabsLayout() {
  return (
    <Tabs  screenOptions={{
        headerStyle:{
            backgroundColor: GlobalStyles.colors.primary500
        },
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor:GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500
      }}>
      <Tabs.Screen
        name="AllExpenses"
        options={{ 
            title: "All Expenses",
            tabBarIcon: ({color, size}) => {
                return <Ionicons name='calendar' size={size} color={color}/>
            }
         }}
      />
      <Tabs.Screen
        name="RecentExpenses"
        options={{ 
            title: "Recent Expenses", 
            tabBarIcon: ({color, size}) => {
                return <Ionicons name='hourglass' size={size} color={color}/>
            }
        }}
      />
      <Tabs.Screen
        name="index"
        options={{ title: "Index", href: null  }}
      />
    </Tabs>
  );
}