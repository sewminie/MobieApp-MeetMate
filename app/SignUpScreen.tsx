import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import InputField from '@/components/InputField';
import CustomButton from '@/components/CustomButton';
import styles from '@/app/styles/SignUpStyles';
import { useRouter } from 'expo-router';  // Use Expo Router's useRouter for navigation

const SignUpScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();  // Initialize useRouter

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'Account created successfully');
      router.push('/');  // Use router.push for navigation
    }, 1500);
  };

  return (
    <View style={styles.container}>
      {/* Welcome Text with Custom Styling */}
      <Text style={styles.welcomeText}>
        <Text style={styles.welcomeTo}>Welcome to </Text>
        <Text style={styles.meetmate}>
          <Text style={styles.meet}>MEET</Text>
          <Text style={styles.mate}>MATE</Text>
        </Text>
      </Text>

      {/* Input Fields Section */}
      <View style={styles.inputFieldsContainer}>
        <InputField 
          placeholder="Email" 
          value={email} 
          onChangeText={setEmail} 
          keyboardType="email-address" 
        />
        <InputField 
          placeholder="Password" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry={true} 
        />
        <InputField 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChangeText={setConfirmPassword} 
          secureTextEntry={true} 
        />
        
        <CustomButton 
          title={loading ? 'Signing Up...' : 'SIGN UP'} 
          onPress={handleSignUp} 
          disabled={loading} 
        />
      </View>
      
      <Text style={styles.loginLink} onPress={() => router.push('/Login')}>  {/* Use router.push for navigation */}
        Already have an account? Login
      </Text>
    </View>
  );
};

export default SignUpScreen;
