# Dynamic GitHub Projects Setup Guide

This guide walks you through setting up the dynamic GitHub portfolio with auto-approval via n8n.

## Quick Overview

```
GitHub repos → n8n (detects new) → Email notification → You click YES/NO → Gist updates → Portfolio updates
```

---

## Step 1: Create GitHub Gist (5 minutes)

1. Go to https://gist.github.com
2. Click **"Create secret gist"**
3. Filename: `approved-repos.json`
4. Content:

```json
{
  "lastUpdated": "2024-01-15T00:00:00Z",
  "approvedRepos": [
    {
      "name": "fract_ol",
      "description": "A graphics programming project that creates graphically beautiful fractals using mathematical algorithms",
      "approvedAt": "2024-01-01T00:00:00Z"
    }
  ],
  "pendingRepos": [],
  "rejectedRepos": []
}
```

5. Click **"Create secret gist"**
6. Click **"Raw"** button and copy the URL
   - Format: `https://gist.githubusercontent.com/ezekaj/{gist_id}/raw/approved-repos.json`

---

## Step 2: Configure Environment (2 minutes)

1. Create `.env` file in project root (or update existing):

```bash
NEXT_PUBLIC_GIST_RAW_URL=https://gist.githubusercontent.com/ezekaj/YOUR_GIST_ID/raw/approved-repos.json
```

2. Replace `YOUR_GIST_ID` with your actual Gist ID from the URL

---

## Step 3: Generate GitHub PAT (3 minutes)

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens
2. Click **"Generate new token"**
3. Settings:
   - Name: `portfolio-n8n`
   - Expiration: 90 days (or longer)
   - Repository access: **Public repositories (read-only)**
   - Permissions → Account → Gists: **Read and write**
4. Click **"Generate token"**
5. Copy and save the token securely

---

## Step 4: Set up n8n Workflow (30-45 minutes)

### Create n8n Account

1. Go to https://n8n.io
2. Sign up for free (5 workflows, 100 executions/month)

### Workflow 1: Scheduled Repo Check

Create a workflow with these nodes:

#### Node 1: Schedule Trigger
- Every 6 hours (or daily)

#### Node 2: HTTP Request - Get GitHub Repos
```
Method: GET
URL: https://api.github.com/users/ezekaj/repos
Headers:
  Accept: application/vnd.github.v3+json
  User-Agent: n8n-portfolio
```

#### Node 3: HTTP Request - Get Current Gist
```
Method: GET
URL: https://api.github.com/gists/YOUR_GIST_ID
Headers:
  Authorization: Bearer YOUR_GITHUB_PAT
```

#### Node 4: Code Node - Compare Repos
```javascript
const allRepos = $('Get GitHub Repos').first().json;
const gistData = $('Get Gist').first().json;
const approvedData = JSON.parse(gistData.files['approved-repos.json'].content);

const approvedNames = approvedData.approvedRepos.map(r => r.name);
const rejectedNames = approvedData.rejectedRepos || [];

const newRepos = allRepos.filter(repo => {
  return !approvedNames.includes(repo.name)
    && !rejectedNames.includes(repo.name)
    && !repo.fork
    && !repo.private;
});

if (newRepos.length === 0) {
  return []; // No new repos
}

return newRepos.map(repo => ({
  json: {
    name: repo.name,
    description: repo.description || 'No description',
    hasNewRepos: true
  }
}));
```

#### Node 5: IF - Has New Repos
- Condition: `{{ $json.hasNewRepos }}` equals `true`

#### Node 6: Send Email
```
To: your-email@gmail.com
Subject: New GitHub Repo: {{ $json.name }}
Body Type: HTML
```

### Workflow 2: Approval Webhook

See original SETUP-DYNAMIC-PROJECTS.md from main branch for full webhook workflow.

---

## Step 5: Test Locally

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open http://localhost:3000/en/portfolio and verify dynamic projects section appears.

---

## Step 6: Deploy

Push to master branch - GitHub Actions will auto-deploy:

```bash
git add .
git commit -m "feat: add dynamic GitHub projects"
git push origin master
```

---

## File Structure

```
types/
└── project.ts              # TypeScript interfaces
lib/
└── github-projects.ts      # Gist fetch service
hooks/
└── useGitHubProjects.ts    # State management hook
app/[locale]/(marketing)/portfolio/
└── page.tsx                # Updated with dynamic projects section
```

---

## Security Notes

1. Keep Gist **private/secret** (not public)
2. Use **fine-grained PAT** with minimal permissions
3. Use **random token** for webhook validation
4. Don't commit `.env` file (already in `.gitignore`)
