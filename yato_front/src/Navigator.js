import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Auth from './screens/Auth'
import Home from './components/Home'
import commonStyles from './commonStyles'
const mainRoutes = {
    // AuthOrApp: {
    //     name: 'AuthOrApp',
    //     screen: AuthOrApp
    // },
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: Home
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'Auth'
})
export default createAppContainer(mainNavigator)