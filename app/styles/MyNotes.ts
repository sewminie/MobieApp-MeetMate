import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  notesWrapper: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 16,
    paddingBottom: 100, // space for bottom tab bar
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  noteCard: {
    backgroundColor: '#F2D7D5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  noteText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  dateText: {
    fontSize: 12,
    color: '#777',
  },
  tagText: {
    fontSize: 14,
    color: '#007BFF',
    marginTop: 6,
    fontStyle: 'italic',
  },
  noNotesText: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 16,
    marginTop: 40,
  },
  deleteButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#AED6F1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: '#1B4F72',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default styles;
