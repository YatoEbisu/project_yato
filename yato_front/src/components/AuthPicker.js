import React from 'react'
import { View, TextInput, Picker, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

// export default props => {
//     return (
//         <View style={[styles.container, props.style]}>
//             <Icon name={props.icon} size={20} style={styles.icon} />
//             <TextInput {...props} style={styles.input} />
//         </View>
//     )
// }

export default  props => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={[styles.container, props.style]}>
        <Icon name={props.icon} size={20} style={styles.icon} />
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        backgroundColor: '#EEE',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        color: '#333',
        marginLeft: 20
    },
    input: {
        marginLeft: 20,
        width: '70%'
    }
})