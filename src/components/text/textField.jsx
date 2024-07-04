import { TextInput, Text, View } from 'react-native';
import { styles } from './textField.style.js';

export default function TextBox(props)
{
    return <View>
        <Text style={ styles.label }>
            { props.label }    
        </Text>
        <TextInput
            style={ styles.input }
            onChangeText={ props.onChangeText }
            value={ props.value }
            onBlur={ props.onBlur }
            keyboardType={ props.keyboardType }
            placeholder={ props.placeholder }
            secureTextEntry={ props.isPassword }
        />
    </View>
}