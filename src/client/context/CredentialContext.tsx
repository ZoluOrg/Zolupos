import React, { useEffect, useState } from "react";
import { ICredentialContext } from "../interfaces/CredentialContext/ICredentialContext";
import { IEmployee } from "../interfaces/IEmployee";
import Cookie from "cookie";

const defaultValues: ICredentialContext = {
  creds: null,
  updateCreds: (employee: IEmployee) => null,
};

export const CredentialContext = () => {
  const [creds, setCreds] = useState<IEmployee | null>(null);
  useEffect(() => {
  });

  return <div>CredentialContext</div>;
};
