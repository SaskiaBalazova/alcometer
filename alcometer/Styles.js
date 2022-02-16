import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    marginLeft: 10,
    marginRight: 10,
  },

  header: {
    fontFamily: 'Rowdies',
    fontSize: 30,
    color: '#696969',
    marginBottom: 10,
    textAlign: 'center',
  },

  field: {
    marginBottom: 10,
  },

  input: {
    marginLeft: 10,
  },

  buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
    },
    label: {
        marginRight: 10,
    },
    circle: {
        height: 25,
        width: 25,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#696969',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: '#696969',
    }
});
