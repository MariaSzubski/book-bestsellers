async function api(url) {
  const response = await fetch(url)
  const data = await response.json()

  return data
}

export { api }
