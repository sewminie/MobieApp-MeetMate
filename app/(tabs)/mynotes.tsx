import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '@/components/Header';
import styles from '@/app/styles/MyNotes';

const MyNotesScreen = () => {
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    const loadNotes = async () => {
      const stored = await AsyncStorage.getItem('notes');
      setNotes(stored ? JSON.parse(stored) : []);
    };

    loadNotes();
  }, []);

  const handleDelete = async (index: number) => {
    Alert.alert(
      'Delete Note',
      'Are you sure you want to delete this note?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            const updatedNotes = [...notes];
            updatedNotes.splice(index, 1);
            setNotes(updatedNotes);
            await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
          },
        },
      ]
    );
  };

  return (
    <View style={styles.screenWrapper}>
      <Header title="My Notes" />

      {/* This View creates space below the header */}
      <View style={styles.notesWrapper}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {notes.length > 0 ? (
            notes.map((note, index) => (
              <View key={index} style={styles.noteCard}>
                <Text style={styles.noteText}>{note.content}</Text>
                <Text style={styles.tagText}>Tag: {note.tag}</Text>
                <Text style={styles.dateText}>{note.date} {note.time}</Text>

                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDelete(index)}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={styles.noNotesText}>No notes available</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default MyNotesScreen;
