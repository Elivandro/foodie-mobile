import { TextInput, Text, View } from 'react-native';
import { styles } from './textField.style.js';

export default function TextField(props)
{
    return <>
        { 
            props.label && <Text style={ styles.label }>
                { props.label }    
            </Text>
        }
        <TextInput
            style={ styles.input }
            onChangeText={ (value) => props.onChangeText(value) }
            value={ props.value }
            onBlur={ props.onBlur }
            keyboardType={ props.keyboardType }
            placeholder={ props.placeholder }
            secureTextEntry={ props.isPassword }
        />
    </>
}