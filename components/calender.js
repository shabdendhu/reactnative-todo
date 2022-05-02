import { View, StyleSheet,SafeAreaView } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const Example = () => (
  <SafeAreaView style={styles.container}>
    <CalendarStrip
      scrollable
      style={{height:100, marginTop: 34,paddingTop:15, paddingBottom: 10}}
      calendarColor={'#3343CE'}
      calendarHeaderStyle={{color: 'white'}}
      dateNumberStyle={{color: 'white'}}
      dateNameStyle={{color: 'white'}}
      iconContainer={{flex: 0.1}}
    />
  </SafeAreaView>
);
export default Example

const styles = StyleSheet.create({
  container: { height:100 }
});