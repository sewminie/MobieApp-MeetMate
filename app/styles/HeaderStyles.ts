import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 120,
    backgroundColor: '#A6D1E6', // Light blue color
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1B4F72',
    fontFamily: 'Poppins-Bold',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 50,
    
  },
});

export default styles;
