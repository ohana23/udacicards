import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {questionNumber: 1, showAnswer: false};
        this.deckList = this.props.route.params.deckList;
    }

    handleAnswer(ans) {
        this.setState({ 
            questionNumber: this.state.questionNumber + 1,
            showAnswer: false 
        });
    }

    showAnswer() {
        return (
            <View style={styles.bottom}>
                <Text style={styles.answer}>{this.deckList[this.state.questionNumber - 1].answer}</Text>

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

            </View>
        )
    }

    showAnswerButton() {
        return (
            <View style={styles.bottom}>
                <TouchableOpacity
                    style={styles.showAnswerBtn}
                    onPress={() => this.setState({ showAnswer: true })}
                >
                    <Text style={styles.showAnswerBtnText}>Show answer</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.viewContainer}>
                <Text style={styles.progress}>{this.state.questionNumber} / {this.deckList.length}</Text>
                <Text style={styles.question}>{this.deckList[this.state.questionNumber - 1].question}</Text>
                {this.state.showAnswer ? this.showAnswer() : this.showAnswerButton()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 15
    },
    question: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 100,
        padding: 15
    },
    answer: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 100,
        padding: 15
    },
    showAnswerBtn: {
        backgroundColor: 'rgb(10, 125, 240)',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        padding: 20,
    },
    showAnswerBtnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 1
    },
    viewContainer: {
        flex: 1,
    },
    progress: {
        fontSize: 20,
        color: 'gray',
        fontWeight: 'bold',
        backgroundColor: 'lightgray',
        width: 80,
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'green',
        margin: 10
    },
    btnSuccess: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 5,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#28A745'
    },
    btnError: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 10,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#DC3545'
    },
    btnText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 0.5
    },
    buttonsContainer: {
        flexDirection: 'row'
    }
})


export default Quiz