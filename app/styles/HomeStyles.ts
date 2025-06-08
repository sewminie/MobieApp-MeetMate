import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  illustration: {
    width: '100%',
    height: 260,
  },
    welcomeText: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 5,
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
  tagline: {
    textAlign: 'center',
    color: '#1B4F72',
    fontSize: 16,
    marginBottom: 30,
    
  },
  recentTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 5,
    color: '#1B4F72',
  },
  
  noteCard: {
    backgroundColor: '#F2D7D5',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  noteContent: {
    fontSize: 16,
    color: '#333',
  },
  noteMeta: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  noNotesText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
    fontSize: 14,
  },
});

export default styles;
