# ABTalks — Student Challenge

> **Build daily. Prove your progress. Ship what you started.**

ABTalks is a student-focused challenge platform designed to turn learning and building into a consistent daily habit.

Instead of simply tracking what students *plan* to do, ABTalks focuses on what they actually **Build, Ship, and Prove** every day.

## 🚀 Live Demo

🌐 **Live Website:**  
https://abtalks-redesign-threemusketechs.vercel.app/

## 📌 The Problem

Students often start learning projects, coding challenges, or personal goals with high motivation but struggle to stay consistent.

Traditional productivity apps mainly track:

- Tasks
- To-do lists
- Goals
- Completion percentages

But they don't always answer the most important question:

> **"Did you actually build and ship something today?"**

ABTalks is built around this idea of **proof-based consistency**.

## 💡 The Solution

ABTalks turns a long-term challenge into a daily journey.

Every day has a specific mission. Students complete the mission, build something tangible, and submit proof of their progress.

The platform then visualizes that progress through dashboards, streaks, timelines, and consistency analytics.

## ✨ Key Features

### 🎯 Daily Missions

Each challenge day provides a focused building task with:

- Mission title
- Description
- Required skills
- Estimated time
- Daily completion flow

### 📊 Progress Dashboard

The dashboard gives students a complete overview of their journey:

- Challenge progress
- Current streak
- Daily focus
- GitHub submissions
- LinkedIn posts
- Consistency trend
- Recent progress

### 🔥 Streak & Consistency Tracking

ABTalks focuses on consistency rather than perfection.

Students can see how regularly they show up and ship their work throughout the challenge.

### 🗓️ Journey Timeline

The journey page provides a chronological view of completed challenge days.

Each day records:

- Day number
- Date
- Project / mission
- GitHub proof
- LinkedIn proof

### 📈 Consistency Analytics

The dashboard visualizes progress over time so students can understand their building momentum instead of relying only on a simple completion percentage.

### 🧠 Community Intel

Students can explore experiences from other participants and ask questions about staying consistent, handling college workload, missing days, and completing long challenges.

### 🔍 Day-Level Details

Individual challenge days can be opened to view the specific work associated with that day, making the entire journey easier to review and understand.

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **JavaScript / TypeScript**
- **Git & GitHub**
- **Vercel**

## 🏗️ Project Structure

```text
src/
├── components/
│   ├── dashboard/
│   ├── landing/
│   └── ui/
│
├── data/
│   └── mockData.ts
│
├── lib/
│   ├── storage.ts
│   └── utils.ts
│
├── pages/
│   ├── DashboardPage.tsx
│   ├── DayPage.tsx
│   ├── JourneyPage.tsx
│   ├── LandingPage.tsx
│   └── OnboardingPage.tsx
│
├── App.tsx
├── index.css
└── main.tsx
