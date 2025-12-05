# GitHub Repository Setup Guide

## Step 1: Install Git

### For Windows:
1. Download Git from: https://git-scm.com/download/win
2. Run the installer and follow the installation wizard
3. Use default settings (recommended)
4. After installation, restart your terminal/PowerShell

### Verify Installation:
```bash
git --version
```

## Step 2: Configure Git (First Time Only)

Set your name and email:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 3: Initialize Git Repository

Navigate to your project directory:
```bash
cd "D:\Downloads\HIMCS SWS"
```

Initialize git:
```bash
git init
```

## Step 4: Add All Files

```bash
git add .
```

## Step 5: Create Initial Commit

```bash
git commit -m "Initial commit: HIMCS SWS project"
```

## Step 6: Add Remote Repository

```bash
git remote add origin https://github.com/sr2913732-del/college.git
```

## Step 7: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

**Note:** If you're prompted for credentials:
- Username: Your GitHub username
- Password: Use a Personal Access Token (not your GitHub password)
  - Create token at: https://github.com/settings/tokens
  - Select scope: `repo` (full control of private repositories)

## Alternative: Using GitHub Desktop

If you prefer a GUI:
1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. Click "Add" → "Add Existing Repository"
4. Select the "HIMCS SWS" folder
5. Click "Publish repository" and select the remote repository

## Troubleshooting

### If you get "repository not found" error:
- Make sure the repository exists at: https://github.com/sr2913732-del/college
- Check that you have write access to the repository
- Verify the repository URL is correct

### If you get authentication errors:
- Use a Personal Access Token instead of password
- Or set up SSH keys for authentication

### To update repository later:
```bash
git add .
git commit -m "Your commit message"
git push
```

