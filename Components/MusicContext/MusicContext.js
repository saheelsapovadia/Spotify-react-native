import React, { createContext, useState } from "react";

export const MusicContext = createContext();

const MusicContextProvider = (props) => {
  const [musicState, setMusicState] = useState(true);
  return (
    <MusicContext.Provider value={{ musicState, setMusicState }}>
      {props.children}
    </MusicContext.Provider>
  );
};

export default MusicContextProvider;
