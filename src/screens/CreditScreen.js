import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const CreditScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Text style={styles.appName}>Aplikasi Mobile</Text>
        <Text style={styles.lecturerName}>
          M. Muharrom Al Haromainy, S.Kom., M.Kom.
        </Text>

        <Text style={styles.groupTitle}>Anggota Kelompok</Text>

        <View style={styles.memberContainer}>
          <Text style={styles.memberName}>Kemas Alfin Yazi Bara Mentari</Text>
          <Text style={styles.memberId}>22081010143</Text>
        </View>
        <View style={styles.memberContainer}>
          <Text style={styles.memberName}>Muhammad Rohman Irsyadi</Text>
          <Text style={styles.memberId}>22081010024</Text>
        </View>
        <View style={styles.memberContainer}>
          <Text style={styles.memberName}>Gredy Christian Hendrawan Putra</Text>
          <Text style={styles.memberId}>22081010195</Text>
        </View>
        <View style={styles.memberContainer}>
          <Text style={styles.memberName}>Alden Dzaky Ardiansyah</Text>
          <Text style={styles.memberId}>22081010238</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    paddingTop: 30,
  },
  scrollViewContainer: {
    alignItems: "center",
    padding: 20,
    paddingBottom: 40,
  },
  appName: {
    fontSize: 32,
    fontWeight: "700",
    color: "#2980b9",
    marginBottom: 10,
    textAlign: "center",
  },
  lecturerName: {
    fontSize: 20,
    color: "#34495e",
    textAlign: "center",
    marginBottom: 30,
    fontStyle: "italic",
  },
  groupTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: 20,
    textAlign: "center",
  },
  memberContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6, // For Android shadow
  },
  memberName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2980b9",
  },
  memberId: {
    fontSize: 16,
    color: "#7f8c8d",
    marginTop: 5,
  },
});

export default CreditScreen;
