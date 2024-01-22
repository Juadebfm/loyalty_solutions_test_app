import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

//create context

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  //sidebar state
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Define propTypes for ProductProvider
SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarProvider;
