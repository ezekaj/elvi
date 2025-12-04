import { ApprovedReposData, Project, ApprovedRepo } from '../types/project';

const GIST_RAW_URL = import.meta.env.VITE_GIST_RAW_URL;

export async function fetchApprovedRepos(): Promise<ApprovedReposData> {
  if (!GIST_RAW_URL) {
    throw new Error('VITE_GIST_RAW_URL environment variable not configured');
  }

  // Add cache-busting query param to avoid browser caching
  const url = `${GIST_RAW_URL}?t=${Date.now()}`;

  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch approved repos: ${response.status}`);
  }

  return response.json();
}

export function transformToProjects(data: ApprovedReposData): Project[] {
  return data.approvedRepos.map((repo, index) => ({
    id: `repo-${index}-${repo.name}`,
    title: formatRepoName(repo.name),
    description: repo.description || 'No description available',
    status: determineStatus(repo),
  }));
}

function formatRepoName(name: string): string {
  // Convert "fract_ol" to "Fract Ol" or "learning_sol" to "Learning Sol"
  return name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function determineStatus(_repo: ApprovedRepo): Project['status'] {
  // Could be enhanced later with GitHub API metadata
  // For now, default to 'Completed'
  return 'Completed';
}
