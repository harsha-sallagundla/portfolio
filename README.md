# Lakshmi Sri Harsha Sallagundla - Personal Portfolio

A modern, responsive personal portfolio website for **Lakshmi Sri Harsha Sallagundla**, a third-year B.Tech student in Artificial Intelligence & Machine Learning at Dhanekula Institute of Engineering & Technology.

Designed specifically for showcasing technical projects, skills, workshops, and certifications to recruiters, internship coordinators, and industry professionals.

---

## 📁 Project Structure

```
Portfolio/
├── .nojekyll               # Disables Jekyll on GitHub Pages for pure static serving
├── index.html              # Main semantic HTML5 portfolio webpage
├── css/
│   ├── styles.css          # Primary stylesheet linked via relative path ./css/styles.css
│   └── style.css           # Fallback duplicate stylesheet
├── js/
│   └── main.js             # Navigation spy, mobile menu, filter tabs, copy button & form handler
├── assets/
│   └── images/
│       └── ai-hero-art.svg # Vector artwork representing AI & Neural Network architecture
└── README.md               # Project guide and instructions
```

---

## 🚀 How to Run & Preview the Website Locally

You can run and view the website immediately on your machine using either of the following methods:

### Option 1: Direct Browser Opening (No Setup Required)
1. Open your File Explorer and navigate to:
   ```
   C:\Users\hp\Documents\Portfolio
   ```
2. Double-click on `index.html`.
3. It will open directly in your default web browser (Google Chrome, Microsoft Edge, Firefox, etc.).

### Option 2: Run with Local Python Server (Recommended)
Because Python 3 is installed on your computer, you can run a local development server:
1. Open PowerShell or Command Prompt.
2. Run:
   ```powershell
   cd C:\Users\hp\Documents\Portfolio
   python -m http.server 8000
   ```
3. Open your browser and visit:
   ```
   http://localhost:8000
   ```
4. Press `Ctrl + C` in PowerShell to stop the server when done.

---

## ✏️ How to Add Your GitHub and Project Links (When Ready)

To keep your portfolio completely clean, professional, and ready for applications right now, all placeholder links have been hidden so no "[Placeholder]" text appears publicly.

When your code repositories or prototypes are ready to share:

### 1. Adding Your GitHub Profile
In `index.html`:
- Search for `GitHub Profile (Internally kept; hidden until GitHub URL is provided)`.
- Uncomment the contact card and/or footer icon by removing the `<!--` and `-->` comment tags.
- Update `your-username` with your GitHub profile username.

### 2. Adding Code or Demo Links to Projects
In `index.html` under the `<section id="projects">`:
- Inside any `<article class="project-card">`, add action buttons at the bottom of the card:
  ```html
  <div class="project-footer-actions">
    <a href="https://github.com/your-username/your-repo-name" target="_blank" rel="noopener noreferrer" class="project-btn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px;">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
      Code
    </a>
  </div>
  ```

### 3. Update Graduation Year (When Decided)
- In `index.html` under the Education section, you can add your graduation year whenever you are ready.

---

## 🌐 How to Upload to GitHub & Deploy for Free (GitHub Pages)

Follow these steps to host your portfolio online so anyone on LinkedIn or reading your resume can visit it with a single click:

### Step 1: Install Git (If not already installed)
1. Download and install Git from [git-scm.com](https://git-scm.com/).
2. Verify in PowerShell by typing `git --version`.

### Step 2: Initialize Git Repository
In PowerShell, run:
```powershell
cd C:\Users\hp\Documents\Portfolio
git init
git add .
git commit -m "Initial commit: Personal Portfolio Website"
```

### Step 3: Create a New Repository on GitHub
1. Log in to your account at [github.com](https://github.com).
2. Click the **+** icon in the top-right corner and select **New repository**.
3. Name your repository:
   - For a standard site: `portfolio` or `my-portfolio`
   - Or for a personal root URL: `your-username.github.io` (e.g., `sriharsha.github.io`)
4. Set the repository visibility to **Public**.
5. Do **not** check "Initialize this repository with a README" (you already have one).
6. Click **Create repository**.

### Step 4: Link and Push Your Code
Copy the commands shown by GitHub, or run:
```powershell
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```
*(Replace `your-username` and `your-repo-name` with your actual GitHub username and repository name).*

### Step 5: Enable Free Hosting with GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (tab with gear icon at the top).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment** > **Branch**:
   - Select `main` from the dropdown.
   - Folder should be `/ (root)`.
   - Click **Save**.
5. Wait 1 to 2 minutes. Refresh the page, and GitHub will provide your live website URL (e.g. `https://your-username.github.io/your-repo-name/`).

You can now add this live portfolio link to your LinkedIn profile, resume, and job applications!
