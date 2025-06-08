import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import InputField from '@/components/InputField';  
import CustomButton from '@/components/CustomButton';  
import Header from '@/components/Header';  
import styles from '@/app/styles/resetpasswordstyles';  // Assuming path is correct
import { useRouter } from 'expo-router';  // Use Expo Router's useRouter for navigation

const ResetPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();  // Use useRouter for navigation

  const handleSendOtp = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }
    Alert.alert('Success', 'OTP sent to your email!');
  };

  const handleResetPassword = () => {
    if (!email || !otp || !password || !confirmPassword) {
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
      Alert.alert('Success', 'Password has been reset successfully');
      router.push('/Login');  // Use router.push to navigate to Login screen
    }, 1500);
  };

  return (
    <View style={styles.container}>
      {/* Reusable Header Component */}
      <Header title="Reset Password" />

      <View style={styles.inputContainer}>
        <InputField
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TouchableOpacity onPress={handleSendOtp}>
          <Text style={styles.sendOtpLink}>Send OTP</Text>
        </TouchableOpacity>

        <InputField
          placeholder="Enter OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="numeric"
        />

        <InputField
          placeholder="Enter new password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <InputField
          placeholder="Confirm new password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
      </View>

      <CustomButton
        title={loading ? 'Resetting Password...' : 'Reset Password'}
        onPress={handleResetPassword}
        disabled={loading}
      />
    </View>
  );
};

export default ResetPasswordScreen;
