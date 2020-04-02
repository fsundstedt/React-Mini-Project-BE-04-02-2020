const db = require("./conn.js");

class Posts {

  static async getAll() {
    try {
      const response = await db.any(`select * from posts;`);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Posts;