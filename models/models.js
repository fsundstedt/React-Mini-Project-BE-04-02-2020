const db = require("./conn.js");

class Posts {

  static async getAll() {
    try {
      const response = await db.any(`select posts.title, posts.content, users.name from posts, users where users.id=posts.user_id;`);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Posts;