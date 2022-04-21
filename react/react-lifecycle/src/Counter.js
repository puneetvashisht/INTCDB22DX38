import React, { useEffect } from "react";

export default function Counter(props) {
  //works as both CDM & CDU for class components
  useEffect(() => {
    console.log("useEffect Called...");
    return () => {
      console.log("Clean up code .. ");
    };
  }, [props.counter]);

  return <h2>{props.counter}</h2>;
}
