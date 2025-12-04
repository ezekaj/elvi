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
      "description": "A graphics programming project that creates graphically beautiful fractals using mathematical algorithms and the MiniLibX library",
      "approvedAt": "2024-01-01T00:00:00Z"
    },
    {
      "name": "learning_sol",
      "description": "Interactive web platform designed for learning Solidity programming language with hands-on examples and tutorials",
      "approvedAt": "2024-01-01T00:00:00Z"
    },
    {
      "name": "auto_scheduling",
      "description": "AI-powered scheduling system using Large Language Models to create intelligent agents that work as digital secretaries",
      "approvedAt": "2024-01-01T00:00:00Z"
    },
    {
      "name": "Rregullo_Tiranen",
      "description": "A civic engagement web portal designed to help citizens of Tirana report and track city issues, promoting community involvement",
      "approvedAt": "2024-01-01T00:00:00Z"
    },
    {
      "name": "push_swap",
      "description": "Advanced algorithm project implementing efficient sorting techniques with stack operations and optimization strategies",
      "approvedAt": "2024-01-01T00:00:00Z"
    },
    {
      "name": "minitalk",
      "description": "Small data exchange program demonstrating inter-process communication using UNIX signals for message transmission",
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

1. Create `.env` file in project root:

```bash
VITE_GIST_RAW_URL=https://gist.githubusercontent.com/ezekaj/YOUR_GIST_ID/raw/approved-repos.json
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
To: elvizekaj02@gmail.com
Subject: New GitHub Repo: {{ $json.name }}
Body Type: HTML
Body: (see email template below)
```

### Email Template

```html
<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; background: #0f172a; color: #e2e8f0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: #1e293b; border-radius: 12px; padding: 32px;">
    <h1 style="color: #22d3ee;">New Repository Detected</h1>

    <div style="background: #0f172a; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h2 style="margin: 0;">{{ $json.name }}</h2>
      <p style="color: #94a3b8;">{{ $json.description }}</p>
    </div>

    <p>Would you like to display this on your portfolio?</p>

    <div style="text-align: center; margin-top: 24px;">
      <a href="YOUR_WEBHOOK_URL?action=approve&repo={{ $json.name }}&token=YOUR_SECRET"
         style="background: linear-gradient(135deg, #22d3ee, #a855f7); color: white; padding: 12px 32px; border-radius: 8px; text-decoration: none; margin-right: 12px;">
        ✓ YES
      </a>
      <a href="YOUR_WEBHOOK_URL?action=reject&repo={{ $json.name }}&token=YOUR_SECRET"
         style="background: #374151; color: #f87171; padding: 12px 32px; border-radius: 8px; text-decoration: none;">
        ✗ NO
      </a>
    </div>
  </div>
</body>
</html>
```

### Workflow 2: Approval Webhook

#### Node 1: Webhook
```
HTTP Method: GET
Path: approve-repo
```

#### Node 2: Code - Validate & Process
```javascript
const { action, repo, token } = $input.first().json.query;

if (token !== 'YOUR_SECRET_TOKEN') {
  throw new Error('Invalid token');
}

return [{
  json: { action, repoName: repo }
}];
```

#### Node 3: HTTP Request - Get Current Gist
(Same as Workflow 1)

#### Node 4: Code - Update Gist Data
```javascript
const gistData = $('Get Gist').first().json;
const currentData = JSON.parse(gistData.files['approved-repos.json'].content);
const { action, repoName } = $('Validate').first().json;

if (action === 'approve') {
  currentData.approvedRepos.push({
    name: repoName,
    description: 'Approved via email',
    approvedAt: new Date().toISOString()
  });
} else {
  currentData.rejectedRepos = currentData.rejectedRepos || [];
  currentData.rejectedRepos.push(repoName);
}

currentData.lastUpdated = new Date().toISOString();

return [{
  json: {
    files: {
      'approved-repos.json': {
        content: JSON.stringify(currentData, null, 2)
      }
    }
  }
}];
```

#### Node 5: HTTP Request - Update Gist
```
Method: PATCH
URL: https://api.github.com/gists/YOUR_GIST_ID
Headers:
  Authorization: Bearer YOUR_GITHUB_PAT
Body: {{ JSON.stringify($json) }}
```

#### Node 6: Respond to Webhook
```
Response Body: Thank you! The repository has been {{ $('Validate').first().json.action === 'approve' ? 'added to' : 'removed from' }} your portfolio.
```

---

## Step 5: Test Locally

```bash
# Install dependencies
npm install

# Create .env file with your Gist URL
echo "VITE_GIST_RAW_URL=https://gist.githubusercontent.com/ezekaj/YOUR_GIST_ID/raw/approved-repos.json" > .env

# Run dev server
npm run dev
```

Open http://localhost:5173/projects and verify projects load from Gist.

---

## Step 6: Deploy

```bash
npm run deploy
```

---

## Troubleshooting

### Projects not loading
1. Check browser console for errors
2. Verify Gist URL is correct in `.env`
3. Check if Gist is accessible (not private with wrong permissions)

### n8n workflow not triggering
1. Check workflow is active (toggle on)
2. Verify GitHub PAT has gist permissions
3. Check execution logs in n8n

### Approval emails not working
1. Verify email credentials in n8n
2. Check spam folder
3. Test email node independently

---

## File Structure

```
src/
├── types/
│   └── project.ts          # TypeScript interfaces
├── services/
│   └── github.ts           # Gist fetch service
├── hooks/
│   └── useGitHubProjects.ts # State management hook
└── pages/
    └── ProjectsPage.tsx    # Updated to use hook
```

---

## Security Notes

1. Keep Gist **private/secret** (not public)
2. Use **fine-grained PAT** with minimal permissions
3. Use **random token** for webhook validation
4. Don't commit `.env` file (already in `.gitignore`)
