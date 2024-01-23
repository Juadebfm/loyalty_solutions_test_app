import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { useEffect } from "react";

//create context

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  //sidebar state
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  // Add a useEffect to handle the body scroll when the sidebar is open or closed
  useEffect(() => {
    const handleBodyScroll = () => {
      if (isOpen) {
        // If the sidebar is open, disable body scroll
        document.body.style.overflow = "hidden";
      } else {
        // If the sidebar is closed, enable body scroll
        document.body.style.overflow = "auto";
      }
    };

    // Attach the event listener
    handleBodyScroll();

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
