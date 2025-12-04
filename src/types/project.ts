export interface ApprovedRepo {
  name: string;
  description: string;
  approvedAt: string;
}

export interface ApprovedReposData {
  lastUpdated: string;
  approvedRepos: ApprovedRepo[];
  pendingRepos: string[];
  rejectedRepos: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'Active' | 'Completed' | 'Development';
}

export interface ProjectsState {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  lastFetched: Date | null;
}
