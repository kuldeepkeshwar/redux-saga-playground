async function fetchUsers() {
  return await fetch("https://jsonplaceholder.typicode.com/users").then(resp =>
    resp.json()
  );
}

export { fetchUsers };
