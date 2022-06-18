import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../../context/AuthContext'
import { NavigationEvents } from 'react-navigation'
import NavLink from '../../components/navHelpers/NavLink'
import { ScrollView } from 'react-navigation'
import { Text, Input, Button, CheckBox } from 'react-native-elements'

const SignupScreen = () => {

    const {state, signup, clearErrorMessage} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
        <ScrollView>
        <Text h3 style={{marginBottom: 25}} >Sign Up</Text>
        <Input 
            label="Email" 
            value={email} 
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            />
        <Input 
            label="Password" 
            value={password} 
            onChangeText={setPassword} 
            autoCapitalize="none"
            autoCorrect={false}
            // secureTextEntry
            />
            <CheckBox 
                title="Company"
                checked={checked}
                onPress={() => setChecked(!checked)}
            />

        <Text style={styles.errorMessage} >{state.errorMessage}</Text>
        <Button 
            title="Sign Up"
            onPress={() => signup({email, password, checked})}
        />
        <NavLink 
            touchText="Already have an account? Sign in instead."
            linkTo='Signin'        
        />
        </ScrollView>
        </View>
        )
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        justifyContent: 'center',
        marginTop: 70
    }
})

export default SignupScreen