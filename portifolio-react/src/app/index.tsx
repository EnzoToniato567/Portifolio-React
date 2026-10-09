import { StatusBar } from 'expo-status-bar';
import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const githubUrl = 'https://github.com/EnzoToniato567'; // declarei o link do github com uma const

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.name}>Enzo Semenssi Toniato</Text>

        <Image
          source={require('./image/imagem.png')}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.subtitle}>
          Olá! Meu nome é Enzo Semenssi Toniato, tenho 17 anos e sou estudante de Análise e Desenvolvimento de Sistemas, curso proporcionado pela rede SENAI de Jaguariúna. Estou no 3º ano do ensinio médio na escola SESI 356 de Amparo e pretendo seguir na área de desenvolvimento de software, com foco em desenvolvimento web e mobile.
        </Text>
      </View>

      <Pressable onPress={() => Linking.openURL(githubUrl)}>
        <View style={styles.github}>
          <Text style={styles.textGithub}>
            GitHub:
            <Text style={styles.link}>{githubUrl}</Text>
          </Text>
        </View>
      </Pressable>

      <View style={styles.footer}>
        <Text style={styles.textFooter}>© 2026 Enzo Semenssi Toniato. Todos os direitos reservados.</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#d9f1f4',
  },

  name: {
    fontSize: 30,
    color: '#0b6c8d',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  image: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 4,
    borderColor: '#4ecae6',
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
    color: '#1c2f39',
    marginBottom: 18,
  },

  github: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#cfeef5',
    borderRadius: 12,
    marginBottom: 12,
  },

  textGithub: {
    color: '#140b8d',
    fontSize: 15,
    fontWeight: '600',
  },

  link: {
    color: '#036b8d',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 4,
  },

  footer: {
    paddingVertical: 18,
    backgroundColor: '#c1e3ea',
    borderTopWidth: 1,
    borderTopColor: '#9ccad3',
  },

  textFooter: {
    color: '#2d4d5a',
    textAlign: 'center',
    fontSize: 12,
  },
});