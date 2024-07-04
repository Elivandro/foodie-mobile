import { Text, TouchableOpacity } from 'react-native';
import { styles } from './button.style.js';

export default function Button(props)
{
    return <TouchableOpacity style={ styles.btn } onPress={ props.onPress }>
        <Text style={ styles.btnText }>
            { props.caption }
        </Text>
    </TouchableOpacity>
}