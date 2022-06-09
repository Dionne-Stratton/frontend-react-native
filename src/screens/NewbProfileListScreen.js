import React, {useContext} from 'react'
import { SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as DataContext } from '../context/DataContext'
import { ListItem } from 'react-native-elements'

const NewbProfileListScreen = ({navigation}) => {

    const {state, fetchNewbs } = useContext(DataContext)

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
         <NavigationEvents onWillFocus={fetchNewbs} />
        <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => 
                navigation.navigate('NewbProfileDetail', { _id: item._id})
            }
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title style={styles.header} >{item.first_name}</ListItem.Title>
                  <Text>{item.location}</Text>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
        </SafeAreaView>
    )
}

NewbProfileListScreen.navigationOptions = {
    title: 'Newbs'
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        marginBottom: 10
    },
    container: {
        margin: 15,
        flex: 1,
        marginTop: 15
    }
})

export default NewbProfileListScreen