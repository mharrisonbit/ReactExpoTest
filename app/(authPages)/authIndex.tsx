import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'
import { router } from 'expo-router'

export class NewIndex extends Component {
  render() {
    return (
      <View>
        <Text>Why not do something else here</Text>
        <Button title="Go Back" onPress={router.back}/>
      </View>
    )
  }
}

export default NewIndex