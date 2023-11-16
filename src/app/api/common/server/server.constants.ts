const SERVER_HOST: string = 'localhost';
const SERVER_PORT: number = 3000;

export function getServerUrl(): string {
  return `http://${SERVER_HOST}:${SERVER_PORT}`;
}
