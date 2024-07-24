import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
// const URL = "https://d7bz6z99-8000.inc1.devtunnels.ms";
const URL = "http://192.168.71.59:8000"
// const URL = 'localhost:5000';

export const socket = io(URL, {
	autoConnect: false,
	transports: ["websocket"]
});