'use client'

import WebApp from "@twa-dev/sdk"
import { useEffect, useState } from "react";

interface UserData {
  id: number;
  fisrt_name: string;
  username?: string;
  language_code: string;
  is_premium?: boolean
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as unknown as UserData)
    }
  })

  return (
    <main className="p-4">
      {
        userData ?
        (
          <>
            <h1 className="text-2xl font-bold mb-4">User Data</h1>
            <ul>
              <li>ID: {userData.id}</li>
              <li>ID: {userData.fisrt_name}</li>
              <li>ID: {userData.username}</li>
              <li>ID: {userData.language_code}</li>
              <li>ID: {userData.is_premium ? 'Yes' : 'No'}</li>
            </ul>
          </>
        ) :
        (
          <div className="text-5xl font-bold">Loading...</div>
        )
      }
    </main>
  );
}
