import { useEffect, useState } from "react";
import { useRef } from "react";
import { socket } from "../../socket";

const LiveStream = () => {
	const videoRef = useRef(null);
	const [isConnected, setIsConnected] = useState(socket.connected);
	const [data, setData] = useState(null);


	const getCam = async () => {
		const stream = await navigator.mediaDevices.getUserMedia({ video: true })
		const mediaRecorder = new MediaRecorder(stream);
		videoRef.current.srcObject = stream;
		mediaRecorder.ondataavailable = async (event) => {
			const formData = new FormData();
			const blob = new Blob([event.data], { type: '' });
			formData.append('frame', event.data);

			// Append the Blob data to the FormData object
			// Send the FormData object over the WebSocket connection
			// socket.emit('stream', formData);
			// console.log("captured", (event.data).toString());
			// socket.emit('stream', JSON.stringify(event.data));
		}
		mediaRecorder.start(1000);
	}

	useEffect(() => {
		getCam();
	}, [])

	useEffect(() => {
		// navigator.mediaDevices.getUserMedia({ video: true })
		// 	.then((stream) => {
		// 		const videoTrack = stream.getVideoTracks()[0];
		// 		videoRef.current.srcObject = stream;

		// 		// Create a MediaRecorder to capture video data
		// 		const options = {}; // Adjust mimeType as needed
		// 		const mediaRecorder = new MediaRecorder(stream, options);

		// 		// Listen for errors
		// 		mediaRecorder.onerror = (event) => {
		// 			console.error('MediaRecorder error:', event.error);
		// 		};
		// 		mediaRecorder.ondataavailable = (event) => {
		// 			// Send the Blob data over the WebSocket connection
		// 			socket.emit('stream', event.data);
		// 		};
		// 		// Start recording video
		// 		mediaRecorder.start(0);
		// 	})
		// 	.catch((error) => {
		// 		console.error('Error accessing media devices:', error);
		// 	});



		const handleConnect = () => {
			setIsConnected(true);
		};

		const handleDisconnect = () => {
			setIsConnected(false);
		};

		const handleMessage = (data) => {
			console.log(data);
		};

		// Establish WebSocket connection
		socket.on('connect', handleConnect);
		socket.on('disconnect', handleDisconnect);
		socket.on('message', handleMessage);

		// Clean up event listeners when component unmounts
		return () => {
			socket.off('connect', handleConnect);
			socket.off('disconnect', handleDisconnect);
			socket.off('message', handleMessage);
		};

		// Capture media stream


	}, []);


	return (
		<div>
			<h1>Connection to server: {isConnected ? 'true' : 'false'} {socket?.id}</h1>
			<video ref={videoRef} autoPlay />
			<div className="">DATA : {data?.sid}</div>
		</div>
	)
}

export default LiveStream