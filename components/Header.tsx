import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';  // Using useRouter from Expo Router
import styles from '@/app/styles/HeaderStyles';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  const router = useRouter();  // Use the useRouter hook for navigation

  return (
    <View style={styles.headerContainer}>
      {/* Back Button using useRouter */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#004080" />
      </TouchableOpacity>
      
      {/* Title */}
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;
