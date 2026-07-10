# StoreIt — Storage & File Sharing Platform

<div align="center">
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
</div>

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)

## 🤖 Introduction

A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with Next.js 15 and the Appwrite Node SDK, utilizing advanced features for seamless file management.

## ⚙️ Tech Stack

- React 19
- Next.js 15
- Appwrite
- TailwindCSS
- ShadCN
- TypeScript

## 🔋 Features

- **User Authentication with Appwrite** — Signup, login, and logout using Appwrite's authentication system.
- **File Uploads** — Upload documents, images, videos, and audio files seamlessly.
- **View & Manage Files** — Browse uploaded files, view in a new tab, rename, or delete.
- **Download Files** — Instantly download any uploaded file.
- **File Sharing** — Share files with other users for easy collaboration.
- **Dashboard** — Dynamic dashboard showing total/consumed storage, recent uploads, and file summaries grouped by type.
- **Global Search** — Quickly find files and shared content across the platform.
- **Sorting Options** — Sort files by date, name, or size.
- **Modern Responsive Design** — Clean, minimalist UI with full responsiveness across all devices.

## 🤸 Quick Start

**Prerequisites**

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Installation**

```bash
npm install
```

**Set Up Environment Variables**

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=""
NEXT_PUBLIC_APPWRITE_DATABASE=""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
NEXT_APPWRITE_KEY=""
```

Replace the values with your actual Appwrite credentials from [appwrite.io](https://appwrite.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).