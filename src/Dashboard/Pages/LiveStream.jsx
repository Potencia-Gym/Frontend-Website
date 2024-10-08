import { useEffect, useState, useRef } from "react";
import { socket } from "../../socket";

const LiveStream = ({updateCount, socketName}) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const [leftCount1, setLeftCount1] = useState(0);
  const [rightCount2, setRightCount2] = useState(0);

  useEffect(() => {
    // Connect to the socket server
    socket.connect();
    // Get the user's media stream
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      videoRef.current.srcObject = stream;
    });

    // Handlers for socket events
    const handleConnect = () => setIsConnected(true);
    const handleDisconnect = () => setIsConnected(false);
    const handleMessage = (data) => {
      console.log(data);
      var a=data.split(" ");
      setLeftCount(a[0]);
      setRightCount(a[1]);
      updateCount(a[1]);
    };

    // Attach socket event listeners
    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("message", handleMessage);
    // Cleanup function to stop the camera and disconnect the socket
    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("message", handleMessage);
      // socket.disconnect();
      // socket.close();
      // Stop all tracks in the video stream
    };
  }, []);

  // console.log(videoRef?.current?.srcObject?.getTracks());

  const stopCapturing = () => {
    // Stop all tracks in the video stream
    const tracks = videoRef?.current?.srcObject?.getTracks();

    tracks.forEach((track) => {
      if (track.kind === "video") {
        if (track.enabled) {
          track.stop();
          track.enabled = false;
        }
      }
    });
  };

  const capture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set the canvas dimensions to control the quality
    canvas.width = 900; // Adjust as needed
    canvas.height = 700; // Adjust as needed

    // Draw the current video frame onto the canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imgurl = canvas.toDataURL("image/jpeg", 0.8);
    const imgurlModified = imgurl.slice(23);
    socket.emit(String(socketName), imgurlModified);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      capture();
    }, 200);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(interval);

      // Stop all tracks in the video stream
      // if (myStream.current) {
      //   myStream.current.getTracks().forEach(function (track) {
      //     track.stop();
      //   });
      // }
    };
  }, []);

  return (
    <div>
      <h1>Connection to server: {isConnected ? "true" : "false"}</h1>
      <video ref={videoRef} autoPlay />
      <canvas ref={canvasRef} className="hidden"></canvas>
      <div>Stage: {leftCount}</div>
      <div>Count: {rightCount}</div>
      <button onClick={stopCapturing}>Stop</button>
    </div>
  );
};

export default LiveStream;
