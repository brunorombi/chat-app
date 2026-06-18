# 💬 ChatApp - Conecte-se em Tempo Real

![ChatApp Demo](https://img.shields.io/badge/demo-online-brightgreen?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge\&logo=mongodb\&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge\&logo=node.js\&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge\&logo=socket.io\&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge\&logo=daisyui\&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge\&logo=JSON%20web%20tokens\&logoColor=white)

---

## 🚀 Demo ao Vivo

👉 https://chat-app-3iz4.onrender.com/

### 🔑 Contas de Teste

| E-mail                                        | Senha  |
| --------------------------------------------- | ------ |
| [test1@example.com](mailto:test1@example.com) | 123456 |
| [test2@example.com](mailto:test2@example.com) | 123456 |

💡 Abra duas abas para testar o chat em tempo real.

---

## 📸 Preview da Aplicação

### 🖥️ Tela de Login e SignUp

<img width="1200" height="720" alt="tela-login" src="https://github.com/user-attachments/assets/4f7b528a-1be7-4d93-97e0-081074da9796" />
<img width="1200" height="720" alt="tela-login" src="https://github.com/user-attachments/assets/afd0d511-ba8e-492a-b897-6bbcb6a5455e" />

---

### 💬 Tela de Chat

<img width="1600" height="720" alt="chat-screen" src="https://github.com/user-attachments/assets/06531a06-7a25-4f2a-befc-8dc68c3bc9df" />

---

### 🎨 Temas e Perfil

<img width="1200" height="815" alt="image" src="https://github.com/user-attachments/assets/5143434c-173a-433d-8dde-e8b6eef73816" />
<img width="1200" height="855" alt="image" src="https://github.com/user-attachments/assets/80a1275d-a802-43ec-8b77-e9f2d053202f" />


---

## 📋 Sobre o Projeto

O **ChatApp** é uma aplicação full-stack de mensagens em tempo real com foco em:

* Performance ⚡
* Segurança 🔐
* UX moderna 🎯

---

## ✨ Funcionalidades

* 🔐 Autenticação com JWT (cookies HttpOnly)
* 💬 Chat em tempo real (Socket.io)
* 🎨 32 temas (DaisyUI)
* 🖼️ Upload de imagens (Cloudinary)
* 👥 Status online/offline
* 📱 Responsivo
* ⚡ Zustand (estado global)
* 🛡️ Validação com Mongoose

---

## 🛠️ Stack

### Backend

* Node.js
* Express
* MongoDB + Mongoose
* Socket.io
* JWT
* Cloudinary
* Bcrypt

### Frontend

* React
* Vite
* Zustand
* Tailwind + DaisyUI
* Socket.io-client
* React Router

---

## 🔐 Configuração de Ambiente

### 1. Criar `.env`

Crie um arquivo `.env` dentro da pasta **backend**:

```bash
cp .env.example .env
```

---

### 2. Exemplo de `.env`

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001

JWT_SECRET=your_super_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
```

---

### 3. MongoDB Atlas

1. Crie uma conta
2. Crie um cluster
3. Vá em **Database → Connect → Drivers**
4. Copie a connection string
5. Substitua no `MONGODB_URI`

Exemplo:

```env
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/chat_db
```

---

### 4. Cloudinary

1. Crie conta em https://cloudinary.com
2. Vá no Dashboard
3. Copie:

   * Cloud Name
   * API Key
   * API Secret
4. Cole no `.env`

---

⚠️ Nunca suba seu `.env` no GitHub.

---

## ⚙️ Rodando o Projeto

```bash
# clone
git clone https://github.com/seu-usuario/chat-app.git

cd chat-app

# backend
cd backend
npm install
npm run dev

# frontend
cd ../frontend
npm install
npm run dev
```

---

## 📌 Melhorias Futuras

* Status de "digitando..."
* Notificações 🔔
* Tela de perfil do outro contato(Receiver)
* Ajustes no servidor websocket ao fazer o refresh

---

## 👨‍💻 Autor

Bruno Rombi

---
