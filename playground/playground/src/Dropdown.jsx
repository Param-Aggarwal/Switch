import React, { useState, useRef, useLayoutEffect } from 'react';
import './Index.css'; // Assuming you have a CSS file for styling

const Dropdown = ({ children, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    if (isOpen && buttonRef.current && dropdownRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

      let newTop = buttonRect.bottom + window.scrollY; // Default: below the button
      let newLeft = buttonRect.left + window.scrollX; // Default: align with button left

      // Check if dropdown goes out of viewport at the bottom
      if (newTop + dropdownRect.height > viewportHeight + window.scrollY) {
        newTop = buttonRect.top + window.scrollY - dropdownRect.height; // Position above the button
        // Further check if it still goes out of viewport at the top (unlikely for most dropdowns)
        if (newTop < window.scrollY) {
          newTop = window.scrollY; // Stick to top of viewport
        }
      }

      // Check if dropdown goes out of viewport at the right
      if (newLeft + dropdownRect.width > viewportWidth + window.scrollX) {
        newLeft = buttonRect.right + window.scrollX - dropdownRect.width; // Align with button right
        // Further check if it goes out of viewport at the left
        if (newLeft < window.scrollX) {
          newLeft = window.scrollX; // Stick to left of viewport
        }
      }

      setDropdownPosition({ top: newTop, left: newLeft });
    }
  }, [isOpen]); // Recalculate position when dropdown opens/closes

  return (
    <div className="dropdown-container">
      <button ref={buttonRef} onClick={toggleDropdown} className="dropdown-button">
        {buttonText}
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="dropdown-menu"
          style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;