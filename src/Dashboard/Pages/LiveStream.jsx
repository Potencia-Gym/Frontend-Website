import { useEffect, useState } from "react";
import { useRef } from "react";
import { socket } from "../../socket";

const LiveStream = () => {
	const videoRef = useRef(null);
	const [isConnected, setIsConnected] = useState(socket.connected);
	const [data, setData] = useState(null);
	const canvasRef = useRef(null);
	const [stream, setStream] = useState(null);

	useEffect(() => {
		socket.connect();
		navigator.mediaDevices
			.getUserMedia({ video: true })
			.then((stream) => {
				videoRef.current.srcObject = stream;
				setStream(stream);
			})
		function handleConnect() {
			console.log("fsfse");
			setIsConnected(true);
		}

		function handleDisconnect() {
			setIsConnected(false);
		}

		function handleMessage(data) {
			console.log(data);
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
		canvas.width = 900; // Adjust as needed
		canvas.height = 700; // Adjust as needed

		// Draw the current video frame onto the canvas
		ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
		const imgurl = canvas.toDataURL('image/jpeg', 0.8);
		socket.emit('send_frame', imgurl);
		// 		const mediaRecorder = new MediaRecorder(stream);
		// 		console.log("mediaRecorder : ", mediaRecorder);
		// 		mediaRecorder.start(10000);
		// 		mediaRecorder.ondataavailable = (e) => {
		// 			var reader = new FileReader();
		// 			reader.readAsDataURL(e.data);
		// 			reader.onloadend = function () {
		// 				var base64data = reader.result;
		// 				setData(base64data);
		// 				// console.log(base64data);
		// 				// stream(socket).emit('stream', stream, base64data);
		// 				// socket.emit('stream', base64data)
		// 			}
		// 		};
		// 		mediaRecorder.onstart = () => {
		// 			console.log('recording started')
		// 		}
		// 	})
	}

	useEffect(() => {
		setInterval(() => {
			capture();
		}, 100);
	}, [])

	return (
		<div>
			<h1>Connection to server: {isConnected ? 'true' : 'false'}</h1>
			<video ref={videoRef} autoPlay />
			<canvas ref={canvasRef}></canvas>
			<div className="">DATA : {socket.id}</div>
		</div>
	)
}

export default LiveStream