import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import styles from '@/app/styles/HomeStyles';

type Note = {
  content: string;
  date: string;
  time: string;
  tag: string;
};

const HomeScreen = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const router = useRouter();

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const storedNotes = await AsyncStorage.getItem('notes');
        const parsedNotes: Note[] = storedNotes ? JSON.parse(storedNotes) : [];
        setNotes(parsedNotes.slice(-2).reverse());
      } catch (e) {
        console.error('Failed to load notes:', e);
      }
    };
    loadNotes();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/welcome.png')}
        style={styles.illustration}
        resizeMode="contain"
      />

      <Text style={[styles.welcomeText, { marginTop: 20 }]}>
        <Text style={styles.welcomeTo}>Welcome to </Text>
        <Text style={styles.meetmate}>
          <Text style={styles.meet}>Meet</Text>
          <Text style={styles.mate}>Mate</Text>
        </Text>
      </Text>

      <Text style={styles.tagline}>meet, note, organize</Text>

      {notes.length > 0 && (
        <Text style={styles.recentTitle}>Your Recent Notes</Text>
      )}

      <FlatList
        data={notes}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: '/mynotes',
                params: {
                  content: item.content,
                  date: item.date,
                  time: item.time,
                  tag: item.tag,
                },
              })
            }
          >
            <View style={styles.noteCard}>
              <Text style={styles.noteContent}>{item.content}</Text>
              <Text style={styles.noteMeta}>
                {item.date} at {item.time} | {item.tag}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.noNotesText}>No notes saved yet.</Text>
        }
      />
    </View>
  );
};

export default HomeScreen;
