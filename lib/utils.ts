import { ApiError } from "../types/api";

/**
 * Merge class names
 * @param inputs - The class names to merge
 * @returns The merged class names
 */

export const checkIf401Error = (error: ApiError) => {
  if (error.status === 401) {
    alert('Unauthorized: Please check your credentials.');
    // window.location.href = '/';
  }
}

