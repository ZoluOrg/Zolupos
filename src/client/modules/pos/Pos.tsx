import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useCredentialContext } from "../../context/CredentialContext";
import { PageTransition } from "../animations/PageTransition";

export const Pos = () => {
  const crds = useCredentialContext();
  return (
    <PageTransition>
      <div className="PosWrapper h-screen">
        {crds.creds?.lastLogin}
      </div>
    </PageTransition>
  );
};
