import { createContext, useState } from "react";
import LibraryDetailModal from "../Components/LibraryDetailModal";

export const DetailViewContext = createContext();
const DetailViewContextProvider = (props) => {
  const [show, setShow] = useState(null);
  return (
    <DetailViewContext.Provider value={{ show, setShow }}>
      {props.children}
      {show !== null && (
        <LibraryDetailModal {...show} setShowModal={setShow} showModal={show} />
      )}
    </DetailViewContext.Provider>
  );
};

export default DetailViewContextProvider;
