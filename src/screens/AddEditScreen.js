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

const AddEditScreen = ({ navigation, route }) => {
  const contact = route.params?.contact;
  const [name, setName] = useState(contact ? contact.name : "");
  const [phone, setPhone] = useState(contact ? contact.phone : "");

  // Ambil fungsi fetchContacts dari navigasi
  const fetchContacts = route.params?.fetchContacts;

  const handleSubmit = () => {
    const url = contact
      ? "http://192.168.18.33/api/update.php"
      : "http://192.168.18.33/api/create.php";
    const payload = contact ? { id: contact.id, name, phone } : { name, phone };

    axios
      .post(url, payload)
      .then(() => {
        Alert.alert(
          "Berhasil",
          contact ? "Kontak diperbarui" : "Kontak ditambahkan",
          [
            {
              text: "OK",
              onPress: () => {
                if (fetchContacts) fetchContacts(); // Panggil fetchContacts untuk update dashboard
                navigation.goBack();
              },
            },
          ]
        );
      })
      .catch(() => Alert.alert("Error", "Terjadi kesalahan"));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {contact ? "Edit Kontak" : "Tambah Kontak"}
      </Text>

      <TextInput
        placeholder="Nama"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Nomor Telepon"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={styles.input}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
        <Text style={styles.saveButtonText}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
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
  saveButton: {
    backgroundColor: "#3498db",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddEditScreen;
