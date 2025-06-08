import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputField from '@/components/InputField';
import CustomButton from '@/components/CustomButton';
import styles from '@/app/styles/LoginStyles';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);

    // Simulate login delay and store login state locally
    setTimeout(async () => {
      try {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        setLoading(false);
        router.replace('/(tabs)/home'); // Navigate to home inside tabs
      } catch (error) {
        setLoading(false);
        Alert.alert('Error', 'Login failed. Please try again.');
      }
    }, 1500);
  };

  const handleForgotPassword = () => {
    router.push('/resetpassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        <Text style={styles.welcomeTo}>Welcome to </Text>
        <Text style={styles.meetmate}>
          <Text style={styles.meet}>MEET</Text>
          <Text style={styles.mate}>MATE</Text>
        </Text>
      </Text>

      <View style={styles.inputFieldsContainer}>
        <InputField
          placeholder="Email or Phone number"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <InputField
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.forgotPasswordText} onPress={handleForgotPassword}>
          Forgot password?
        </Text>

        <CustomButton
          title={loading ? 'Logging in...' : 'LOGIN'}
          onPress={handleLogin}
          disabled={loading}
        />
      </View>

      <Text style={styles.signupLink} onPress={() => router.push('/SignUpScreen')}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};

export default LoginScreen;
