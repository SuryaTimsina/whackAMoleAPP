/*stylesheet*/

import { StyleSheet } from 'react-native';
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
    button: {
        backgroundColor: 'black',
        borderRadius: 30,
        padding: 10,
        marginVertical: 10,
        height:50,
        
        
    },
    background: {
        width: '100%',
        minWidth: '100%',
        height: '100%',
        objectFit: 'cover',
    },
})
export default styles;