// LoginStyles.ts
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  welcomeTo: {
    fontWeight: '400',
    color: '#1B4F72',
  },
  meetmate: {
    fontWeight: 'bold',
  },
  meet: {
    color: '#1B4F72', // Dark blue color
  },
  mate: {
    color: '#721B1C', // Dark red color
  },
  inputFieldsContainer: {
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#1B4F72',
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 14,
  },
  signupLink: {
    color: '#2E7BB8',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default styles;