import React from 'react';
import { View,
        Text,
        StyleSheet,
        TouchableOpacity,
} from 'react-native';

export default function ListItem(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "lightgray",
        borderRadius: 10,
        padding: 15,
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    itemText: {
        maxWidth: '80%', 
    },
});