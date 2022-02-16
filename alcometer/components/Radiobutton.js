import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from '../Styles';

export default function RadioButton({genders, onPress}) {
    const [value, setValue] = useState(null);

    function handlePress(selected) {
        setValue(selected);
        onPress(selected);
    }

    return (
        <>
            {
                genders.map((item) => (
                    <View key={item.value} style={styles.buttonContainer}>
                        <Text style={styles.label}>{item.label}</Text>
                        <Pressable style={styles.circle} onPress={() => handlePress(item.value)}>
                            {value === item.value && <View style={styles.checkedCircle}/> }
                        </Pressable>
                    </View>
                ))
            }
        </>
    )
}