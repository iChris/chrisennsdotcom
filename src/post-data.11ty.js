// src/search-data.11ty.js
class SearchDataJson {
    data() {
      return {
        permalink: "/search-data.json",
      };
    }
  
    render(data) {
      const projects = data.collections.projects.map((project) => ({
        title: project.data.title,
        url: project.url,
        content: project.templateContent,
      }));
  
      return JSON.stringify(projects);
    }
  }
  
  module.exports = SearchDataJson;