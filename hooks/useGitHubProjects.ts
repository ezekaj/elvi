'use client';

import { useState, useEffect, useCallback } from 'react';
import { fetchApprovedRepos, transformToProjects } from '@/lib/github-projects';
import { ProjectsState } from '@/types/project';

const CACHE_KEY = 'portfolio-projects-cache';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export function useGitHubProjects(): ProjectsState & { refetch: () => void } {
  const [state, setState] = useState<ProjectsState>({
    projects: [],
    isLoading: true,
    error: null,
    lastFetched: null,
  });

  const fetchProjects = useCallback(async (forceRefresh = false) => {
    // Check cache first (unless force refresh)
    if (!forceRefresh && typeof window !== 'undefined') {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setState({
              projects: data,
              isLoading: false,
              error: null,
              lastFetched: new Date(timestamp),
            });
            return;
          }
        } catch {
          // Invalid cache, continue to fetch
          localStorage.removeItem(CACHE_KEY);
        }
      }
    }

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const reposData = await fetchApprovedRepos();
      const projects = transformToProjects(reposData);

      // Update cache
      if (typeof window !== 'undefined') {
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: projects,
          timestamp: Date.now(),
        }));
      }

      setState({
        projects,
        isLoading: false,
        error: null,
        lastFetched: new Date(),
      });
    } catch (error) {
      console.error('Failed to fetch projects:', error);

      // Try to use cached data as fallback
      if (typeof window !== 'undefined') {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          try {
            const { data } = JSON.parse(cached);
            setState({
              projects: data,
              isLoading: false,
              error: 'Using cached data - could not refresh',
              lastFetched: null,
            });
            return;
          } catch {
            // Invalid cache
          }
        }
      }

      setState({
        projects: [],
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to load projects',
        lastFetched: null,
      });
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const refetch = useCallback(() => {
    fetchProjects(true);
  }, [fetchProjects]);

  return { ...state, refetch };
}
