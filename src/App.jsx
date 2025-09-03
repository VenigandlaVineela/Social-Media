import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./Components/AuthForm";
import Sidebar from "./Components/Sidebar";
import Profileupdate from "./EditProfile/Profileupdate";
import EditProfile from "./EditProfile/EditProfile";
import AccountManagement from "./EditProfile/AccountManagement";
import ProfileVisibility from "./EditProfile/ProfileVisibility";
import SocialPermissions from "./EditProfile/SocialPermissions";
import Notifications from "./EditProfile/Notifications";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import PixelmindProfile from "./Components/PixelmindProfile";
import PixelmindProfileEdited from "./Components/PixelmindProfileEdited";
import Messages from "./Components/Messages";
import Notification from "./Components/Notification";
import Adds from "./Components/Adds";
import Campaign from "./Components/Campaign";
import Proceed from "./Components/Proceed";
import Wallet from "./Components/Wallet";
import CurrentCampaignAd from "./Components/CurrentCampaignAd";
import ReceivedResponses from "./Components/ReceivedResponses";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/profileupdate" element={<Profileupdate />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/accountmanagement" element={<AccountManagement />} />
        <Route path="/profilevisibility" element={<ProfileVisibility />} />
        <Route path="/socialpermissions" element={<SocialPermissions />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/pixelmindprofile" element={<PixelmindProfile />} />
        <Route path="/pixelmindprofileedited" element={<PixelmindProfileEdited />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notification" element={<Notification />} />
         <Route path="/adds" element={<Adds />} />
        <Route path="/campaign" element={<Campaign/>} />
        <Route path="/proceed" element={<Proceed/>}/>
        <Route path="/wallet" element={<Wallet/>}/>
        <Route path="/currentcampaignad" element={<CurrentCampaignAd/>}/>
        <Route path="/receivedresponses" element={<ReceivedResponses/>}/>

      </Routes>
    </>
  );
}

export default App;
