/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

class ApiService {
  constructor() {
    this.base = 'http://localhost:3000';
  }

  get(path, options) {
    const { stubbedLocation } = options;
    return stubbedLocation
      ? require('../resources/videos.json')
      : fetch(`${this.base}${path}`).then((response) => response.json());
  }
}

const apiService = new ApiService();

export default apiService;
