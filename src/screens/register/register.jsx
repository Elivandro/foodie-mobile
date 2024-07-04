import React, { useState } from 'react';
import { View, ScrollView } from "react-native";
import { styles } from "./register.style.js";

import Header from '../../components/header/header.jsx';
import Button from "../../components/buttons/button.jsx";
import TextBox from "../../components/text/textField.jsx";


export default function Register({ navigation })
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return <ScrollView style={ styles.container }>
        <View>
            <Header text="Crie sua conta"/>
            <View style={ styles.formGroup }>

                <View style={ styles.form }>
                    <TextBox
                        label="Nome completo"
                        onChangeText={ (value) => setName(value) }
                        value= { name }
                    />
                </View>

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
                        isPassword={ true }
                    />
                </View>

                <View style={ styles.form }>
                    <TextBox
                        label="Confirmar senha"
                        onChangeText={ (value) => setConfirmPassword(value) }
                        value={ confirmPassword }
                        isPassword={ true }
                    />
                </View>

                <View style={ styles.form }>
                    <Button caption="Próximo passo" style={ styles.btn } onPress={() => navigation.navigate('Address')}/>
                </View>

            </View>
        </View>
    </ScrollView>   
}