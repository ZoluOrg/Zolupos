import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ITitleProps {
  title: string;
  setTitle: (title: string) => void;
}

const defaultValues: ITitleProps = {
  title: "",
  setTitle: (title: string) => {},
};

const titleContext = createContext(defaultValues);

export const TitleProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [title, setPageTitle] = useState<string>("");
  useEffect(() => {
    document.title = title;
  }, [title]);
  const setTitle = (title: string) => {
    setPageTitle(title);
  };
  return (
    <titleContext.Provider value={{ title, setTitle }}>
      {children}
    </titleContext.Provider>
  );
};

export const useTitleContext = () => {
  return useContext(titleContext);
}