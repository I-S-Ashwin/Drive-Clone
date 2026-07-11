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
4. [Quick Start & Local Run](#quick-start--local-run)
5. [Appwrite Database Setup Checklist](#appwrite-database-setup-checklist)
6. [Keyboard Shortcuts](#keyboard-shortcuts)

## 🤖 Introduction

A storage management and file sharing platform that lets users effortlessly upload, organize, and share files. Built with Next.js 15, Appwrite Node SDK, TailwindCSS, and framer-motion animations.

## ⚙️ Tech Stack

- React 19
- Next.js 15
- Appwrite Cloud
- TailwindCSS & ShadCN
- Framer Motion (Page Transitions)
- TypeScript

## 🔋 Features

- **User Authentication** — Email + OTP session creation.
- **File Uploads & Previews** — Inline previews for images, audio (pulsing waveform), video, and PDFs.
- **Dark Mode Support** — Seamless transitions, custom toggle switch, adapts across all user layout areas.
- **Dashboard Summary** — Visual radial storage consumption progress and file count breakdowns.
- **Global Search & Filters** — Debounced search queries and sort filters.
- **Keyboard Shortcuts** — Quick triggers for navigations, search, and uploading.

---

## 🤸 Quick Start & Local Run

**Prerequisites**

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**1. Clone the project and install dependencies**
```bash
npm install
```

**2. Set Up Environment Variables**

Create a `.env.local` file in your project root folder:
```env
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT="your_project_id"
NEXT_PUBLIC_APPWRITE_DATABASE="your_database_id"
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION="users"
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION="files"
NEXT_PUBLIC_APPWRITE_BUCKET="your_bucket_id"
NEXT_APPWRITE_KEY="your_api_secret_key"
```

**3. Run Development Server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📋 Appwrite Database Setup Checklist

To connect the application correctly, log in to your [Appwrite Cloud Console](https://cloud.appwrite.io/) and configure these collections/tables:

### 1. Database & Collections (Tables)
Create a Database and add **two tables** (make sure the Table IDs match your environment variables):
1. **`users`**
2. **`files`**

### 2. Table Schemas (Columns)

Define the following columns (attributes) inside each table. **Ensure exact capitalization**:

#### Columns inside `users` table:
* `fullName` — type: **String** (Size: 256, Required: Yes)
* `email` — type: **Email** (Required: Yes)
* `avatar` — type: **URL** (Required: Yes)
* `accountId` — type: **String** (Size: 256, Required: Yes)

#### Columns inside `files` table:
* `name` — type: **String** (Size: 256, Required: Yes)
* `type` — type: **String** (Size: 50, Required: Yes)
* `extension` — type: **String** (Size: 20, Required: Yes)
* `url` — type: **URL** (Required: Yes)
* `size` — type: **Integer** (Required: Yes)
* `accountId` — type: **String** (Size: 256, Required: Yes)
* `bucketFileId` — type: **String** (Size: 256, Required: Yes)
* `users` — type: **String** (Required: No, **Check "Array/List" Option**)
* `owner` — type: **Relationship** (Required: Yes)
  * Select **Many to One** (Many files belong to one user)
  * Related table: `users`
  * Column key: `owner`
  * On delete: **Set Null**

### 3. Collection Permissions (CRITICAL)
In Appwrite, select each table, go to the **Settings** tab, and configure the permissions:

* **`users` Table Settings**:
  * Under **Permissions**, click **Add Role** -> Select **Any** (or **All Users**)
  * Grant: **Read** permission. Save.
* **`files` Table Settings**:
  * Under **Permissions**, click **Add Role** -> Select **Any** (or **All Users**)
  * Grant: **Read**, **Create**, **Update**, **Delete** permissions. Save.

---

## ⌨️ Keyboard Shortcuts

Speed up navigation using these global hotkeys:

* `Ctrl + K` / `Cmd + K` — Focus search input.
* `Ctrl + U` / `Cmd + U` — Click and trigger file upload.
* `Ctrl + 1` — Go to **Dashboard** page.
* `Ctrl + 2` — Go to **Documents** list.
* `Ctrl + 3` — Go to **Images** list.
* `Ctrl + 4` — Go to **Media** list.
* `Ctrl + 5` — Go to **Others** list.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).