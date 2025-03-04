import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import { theme } from '../../constants/theme'

const icons = {
    home: Home,
}

const Icon = ({name, ...prop}) => {
    const IconComponent = icons[name];

    return (
        <IconComponent 
            height={prop.size || 24}
            width={prop.size || 24}
            stokeWidth={prop.stokeWidth || 1.9}
            color={theme.colors.textLight}
            {...prop}
        />
    )
}

export default Icon

const styles = StyleSheet.create({})