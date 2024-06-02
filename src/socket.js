import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = 'http://172.16.150.203:8000/';
// const URL = 'localhost:5000';

export const socket = io(URL, {
	autoConnect: false
});