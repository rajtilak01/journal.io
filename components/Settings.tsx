'use client'
import { useState } from "react";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import DeleteSection from "./Delete";

export default function Settings() {
    const [isProfileSection, setIsProfileSection] = useState<boolean>(true);
    const [isDeleteSection, setIsDeleteSection] = useState<boolean>(false);
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <div className="w-1/4">
          <div className="flex flex-col mt-10 mx-10">
            <Button variant="ghost" onClick={() => {
                setIsDeleteSection(false);
                setIsProfileSection(true);
            }}>Profile</Button>
            <Button variant="destructive" onClick={() => {
                setIsProfileSection(false);
                setIsDeleteSection(true);
            }}>Delete Account</Button>
          </div>
        </div>
        {isProfileSection ? <div className="w-3/4"><ProfileSection/></div> : <div className="w-3/4"><DeleteSection/></div>}
      </div>
    </>
  );
}

function ProfileSection () {
    return (
        <div>Profile Section</div>
    )
}


