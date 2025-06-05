# 📱 Dispositivos Móveis
Repositório dedicado às práticas da disciplina **Programação de Dispositivos Móveis** do 5º período do curso de **Sistemas para Internet**.

## 🎯 Objetivo:
Aplicar técnicas e práticas para o desenvolvimento de aplicativos móveis utilizando **React Native**.

## 🛠 Tecnologias Utilizadas:
- ⚛️ **React Native** - Desenvolvimento mobile
- 🚀 **Expo** - Execução e facilitação
- 🌐 **Firebase** - Banco de dados NoSQL com serviço Firestore

## 🗂️ Estrutura do Projeto:



## 🧑‍💻 Como executar o Projeto:

Antes de começar, verifique se o Node.js e o gerenciador de pacotes (npm ou yarn) estão instalados na sua máquina. Para conferir as versões instaladas, execute os comandos abaixo no terminal:

```sh
   node -v
   ```
```sh
   npm -v
   ```
   ou
```sh
   yarn --version
   ```
Se ainda não estiverem instalados, você pode baixá-los em: https://nodejs.org/.

Em seguida, instale o Expo CLI (caso ainda não tenha). O Expo CLI é uma ferramenta de linha de comando essencial para desenvolver, testar e realizar o deploy de aplicativos feitos com React Native.

```sh
   npm install -g expo-cli
   ```
   ou
```sh
   yarn global add expo-cli
   ```

⚠️ Importante:
O aplicativo utiliza variáveis de ambiente para configurar o acesso ao Firebase. Crie um arquivo .env na raiz do projeto com a seguinte estrutura:

- API_KEY
- AUTH_DOMAIN
- PROJECT_ID
- STORAGE_BUCKET
- MESSAGING_SENDER_ID
- APP_ID

Adicione os dados do seu projeto Firebase, e lembre-se de manter este arquivo seguro.

💡 Dica:
Adicione o arquivo .env ao .gitignore

1. Clone o repositório:
   ```sh
   git clone https://github.com/nayarasn/Dispositivos_Moveis.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd aula03
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
   ou
```sh
   yarn install
   ```
4. Inicie o projeto:
```sh
   npx expo start
   ```
   ou
```sh
   yarn start
   ```

▶️ Você pode executar o projeto em diferentes ambientes:

- Android device/emulator: roda o app em dispositivo físico Android conectado ou em um emulador.
- iOS simulator: executa no simulador iOS (disponível somente em macOS).
- Web browser: abre a versão web do app (com limitações em funcionalidades nativas).

💡 Para dispositivos físicos, certifique-se de ter o app Expo Go instalado e use-o para escanear o QR code exibido no Expo Developer Tools.

## 📌 Acompanhe o projeto:

EM DESENVOLVIMENTO