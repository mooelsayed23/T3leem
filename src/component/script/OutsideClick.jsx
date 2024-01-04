// import { useEffect } from "react";

// const useOutsideClick = (ref, callback) => {
//   const handleClickOutside = (event) => {
//     if (ref.current && !ref.current.contains(event.target)) {
//       callback();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref, callback]);
// };
// export default useOutsideClick;
import { useEffect, useCallback } from "react";

const useOutsideClick = (ref, callback) => {
  const handleClickOutside = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    const handleDocumentClick = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [handleClickOutside]);
};

export default useOutsideClick;
