// Index page

import React from 'react';
import { Pressable, Text, View, Alert, ImageBackground } from 'react-native';
import { Link } from 'expo-router'; 
import styles from '../styles/page-styles';
import backgroundImage from './BG.webp';


export default function Page() {
    //instruction prompt for the player 
    const showInstructions = () => {
        Alert.alert(
            'Instructions',
            '(1)Please select the difficulty level. (2)Know that the game will begin soon as you choose a level. (3)The player's objective is to hit (tap) on the moles that pop out, which will add to your score. (4) Keep in mind you only have 3 LIVES!!!!.Playes loose lives by accidently clicking the hone insted of the mole .Thank You ! for playing',
                
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        );
    };


    return (
       
        <ImageBackground source={backgroundImage} style={styles.background}>
            <View>
                <Text style={{ color: 'red', fontSize: 60, fontWeight: 'bold', textAlign: 'center', marginTop: 50 }}>W<Text style={{ color: 'black' }}>HACK <Text style={{ color: 'red' }}>a</Text></Text></Text>
                <Text style={{ color: 'black', fontSize: 60, fontWeight: 'bold', textAlign: 'center', marginLeft: 30 }}> M<Text style={{ color: 'red' }}>O</Text>LE</Text>
                
            </View>
         
        <View>
            <View style={{marginTop:250} }> 
                <Link
                    href={{
                        pathname: "/game",
                    }} asChild>

                    <Pressable style={styles.button}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 30, }}>Medium</Text>
                    </Pressable>

                </Link>
            </View>

            <View>
                <Link
                    href={{
                        pathname: "/easy",
                    }} asChild>

                    <Pressable style={styles.button}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 30, }}>EASY</Text>
                    </Pressable>

                </Link>
            </View>

            <View>
                <Link
                    href={{
                        pathname: "/hard",
                    }} asChild>

                    <Pressable style={styles.button}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 30, }}>HARD</Text>
                    </Pressable>

                </Link>
            </View>



            <View>
                <Pressable style={styles.button} onPress={showInstructions}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 30, }}>Instructions</Text>
                </Pressable>
            </View>
        </View>
        
        </ImageBackground>

    );
}
