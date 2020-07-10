import http from "./httpService";

const url = "http://localhost:5000/api/posts";

// Getting all posts
export function getPosts() {
  return http.get(`${url}`);
}

// Getting a specific post
export function getPostById(id) {
  return http.get(`${url}/${id}`);
}

// Deleting a post
export function deletePost(id) {
  return http.delete(`${url}/${id}`);
}

// Adding a post
export function addPost(post) {
  if (!post) return;
  if (post._id) {
    const body = { ...post };
    delete body._id;
    return http.post(`${url}`);
  }
  return http.post(`${url}`);
}
