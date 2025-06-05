# 📱 Dispositivos Móveis
Repositório dedicado às práticas da disciplina **Programação de Dispositivos Móveis** do 5º período do curso de **Sistemas para Internet**.

## 🎯 Objetivo:
Aplicar técnicas e práticas para o desenvolvimento de aplicativos móveis utilizando **React Native**.

## 🛠 Tecnologias Utilizadas:
- ⚛️ **React Native** - Framework para desenvolvimento mobile em JavaScript
- 🚀 **Expo** - Plataforma para facilitar o desenvolvimento e deploy de apps React Native
- 🌐 **Firebase** - Backend em nuvem com banco NoSQL Firestore

## 🗂️ Estrutura do Projeto:

- **Aula01:** Ambientação com a tecnologia
- **Aula02:** Projeto com aplicação de conceitos básicos
- **Aula03:** Projeto completo seguindo a estrutura abaixo:

```
/  
├── src/  
│   ├── config/                  
│   │   └── firebaseConfig.js   # Configuração do Firebase Database 
│   ├── context/                
│   │   └── AuthContext.js      # Contexto de Firebase Autenticação  
│   ├── navigation/              
│   │   └── AppNavigation.js    # Definição das rotas de navegação  
│   ├── screens/                 
│   │   ├── CursoFormScreen.js      # Tela de login  
│   │   ├── DetailsScreen.js   # Tela de cadastro  
│   │   ├── HomeScreen.js       # Tela inicial  
│   │   ├── LoginScreen.js    # Tela de detalhes do curso  
│   │   ├── ProfileScreen.js  # Tela de cadastro/edição de cursos  
│   │   └── RegisterScreen.js    # Tela de perfil do usuário  
│   └── services/                
│       └── CursoService.js     # Serviço para operações de cursos 
├── App.js                      # Arquivo principal do aplicativo  
├── index.js                    # Ponto de entrada do React Native   
├── package.json                # Gerenciamento de dependências e scripts  
├── readme.md                   # Documentação do projeto  

```


## 🧑‍💻 Como Executar o Projeto:

### 1. Verifique se o Node.js e npm/yarn estão instalados:

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

### 2. Instale o Expo CLI (caso ainda não tenha):

```sh
   npm install -g expo-cli
   ```
   ou
```sh
   yarn global add expo-cli
   ```

### 3. Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

- API_KEY
- AUTH_DOMAIN
- PROJECT_ID
- STORAGE_BUCKET
- MESSAGING_SENDER_ID
- APP_ID

⚠️ Importante: Não compartilhe o arquivo .env e adicione-o ao .gitignore.

### 4. Clone o repositório e instale as dependências:

Clone o repositório:
   ```sh
   git clone https://github.com/nayarasn/Dispositivos_Moveis.git
   ```
Acesse a pasta do projeto:
   ```sh
   cd aula03
   ```
Instale as dependências:
   ```sh
   npm install
   ```
   ou
```sh
   yarn install
   ```

### 5. Inicie o projeto:

```sh
   npx expo start
   ```
   ou
```sh
   yarn start
   ```

### 6. Execute o projeto:
▶️ Você pode executar o projeto em diferentes ambientes:

- **Android device/emulator:** roda o app em dispositivo físico Android ou emulador.
- **iOS simulator:** disponível apenas em macOS.
- **Web browser:** versão web do app (funcionalidades nativas limitadas).

💡 Para dispositivos físicos, utilize o app **Expo Go** para escanear o QR code exibido no Expo Developer Tools.
 
 <!--
## 📌 Acompanhe o projeto:
EM DESENVOLVIMENTO
-->