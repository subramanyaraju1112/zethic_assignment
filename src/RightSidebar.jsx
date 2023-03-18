import React from "react";

export const RightSidebar = ({
  open = false,
  title = "",
  children,
  onClose = () => {},
}) => {
  return (
    <div
      className="right-sidebar"
      style={{
        width: "250px",
        height: "100vh",
        overflow: "hidden",
        overflowY: "auto",
        borderRight: "1px solid gray",
        position: "fixed",
        zIndex: "100",
        padding: "5px 10px 5px 20px",
        backgroundColor: "#142035",
        top: "0",
        right: "0",
        display: open ? "block" : "none",
      }}
    >
      <div
        className="header"
        style={{
          height: "5%",
          padding: "7px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ cursor: "pointer" }} onClick={onClose}>
          X
        </span>
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
};
