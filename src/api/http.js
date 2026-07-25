import axios from 'axios'

/**
 * Shared Axios instance.
 * Centralizing this makes it trivial to add interceptors,
 * timeouts, or base URLs later without touching every call site.
 */
const http = axios.create({
  timeout: 15000
})

export default http
