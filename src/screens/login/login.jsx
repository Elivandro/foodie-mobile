import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useTogglePasswordVisibility } from  '../../hooks/useTogglePasswordVisibility';
import { styles } from "./login.style.js";

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/header/header.jsx';
import Button from "../../components/buttons/button.jsx";
import TextBox from "../../components/text/textField.jsx";

export default function Login({ navigation })
{
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return <>
        <View style={ styles.container }>
                <ScrollView>
                    <Header text="Acesse sua conta"/>
                    
                    <View style={ styles.formGroup }>

                        <View style={ styles.form }>
                            <TextBox
                                label="Email"
                                onChangeText={ (value) => setEmail(value) }
                                value={ email }
                            />
                        </View>

                    <View style={ styles.form }>
                        <TextBox
                            label="Senha"
                            onChangeText={ (value) => setPassword(value) }
                            value={ password }
                            isPassword={ passwordVisibility }
                        />
                        
                        <TouchableOpacity onPress={ handlePasswordVisibility } style={ styles.inputIcon }>
                            <FontAwesomeIcon name={ rightIcon } size={ 20 } />
                        </TouchableOpacity>
                    </View>

                    <View style={ styles.form }>
                        <Button caption="Acessar" style={ styles.btn } />
                    </View>

                </View>

            </ScrollView>
        </View>

        <View style={ styles.footer }>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={ styles.footerText }>Criar minha conta</Text>
            </TouchableOpacity>
        </View>
    </>
}