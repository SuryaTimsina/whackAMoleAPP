
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import hole from './holes.png';
import mole from './moles.png';

export default function App() {

    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [moles, setMoles] = useState(new Array(9).fill(false));

    // useEffect hook to manage poping in and out of moles at intervals.
    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * moles.length);
            const newMoles = [...moles];
            newMoles[randomIndex] = true;
            setMoles(newMoles);

            setTimeout(() => {
                newMoles[randomIndex] = false;
                setMoles(newMoles);
            }, 10);
        }, 700); // to increase the deifficulty of the game

      // Function to stop the mole appearance interval when the component is removed from the screen.
        return () => clearInterval(interval);
    }, [moles]);

    // Function to handle whacking a hole and updating the game state accordingly.
    function hitHole(index) {
        const newMoles = [...moles];
        newMoles[index] = false;
        setMoles(newMoles);
        setLives(prevLives => prevLives - 1);

        // If lives reach 0, prompt the user with a game over message.
        if (lives - 1 === 0) {
            Alert.alert(
                'Game Over',
                'You lost all your lives',
                [
                    { text: 'Play Again', onPress: () => resetGame() }, //gives the user the option to play agian 
                ]
            );
        }
    }

    // Function to reset the game state.
    function resetGame() {
        setScore(0);
        setLives(3);
        setMoles(new Array(9).fill(false));
    }

    // Rendering the game interface with score, lives, and mole holes.
    return (
        <View style={styles.container}>
            <Text style={styles.scoreCount}>SCORE: {score}</Text>
            <Text style={styles.livesCount}>Lives: {lives}</Text>
            <View style={styles.grid}>
                {moles.map((isMole, index) => (
                    <TouchableOpacity key={index} onPress={() => isMole ? setScore(score + 1) : hitHole(index)}>
                        {isMole && <Image source={mole} style={styles.image} />}
                        {!isMole && <Image source={hole} style={styles.image} />}
                    </TouchableOpacity>
                ))}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

// Styles for the game interface.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    image: {
        width: 120,
        height: 120,
        margin: 2,
    },
    scoreCount: {
        fontSize: 40,
        color: 'blue',
    },
    livesCount: {
        fontSize: 30,
        color: 'red',
    },
});