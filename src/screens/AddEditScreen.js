import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import PropTypes from "prop-types";
import axios from "axios";

const AddEditScreen = ({ navigation, route }) => {
  const contact = route.params?.contact;
  const [name, setName] = useState(contact ? contact.name : "");
  const [phone, setPhone] = useState(contact ? contact.phone : "");

  // Mengambil fungsi fetchContacts dari route params
  const fetchContacts = route.params?.fetchContacts;

  const handleSubmit = async () => {
    // Validasi input
    if (!name.trim() || !phone.trim()) {
      Alert.alert("Error", "Nama dan Nomor Telepon tidak boleh kosong");
      return;
    }

    const url = contact
      ? "http://172.20.10.5/api/update.php"
      : "http://172.20.10.5/api/create.php";
    const payload = contact ? { id: contact.id, name, phone } : { name, phone };

    try {
      await axios.post(url, payload);
      Alert.alert(
        "Berhasil",
        contact ? "Kontak diperbarui" : "Kontak ditambahkan",
        [
          {
            text: "OK",
            onPress: () => {
              if (fetchContacts && typeof fetchContacts === "function") {
                fetchContacts(); // Memanggil fetchContacts untuk update data
              }
              navigation.goBack(); // Kembali ke layar sebelumnya
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert("Error", "Terjadi kesalahan");
    }
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
        returnKeyType="done"
        style={styles.input}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
        <Text style={styles.saveButtonText}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
};

AddEditScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        phone: PropTypes.string,
      }),
      fetchContacts: PropTypes.func,
    }),
  }),
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
