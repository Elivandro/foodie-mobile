import React, { useState } from 'react';
import { View, ScrollView, Alert } from "react-native";
import { styles } from "./address.style.js";
import { CepServices } from '../../services/CepService.js';
import Header from '../../components/header/header.jsx';
import Button from "../../components/buttons/button.jsx";
import TextField from "../../components/text/textField.jsx";

export default function Address({ navigation })
{
    const [cep, setCEP ]                    = useState('');
    const [streetName, setStreetName]       = useState('');
    const [number, setNumber]               = useState('');
    const [neighborhood, setNeighborhood]   = useState('');
    const [complement, setComplement]       = useState('');
    const [city, setCity]                   = useState('');
    const [state, setState]                 = useState('');

    const handleCep = async () => {
        try {
            const cepData = await CepServices.findCep(cep)

            setStreetName(cepData.logradouro)
            setNumber(cepData.numero)
            setNeighborhood(cepData.bairro)
            setComplement(cepData.complemento)
            setCity(cepData.localidade)
            setState(cepData.uf)

        } catch (error) {

            Alert.alert(error.message);

            setStreetName(null)
            setNumber(null)
            setNeighborhood(null)
            setComplement(null)
            setCity(null)
            setState(null)

        }
    };

    return  <ScrollView style={ styles.container } showsVerticalScrollIndicator={ false } showsHorizontalScrollIndicator={ false }>
        <View>
            <Header text="Informe seu endereço" />
            <View style={ styles.formGroup }>

                <View style={ styles.formHorizontal }>

                    <View style={{ flex: 2 }}>
                        <TextField
                            label="CEP"
                            onChangeText={ (value) => setCEP(value) }
                            value={ cep }
                            onBlur={ handleCep }
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={{ flex: 5 }}>
                        <TextField
                            label="Bairro"
                            onChangeText={ (value) => setNeighborhood(value) }
                            value={ neighborhood }
                        />
                    </View>

                </View>

                <View style={ styles.formHorizontal }>

                    <View style={{ flex: 6}}>
                        <TextField
                            label="Nome da rua"
                            onChangeText={ (value) => setStreetName(value) }
                            value={ streetName }
                        />
                    </View>

                    <View style={{ flex: 2 }}>
                        <TextField
                            label="Nº"
                            onChangeText={ (value) => setNumber(value) }
                            value={ number }
                        />
                    </View>
                    
                </View>
                
                <View style={ styles.form }>
                    <TextField
                        label="Complemento"
                        onChangeText={ (value) => setComplement(value) }
                        value={ complement }
                    />
                </View>

                <View style={ styles.formHorizontal }>

                    <View style={{ flex: 3 }}>
                        <TextField
                            label="Cidade"
                            onChangeText={ (value) => setCity(value) }
                            value={ city }
                        />
                    </View>

                    <View style={{ flex: 1 }}>
                        <TextField
                            label="Estado"
                            onChangeText={ (value) => setState(value) }
                            value={ state }
                        />
                    </View>

                </View>

                <View style={ styles.formHorizontal }>
                    <Button caption="Finalizar cadastro" style={ styles.btn } />
                </View>

            </View>

        </View>
    </ScrollView>
}