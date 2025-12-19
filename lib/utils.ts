import { ApiError } from "../types/api";

export const checkIf401Error = (error: ApiError) => {
  if (error.status === 401) {
    alert('Unauthorized: Please check your credentials.');
    // window.location.href = '/';
  }
}

