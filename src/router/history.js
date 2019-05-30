import { createBrowserHistory } from 'history'

const supportsHistory = 'pushState' in window.history

export default createBrowserHistory({
  keyLength: 12,
  forceRefresh: !supportsHistory
})
