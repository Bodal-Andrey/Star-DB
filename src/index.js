class SwapiService {
  _apiBase = `https://swapi.co/api`;  

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);  
    }
    return await res.json();
  } 
  
  getAllPeople() {
    const res = this.getResource(`/people/`);  
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);  
  }

  getAllPlanets() {
    const res = this.getResource(`/planets/`);  
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);  
  }

  getAllStarships() {
    const res = this.getResource(`/starships/`);  
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);  
  }
}