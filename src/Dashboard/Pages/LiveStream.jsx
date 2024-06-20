import { useEffect, useState } from "react";
import { useRef } from "react";
import { socket } from "../../socket";

const LiveStream = () => {
	const videoRef = useRef(null);
	const [isConnected, setIsConnected] = useState(socket.connected);
	const [data, setData] = useState(null);
	const canvasRef = useRef(null);
	const [stream, setStream] = useState(null);
	const [leftCount, setLeftCount] = useState(0);
	const [rightCount, setRightCount] = useState(0);

	useEffect(() => {
		socket.connect();
		navigator.mediaDevices
			.getUserMedia({ video: true })
			.then((stream) => {
				videoRef.current.srcObject = stream;
				setStream(stream);
			})
		function handleConnect() {
			setIsConnected(true);
		}

		function handleDisconnect() {
			setIsConnected(false);
		}

		function handleMessage(data) {
			console.log("Received message:", data);
			setLeftCount(data.left_count);
			setRightCount(data.right_count);
		}
		//stablish WebSocket connection
		socket.on('connect', handleConnect);
		socket.on('disconnect', handleDisconnect);
		socket.on('message', handleMessage);

		// Clean up event listeners when component unmounts
		return () => {
			socket.off('connect', handleConnect);
			socket.off('disconnect', handleDisconnect);
			socket.off('message', handleMessage);
		};
	}, []);

	const capture = () => {
		const video = videoRef.current
		const canvas = canvasRef?.current;
		const ctx = canvas?.getContext('2d');

		// Set the canvas dimensions to control the quality
		canvas.width = 700; // Adjust as needed
		canvas.height = 500; // Adjust as needed

		// Draw the current video frame onto the canvas
		ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
		const imgurl = canvas.toDataURL('image/jpeg', 0.8);
		const imgurlModified = imgurl.slice(23);
		socket.emit('send_frame', imgurlModified);
	}

	useEffect(() => {
		setInterval(() => {
			capture();
		}, 300);
	}, [])

	return (
		<div>
			<h1>Connection to server: {isConnected ? 'true' : 'false'}</h1>
			<video ref={videoRef} autoPlay />
			<canvas className="hidden" ref={canvasRef}></canvas>
			<div>Left Arm: {leftCount}</div>
			<div>Left Arm: {rightCount}</div>
		</div>
	)
}

export default LiveStream