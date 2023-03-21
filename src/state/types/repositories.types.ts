export interface Repo {
  name: string;
  link: string;
  description: string;
}

export interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: Repo[];
}

interface searchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

export enum ActionType {
  SEARCH_REPOSITORIES = "search_repositories",
  SEARCH_REPOSITORIES_SUCCESS = "search_repositories_success",
  SEARCH_REPOSITORIES_ERROR = "search_repositories_error",
}

interface searchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: Repo[];
}

interface searchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | searchRepositoriesAction
  | searchRepositoriesSuccessAction
  | searchRepositoriesErrorAction;
