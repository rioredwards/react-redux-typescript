import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../types/repositories.types";
import { Action, Repo } from "../types/repositories.types";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const repos: Repo[] = data.objects.map((result: any) => {
        const repo = {
          name: result.package.name,
          link: result.package.links.npm,
        };
        return repo;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: repos,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
