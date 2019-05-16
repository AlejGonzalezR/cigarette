/**
 * opciones:
 * development
 * qa
 * production
 */
const env = "development";
let bookApiUrl = "";
let bookApiAuthUrl = "";
let port = "";

switch (env) {
    case "qa":
        bookApiUrl = "http://books-api-qa.clever.palace-resorts.local/";
        bookApiAuthUrl = "http://booksauth-api-qa.clever.palace-resorts.local/";
        port = 8000;
    break;

    case "production":
        bookApiUrl = "http://books-api.clever.palace-resorts.local/";
        bookApiAuthUrl = "http://booksauth-front.clever.palace-resorts.local/";
        port = 8000;
    break;

    case "development":
    default:
        bookApiUrl = "http://dev.clever-api-books.local/";
        bookApiAuthUrl = "http://dev.clv-books-auth.local/";
        port = 8000;
    break;
}


module.exports = {
    env: env,
    bookApiUrl: bookApiUrl,
    bookApiAuthUrl: bookApiAuthUrl,
    port: port
};
