import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import categories from '../config/categories';
import colors from '../config/colors';
import SPACING from '../config/SPACING';

const Categories = ({onChange}) => {

    const [activeCategoryId, setActiveCategoryId] = useState(null)
    const handlePress = (id) => {
        setActiveCategoryId(id)
        onChange(id)
    }

    return <FlatList horizontal={true} data={categories}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ marginVertical: SPACING }}
        renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => handlePress(item.id)}
                style={{ marginRight: SPACING * 2, alignItems: 'center' }}>
                <Text style={{ color: '#d5dde8', fontSize: SPACING * 2 }}>{item.name}</Text>
                {activeCategoryId == item.id && (
                    <View style={{
                        height: SPACING,
                        width: SPACING,
                        backgroundColor: colors.primary,
                        borderRadius: SPACING / 2,
                        marginTop: SPACING / 2
                    }} />
                )}


            </TouchableOpacity>
        )}
    />
};

export default Categories