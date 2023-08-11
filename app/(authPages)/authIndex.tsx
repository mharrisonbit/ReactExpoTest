import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import { router } from 'expo-router'

function logUserOut(): void {
  router.replace('');
}
export class NewIndex extends Component {
  render() {

    return (
      <View>
        <Text>Why not do something else here</Text>
        <Button title="Go Back" onPress={router.back}/>
        <Button title="Log Out" onPress={logUserOut}/>
      </View>
    )
  }
}

export default NewIndex