import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Abc', key: '1' },
        { name: 'Abcd', key: '2' },
        { name: 'Abcdf', key: '3' }
    ];
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text stype={styleSheet.textStyle}>{item.name}</Text>
            }}
        />
    );
};

const styleSheet = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;