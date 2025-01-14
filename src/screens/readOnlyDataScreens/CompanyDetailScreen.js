import React, {useContext} from 'react'
import { StyleSheet, Text } from 'react-native'
import { Context as DataContext } from '../../context/DataContext'
import { SafeAreaView } from 'react-native-safe-area-context'

const NewbProfileDetailScreen = ({navigation}) => {

    const {state} = useContext(DataContext)
    const _id = navigation.getParam('_id')
    const profile = state.companies.find(t => t._id === _id)

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <Text style={styles.header}>{profile.name}</Text>
            <Text style={styles.text} >
                {profile.location}
                {'\n'}{'\n'}
                Sector: {profile.sector}
                {'\n'}{'\n'}
                {profile.description}
                {'\n'}{'\n'}
                {profile.email}
                {'\n'}{'\n'}
                {profile.phone}
                </Text>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        marginBottom: 10
    },
    container: {
        margin: 15,
        flex: 1,
        marginTop: 15
    },
    text: {
        fontSize: 20,
        marginBottom: 5
    }
})

export default NewbProfileDetailScreen