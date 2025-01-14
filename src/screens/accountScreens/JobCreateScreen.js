import React, {useContext} from 'react'
import { StyleSheet, View } from 'react-native'
import JobListingForm from '../../components/forms/JobListingForm'
import { Context as DataContext } from '../../context/DataContext'

const JobCreateScreen = () => {

    const {state, createJobListing} = useContext(DataContext)

    return (
        <View style={styles.container}>
        <JobListingForm
            header="Create New Job Listing"
            errorMessage={state.errorMessage}
            buttonText="Add Job"
            onSubmit={createJobListing}
        />
        </View>
        )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        marginBottom: 50
    },
    container: {
        margin: 15,
        flex: 1,
        marginTop: 30
    }
})

export default JobCreateScreen