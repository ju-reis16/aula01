import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';

// Paleta de Cores SENAI
const SENAI_RED = '#d52b1e';
const SENAI_DARK_GRAY = '#333333';
const SENAI_MEDIUM_GRAY = '#888888';
const SENAI_LIGHT_GRAY = '#f2f2f2';
const WHITE = '#FFFFFF';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    // Apenas validação visual, sem lógica real
    if (!email || !senha) {
      Alert.alert('Atenção', 'Por favor, preencha e-mail e senha.');
    } else {
      Alert.alert('Sucesso', 'Login efetuado com sucesso!');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Acesse sua conta</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="seu.email@email.com"
          placeholderTextColor={SENAI_MEDIUM_GRAY}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor={SENAI_MEDIUM_GRAY}
          secureTextEntry // Oculta a senha
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SENAI_DARK_GRAY, // Fundo escuro
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#444444', // Card um pouco mais claro que o fundo
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: WHITE, // Texto branco
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: SENAI_LIGHT_GRAY, // Texto cinza claro
    textAlign: 'center',
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: SENAI_LIGHT_GRAY, // Texto cinza claro
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: SENAI_DARK_GRAY, // Input escuro
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: SENAI_MEDIUM_GRAY, // Borda cinza
    color: WHITE, // Texto do input branco
  },
  forgotPassword: {
    fontSize: 14,
    color: SENAI_RED,
    textAlign: 'right',
    marginBottom: 24,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: SENAI_RED,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
// Fim