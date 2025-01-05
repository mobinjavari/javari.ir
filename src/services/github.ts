import siteConfig from '@/config/site.config';

const GITHUB_API = 'https://api.github.com';
const { username, token } = siteConfig.github;

interface GitHubStats {
  stars: number
  repos: number
  contributions: number
}

export interface PinnedRepo {
  name: string
  description: string
  url: string
  stargazerCount: number
  forkCount: number
  primaryLanguage: {
    name: string
    color: string
  }
  languages: {
    nodes: Array<{
      name: string
    }>
  }
}

export interface LanguageStat {
  name: string
  color: string
  percentage: number
}

interface RepositoryNode {
  stargazerCount: number
  languages?: {
    edges?: Array<{
      size: number
      node: {
        name: string
        color: string
      }
    }>
  }
}

// Update the functions to use mock data in development
export async function fetchGitHubStats(): Promise<GitHubStats> {
  const query = `
    query {
      user(login: "${username}") {
        repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
          totalCount
          nodes {
            stargazerCount
          }
        }
        contributionsCollection {
          totalCommitContributions
          totalIssueContributions
          totalPullRequestContributions
          totalPullRequestReviewContributions
          restrictedContributionsCount
          totalRepositoryContributions
          totalRepositoriesWithContributedCommits
          totalRepositoriesWithContributedIssues
          totalRepositoriesWithContributedPullRequests
          totalRepositoriesWithContributedPullRequestReviews
        }
      }
    }
  `

  const response = await fetch(`${GITHUB_API}/graphql`, {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query })
  })

  const data = await response.json()
  const { repositories, contributionsCollection } = data.data.user

  const totalStars = repositories.nodes.reduce((acc: number, repo: RepositoryNode) => acc + repo.stargazerCount, 0)
  const totalContributions = Object.values(contributionsCollection).reduce((a: number, b: unknown) => a + (b as number), 0)

  return {
    stars: totalStars,
    repos: repositories.totalCount,
    contributions: totalContributions
  }
}

export async function fetchPinnedRepos(): Promise<PinnedRepo[]> {
  const query = `
    query {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage {
                name
                color
              }
              languages(first: 3) {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    }
  `

  const response = await fetch(`${GITHUB_API}/graphql`, {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query })
  })

  const data = await response.json()
  return data.data.user.pinnedItems.nodes
}

export async function fetchLanguageStats(): Promise<LanguageStat[]> {
  const query = `
    query {
      user(login: "${username}") {
        repositories(ownerAffiliations: OWNER, isFork: false, first: 100, orderBy: {field: PUSHED_AT, direction: DESC}) {
          nodes {
            name
            languages(first: 100) {
              edges {
                size
                node {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  `

  const response = await fetch(`${GITHUB_API}/graphql`, {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query })
  })

  const data = await response.json()
  const repos = data.data.user.repositories.nodes

  // Calculate language stats
  const languageStats: { [key: string]: { name: string; color: string; size: number } } = {}
  let totalBytes = 0

  repos.forEach((repo: RepositoryNode) => {
    if (!repo.languages?.edges) return

    repo.languages.edges.forEach(({ size, node }: { size: number; node: { name: string; color: string } }) => {
      if (!languageStats[node.name]) {
        languageStats[node.name] = {
          name: node.name,
          color: node.color,
          size: 0,
        }
      }
      languageStats[node.name].size += size
      totalBytes += size
    })
  })

  // Convert to array and calculate percentages
  return Object.values(languageStats)
    .map(lang => ({
      name: lang.name,
      color: lang.color,
      percentage: (lang.size / totalBytes) * 100,
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 8) // فقط 8 زبان پراستفاده رو نشون میده
}

// ... rest of the GitHub API functions
