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

export interface DynamicProject {
  id: string;
  title: string;
  description: string;
  status: 'Active' | 'Completed' | 'Development';
}

export interface ProjectsState {
  projects: DynamicProject[];
  isLoading: boolean;
  error: string | null;
  lastFetched: Date | null;
}
