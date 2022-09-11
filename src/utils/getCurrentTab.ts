import Tab = chrome.tabs.Tab

export async function getCurrentTab(): Promise<Tab> {
  let queryOptions = { active: true, lastFocusedWindow: true }
  let [tab] = await chrome.tabs.query(queryOptions)
  return tab
}