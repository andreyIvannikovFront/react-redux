export default class Api {
  constructor(preffix) {
    this.preffix = preffix
    this.get = this.get.bind(this)
    this.post = this.post.bind(this)
  }

  async request(method, { path, requestBody }) {
    return fetch(`${this.preffix}${path}`, {
      method,
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(async (response) => {
        const contentTypeHeader = response.headers.get('content-type')

        if (!contentTypeHeader.includes('application/json')) {
          if (!response.ok) {
            throw Object({ statusCode: response.status })
          }
        }

        if (contentTypeHeader.includes('application/json')) {
          return {
            response: await response.json()
          }
        }

      }).catch((e) => console.log(e))
  }

  get(path) {
    return this.request('GET', { path })
  }

  post() {

  }
}
