import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class QuizResults extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>QuizResults</Text>
                
                {/* TITLE of deck */}
                {/* SUBTITLE of deck */}
                {/* BUTTON to start quiz */}
                {/* BUTTON to add card */}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'white',
    },
  })
  

export default QuizResults