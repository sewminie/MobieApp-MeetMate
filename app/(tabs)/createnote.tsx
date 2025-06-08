import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '@/components/Header';
import styles from '../styles/CreateNoteStyles';
import { useRouter } from 'expo-router';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const CreateNoteScreen = () => {
  const [note, setNote] = useState('');
  const [tag, setTag] = useState('');
  const router = useRouter();

  const handleSaveNote = async () => {
    if (!note.trim()) {
      Alert.alert('Empty Note', 'Please write something before saving.');
      return;
    }

    const newNote = {
      content: note,
      tag: tag || 'General',
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    try {
      const storedNotes = await AsyncStorage.getItem('notes');
      const notes = storedNotes ? JSON.parse(storedNotes) : [];
      notes.push(newNote);
      await AsyncStorage.setItem('notes', JSON.stringify(notes));
      router.push('/mynotes');
    } catch (error) {
      console.log('Save error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Create Note" />
      <Text style={styles.label}>Write your meeting note below:</Text>
      <TextInput
        style={[styles.input, { width: width - 40 }]} // Adjust width based on screen size
        placeholder="Type your note..."
        multiline
        value={note}
        onChangeText={setNote}
      />
      <Text style={styles.label}>Tag (optional):</Text>
      <TextInput
        style={[styles.input, { width: width - 40 }]} // Adjust width based on screen size
        placeholder="Enter a tag"
        value={tag}
        onChangeText={setTag}
      />
      <TouchableOpacity style={[styles.saveButton, { width: width - 40 }]} onPress={handleSaveNote}>
        <Text style={styles.saveButtonText}>Save Note</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateNoteScreen;
