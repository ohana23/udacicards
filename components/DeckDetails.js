import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function DeckDetails({ route, navigation }) {
    const AddCardButton = ({ title }) => {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('New Card')}
            >
                <Text style={styles.button}>{title}</Text>
            </TouchableOpacity>
        )
    }


    const StartQuizButton = ({title}) => {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Start Quiz', {
                    deckList : [{question: "what is your name?", answer: "george"}, {question: "what is your age?", answer: "4"}, {question: "are you gay?", answer: "Ya"}]
                })}
            >
                <Text style={styles.button}>{title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{route.params.title}</Text>
                <Text style={styles.subtitle}>{route.params.subtitle}</Text>
            </View>

            <View style={styles.buttonGroup}>
                {/* TODO: Change first AddCardButton to a different component. */}
                <StartQuizButton title="START QUIZ"/>
                <AddCardButton title="ADD A CARD"/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        marginTop: 5,
        fontSize: 30,
        textAlign: 'center'
    },
    button: {
        fontSize: 20,
        fontWeight: 'bold',
        height: 50,
        padding: 8,
        textAlign: 'center',
        marginBottom: 20,
        letterSpacing: 1,
    },
    buttonGroup: {
        marginTop: 100,
    }
  })
  

export default DeckDetails