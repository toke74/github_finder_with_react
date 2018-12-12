import React from "react";

export default () => {
  const styles1 = {
    backgroundColor: "#00acee"
  };
  return (
    <footer style={styles1} className=" text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} GitHub Finder
    </footer>
  );
};
