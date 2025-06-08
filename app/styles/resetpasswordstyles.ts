import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingTop: 150, // Adjust this so input fields start below the header
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
    marginTop: 20, // Moves input fields slightly down
  },
  sendOtpLink: {
    color: '#007BFF',
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default styles;
