/**
 * Gets the repositories of the user from Github
 */
import axios from './instance'

/**
 * Github repos request/response handler
 */
export async function getRepos(username) {
  const requestURL = `/users/${username}/repos?type=all&sort=updated`

  try {
    return await axios.get(requestURL)
  } catch (err) {
    throw err
  }
}
