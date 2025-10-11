import { useEffect, useState } from "react";
import { WEBSOCKET_URL } from "../config";

export function useSocket(){
    const [loading,setLoading] = useState(true);
    const [socket,setSocket] = useState<WebSocket>();

    useEffect(() =>{
        const ws = new WebSocket(`${WEBSOCKET_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5NzJjMmUyYi0yZWRjLTQ0NGEtYWFiNS1mYzBkY2VkMDYwODIiLCJpYXQiOjE3NjAxNzYyMTV9.VTBegK3pCwSkjpOIEvdQ8YgoKxamZKBODOLRgnoumSc`);
        ws.onopen = () =>{
            setLoading(false);
            setSocket(ws);
        }
    },[]);

    return {
        socket,
        loading
    }
}