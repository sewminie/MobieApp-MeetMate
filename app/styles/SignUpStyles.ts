import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Keep items at the top
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40, // Increased margin to push it further down
    marginTop: 30, // Add margin-top to space it out
  },
  welcomeTo: {
    fontFamily: 'Prata', // Ensure the font is installed in your project
    color: '#1B4F72', // Blue color
    fontSize: 26,
  },
  meetmate: {
    fontFamily: 'Poppins-Bold', // Ensure the font is available
    fontSize: 26,
    fontWeight: 'bold',
  },
  meet: {
    color: '#1B4F72', // Blue color
  },
  mate: {
    color: '#721B1C', // Red color
  },
  inputFieldsContainer: {
    marginTop: 50, // Add this to move the input fields down a bit more
    width: '100%', // Make sure the fields are aligned properly
    paddingHorizontal: 20, // Optional, for padding inside
  },
  loginLink: {
    marginTop: 20,
    color: '#1B4F72',
    fontWeight: 'bold',
  },
});

export default styles;
