import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuthStore, type AuthState } from '../../store/authStore';

type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

export function SignUpScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = useAuthStore((state: AuthState) => state.signIn);

  const handleSignUp = () => {
    signIn();
  };

  const handleNavigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create account</Text>
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
      <Pressable style={styles.primaryButton} onPress={handleSignUp}>
        <Text style={styles.primaryButtonText}>Create and continue</Text>
      </Pressable>
      <Pressable style={styles.linkButton} onPress={handleNavigateToSignIn}>
        <Text style={styles.linkText}>Already have an account? Sign in</Text>
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
