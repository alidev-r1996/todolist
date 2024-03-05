"use client";

import { SessionProvider } from "next-auth/react";

type SessionProviderProps = {
  children: React.ReactNode;
  session: any;
};

const AuthProvider: React.FC<SessionProviderProps> = ({
  children,
  session,
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
