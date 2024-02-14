import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable,Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';
import hole from './holes.png';
import mole from './moles.png';
import styles from '../styles/page-styles';

export default function GamePage({ navigation }) { // Ensure navigation prop is passed

    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [moles, setMoles] = useState(new Array(9).fill(false));

    // useEffect hook to manage popping in and out of moles at intervals.
    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * moles.length);
            const newMoles = [...moles];
            newMoles[randomIndex] = true;
            setMoles(newMoles);

            setTimeout(() => {
                newMoles[randomIndex] = false;
                setMoles(newMoles);
            }, 5);
        }, 470); // to increase the difficulty of the game

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
                { text: 'Play Again', onPress: () => resetGame() }, //gives the user the option to play again
                ]
            ); }}

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
            <View>
            <Link
                href={{
                    pathname: "/",
                }} asChild>

                <Pressable style={styles.button}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>RETURN</Text>
                </Pressable>

            </Link>
            <StatusBar style="auto" />
            </View>
        </View>
    );
}