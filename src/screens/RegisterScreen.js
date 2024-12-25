import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Fungsi buat daftar akun woke
  const handleRegister = () => {
    // Validasi input kosong
    if (!username || !password) {
      Alert.alert("Peringatan", "Username dan Password wajib diisi!");
      return;
    }

    // Buat mengirim data registrasi ke backend PHP
    axios
      .post("http://172.20.10.5/api/register.php", {
        username: username,
        password: password,
      })
      .then((response) => {
        const { success, message } = response.data;

        if (success) {
          Alert.alert("Berhasil", "Registrasi berhasil! Silakan login.");
          navigation.navigate("Login");
        } else {
          Alert.alert("Berhasil", message);
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Error", "Gagal terhubung ke server.");
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrasi</Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Daftar</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Sudah punya akun?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginLink}>Login di sini</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  loginText: {
    fontSize: 16,
    color: "#333",
  },
  loginLink: {
    fontSize: 16,
    color: "#3498db",
    fontWeight: "bold",
  },
});

export default RegisterScreen;
