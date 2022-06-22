import React, { useContext, useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../../context/AuthContext'
import { NavigationEvents } from 'react-navigation'
import NavLink from '../../components/navHelpers/NavLink'
import { ScrollView } from 'react-navigation'
import { Text, Input, Button, CheckBox } from 'react-native-elements'
import LogoTitle from '../../components/LogoTitle'
import { SafeAreaView } from 'react-navigation'

const SignupScreen = () => {

    const {state, signup, clearErrorMessage} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checked, setChecked] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
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
        {/* <Button 
            title="Sign Up"
            onPress={() => signup({email, password, checked})}
        /> */}
        <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => signup({email, password, checked})}
              >
              <Text style={styles.textStyle}>~*~  Sign Up  ~*~</Text>
        </Pressable>
        <NavLink 
            touchText="Already have an account? Sign in instead."
            linkTo='Signin'        
        />
        </ScrollView>
        </SafeAreaView>
        )
}

SignupScreen.navigationOptions = () => {
    return {
    //   headerShown: false,
      headerStyle: {
        backgroundColor: '#f7e57e',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackVisible:false,
      headerTitle: (props) => <LogoTitle {...props} />,
      headerLeft: ()=> null,
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        justifyContent: 'center',
        marginTop: 50
    },
    button: {
        borderRadius: 20,
        padding: 10,
        margin: 5,
        paddingHorizontal: 10
    },
      buttonClose: {
        backgroundColor: "green",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16
      },
})

export default SignupScreen