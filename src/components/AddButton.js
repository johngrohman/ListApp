import React, { useState } from 'react';
import { View,
        Text,
        Pressable,
        TextInput,
        TouchableOpacity,
        FlatList,
        StyleSheet,
} from 'react-native';

export default function AddButton() {
    return (
        <View style={styles.container}>
            <Pressable>
                <Text>+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "red",
        color: "red",
    }
})