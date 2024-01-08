import { StyleSheet, Text, View, Image } from "react-native";
import ScreenWrapper from "../../components/screenWrapper";
import BackButton from "../../components/backButton";

export default function About() {
  return (
    <ScreenWrapper>
      <View style={styles.Bg}>
        <View style={styles.backbuton}>
          <BackButton />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/images/tioganteng.jpg")}
            className="w-40 h-80"
            style={styles.photo}
          />
          <Image
            source={require("../../assets/images/tioganteng2.jpg")}
            className="w-40 h-80"
            style={styles.photo}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text
              style={{ fontSize: 26, fontWeight: "Bold", textAlign: "center" }}
            >
              About Me
            </Text>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Singkat saja panggil saya tio, saya seorang Programmer di bidang
              Web (Laravel, React.js) dan di bidang Mobile (ReactNative), Hobi
              saya nonton Anime dan Baca Komik, Sekarang saya Semester 5 di
              itenas
            </Text>
          </View>
        </View>
        <View style={styles.spacing}></View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  spacing: {
    paddingVertical: 78,
  },
  photo: {
    margin: 20,
    borderRadius: 100, // Mengubah radius menjadi setengah dari diameter untuk membuatnya lebih konsisten
  },
  backbuton: {
    marginHorizontal: 15,
    marginVertical: 13,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  Bg: {
    backgroundColor: "#ccf0e0",
  },
});
