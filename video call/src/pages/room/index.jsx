import React from "react";
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const {roomId} = useParams();

const myMetting = async (element) => {
    const appID = 710038481;
    const serverSecret = "4dedd8b30aff885c67de683ed9759e61";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "karan nath");
    
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container: element,
        sharedLinks: [
            { 
            name: 'Copy Link',
            url: `http://localhost:3000/room/${roomId}`
            }
        ],
        scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: true,
    })
}

    return <div>
        <div ref={myMetting} />
    </div>
};

export default RoomPage;