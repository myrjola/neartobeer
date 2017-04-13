import { createServer } from 'http';

let actions = [];
let redirects = [];
let server;

export function startServer() {
  if (server) {
    return server;
  }
  return new Promise((resolve) => {
    server = createServer((req, res) => {
      res.end(JSON.stringify({ actions, redirects }));
      actions = [];
      redirects = [];
    }).listen(5556, resolve);
    process.on('exit', () => {
      server.close();
    });
  });
}
export function action(_action) {
  actions.push(_action);
}
export function redirect(route) {
  redirects.push(route);
}

export function stop() {
  if (server) {
    server.close();
  }
}
