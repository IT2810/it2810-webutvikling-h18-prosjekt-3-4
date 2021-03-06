import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    deadlineBtn: {
        backgroundColor: '#a3052e',
        borderRadius:20,
        borderWidth: 1,
        borderColor:'#a3052e',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 1,
        alignSelf:'flex-end',
        marginRight: '5%'
    },

    deadlineButtonText: {
        fontSize:15,
        fontWeight: "bold",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop:5,
        color: '#fff',
    },

    createTaskButton: {
        backgroundColor: '#ff0042',
        height:50,
        width:150,
        borderRadius:20,
        borderWidth: 1,
        borderColor:'#ff0042',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 1,
        position: 'absolute',
        bottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    createTaskButtonText: {
        fontSize:15,
        fontWeight: "bold",
        color: '#fff',
    },
})