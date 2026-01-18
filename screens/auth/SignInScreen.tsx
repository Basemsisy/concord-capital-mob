import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuthStore, type AuthState } from '../../store/authStore';

type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type Props = NativeStackScreenProps<AuthStackParamList, 'SignIn'>;

export function SignInScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = useAuthStore((state: AuthState) => state.signIn);

  const handleSignIn = () => {
    signIn();
  };

  const handleNavigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />
      <Pressable style={styles.primaryButton} onPress={handleSignIn}>
        <Text style={styles.primaryButtonText}>Continue</Text>
      </Pressable>
      <Pressable style={styles.linkButton} onPress={handleNavigateToSignUp}>
        <Text style={styles.linkText}>Create an account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d4d4d4',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  primaryButton: {
    marginTop: 8,
    backgroundColor: '#111827',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  linkButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 14,
    color: '#4b5563',
  },
});
