import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";

const DashboardScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts buat API
  const fetchContacts = () => {
    axios
      .get("http://172.20.10.5/api/read.php")
      .then((response) => setContacts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Delete contact
  const deleteContact = (id) => {
    Alert.alert(
      "Konfirmasi Hapus",
      "Apakah Anda yakin ingin menghapus kontak ini?",
      [
        {
          text: "Batal",
          style: "cancel",
        },
        {
          text: "Hapus",
          style: "destructive",
          onPress: () => {
            axios
              .post("http://172.20.10.5/api/delete.php", { id })
              .then(() => fetchContacts())
              .catch((error) => console.log(error));
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Kontak</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{item.name}</Text>
              <Text style={styles.contactPhone}>{item.phone}</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() =>
                  navigation.navigate("AddEdit", {
                    contact: item,
                    fetchContacts,
                  })
                }
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteContact(item.id)}
              >
                <Text style={styles.buttonText}>Hapus</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.addButtonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("AddEdit", { fetchContacts })}
        >
          <Text style={styles.addButtonText}>Tambah Kontak</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.creditButton}
        onPress={() => navigation.navigate("Credit")}
      >
        <Text style={styles.creditButtonText}>Credit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 30,
  },
  contactItem: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 4, // shadow effect buat androit gas
    shadowColor: "#000", // buat ios woke
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#34495e",
  },
  contactPhone: {
    fontSize: 14,
    color: "#7f8c8d",
    marginTop: 4,
  },
  buttons: {
    flexDirection: "row",
    gap: 8,
  },
  editButton: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  addButtonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#2ecc71",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 12,
    shadowColor: "#27ae60",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  creditButton: {
    marginTop: 20,
    backgroundColor: "#34495e",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  creditButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default DashboardScreen;
