import React, { createContext, useState } from "react";

type UserInfo = {
  username: string;
  id: string;
  profilePic: string;
};

type UserContextType = {
  userInfo: UserInfo | null;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
};

export const UserContext = createContext<UserContextType>({
  userInfo: {} as UserInfo,
  setUserInfo: () => {},
});

type UserContextProps = {
  children: React.ReactNode;
};

export function UserContextProvider({ children }: UserContextProps) {
  const [userInfo, setUserInfo] = useState<UserInfo | null>({
    username: "",
    id: "",
    profilePic: "",
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}
