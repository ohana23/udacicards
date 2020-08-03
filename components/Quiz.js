import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = {questionNumber: 1, showAnswer: false};
        console.log(this.props);
        this.deckList = this.props.route.params.deckList;
    }

    handleAnswer(ans) {
        this.setState({questionNumber: this.state.questionNumber+1});
    }
    showAnswer() {
        return (
        <View>
            <Text style={styles.title}>Answer: </Text>
            <Text style={styles.subtitle}>{this.deckList[this.state.questionNumber-1].answer} </Text>
            <Text style={styles.title}>How did you do?</Text>
            <Text style={styles.subtitle}>You answered...</Text>

            <View style={styles.buttonsContainer}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => this.handleAnswer(true)}
                        style={styles.btnSuccess}>
                        <Text style={styles.btnText}>Correct</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => this.handleAnswer(false)}
                        style={styles.btnError}>
                        <Text style={styles.btnText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View> );
    }

    showAnswerButton() {
        return <TouchableOpacity
            style={styles.item}
            onPress={() => this.setState({showAnswer: true})}
        >
            <Text style={styles.item}>Show answer</Text>
        </TouchableOpacity>;
    }

    render() {
        return (
            <View style={styles.viewContainer}>
                <Text style={styles.subtitle}>Quiz time! {this.state.questionNumber}</Text>
                <Text style={styles.title}>Question: {this.state.showAnswer}</Text>
                <Text style={styles.subtitle}>{this.deckList[this.state.questionNumber-1].question}</Text>

                {this.state.showAnswer ? this.showAnswer() : this.showAnswerButton()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'rgb(10, 125, 240)',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        padding: 20,
        color: "white"
    },
    viewContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'black',
        fontSize: 30

    },
    button: {
        backgroundColor: 'green',
        margin: 10
    },
    btnSuccess: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#28A745'
    },
    btnError: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#DC3545'
    },
    btnText: {
        color: "white",
        fontSize: 14,
        textTransform: 'uppercase'
    },
    buttonsContainer: {
        flexDirection: 'row'
    }


})


export default Quiz