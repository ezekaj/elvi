import { ApprovedReposData, DynamicProject } from '@/types/project';

const GIST_RAW_URL = process.env.NEXT_PUBLIC_GIST_RAW_URL;

export async function fetchApprovedRepos(): Promise<ApprovedReposData> {
  if (!GIST_RAW_URL) {
    throw new Error('NEXT_PUBLIC_GIST_RAW_URL environment variable not configured');
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

export function transformToProjects(data: ApprovedReposData): DynamicProject[] {
  return data.approvedRepos.map((repo, index) => ({
    id: `repo-${index}-${repo.name}`,
    title: formatRepoName(repo.name),
    description: repo.description || 'No description available',
    status: 'Completed' as const,
  }));
}

function formatRepoName(name: string): string {
  // Convert "fract_ol" to "Fract Ol" or "learning_sol" to "Learning Sol"
  return name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
