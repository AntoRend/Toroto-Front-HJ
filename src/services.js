const URL_BASE = 'http://toroto-api-hj.mybluemix.net/'

function register(data) {
  const URL = `${URL_BASE}users/signup`;
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
  })
}

function logIn(data) {
  const URL = `${URL_BASE}auth/login`;
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
  })
}


function getUsers(token) {
  const URL = `${URL_BASE}users`;
  return fetch(URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": token
    },
    mode: "cors",
  })
}

function getUser(token, id) {
  const URL = `${URL_BASE}users/${id}`;
  return fetch(URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": token
    },
    mode: "cors",
  })
}

function getAdmin(token, id) {
  const URL = `${URL_BASE}administrators/${id}`;
  return fetch(URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": token
    },
    mode: "cors",
  })
}

function updateSubscription (data, token, id) {
  const URL = `${URL_BASE}users/subscriptions/${id}`
  return fetch(URL, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
    "Content-type": "application/json",
    "Authorization": token
    },
    mode: "cors"
  })
}

  
  export { 
    register, 
    logIn, 
    getUsers,
    getUser,
    getAdmin,
    updateSubscription
  }