import {View, Text, Button, Alert} from 'react-native'
import React from 'react'
import {Link, router} from "expo-router";
import {getEnforcing} from "react-native/Libraries/TurboModule/TurboModuleRegistry";

function showMeSomething() {
    // Alert.alert('issue','this is a warning to you.');
    router.push('authIndex');
}

const profile = () => {
    function goBack() {
        router.back();
    }

    return (
    <View>
      <Text>profile</Text>
        <Button title="Go Back" onPress={goBack}/>
        <Button title="show nothings" onPress={showMeSomething}/>
    </View>
  )
}

export default profile