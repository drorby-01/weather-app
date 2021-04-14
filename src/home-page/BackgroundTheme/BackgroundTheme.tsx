import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../redux/Theme/Theme.action";

const BackgroundTheme = () => {
  const [background, setBackground] = useState("dark");
  const dispatch = useDispatch();
  
  const theme = useSelector(
    (state: any) => state.ThemeBackgroundColor.background
  );

  
  const backgroundTheme = () => {
    dispatch(changeTheme()); // will change the background any time we click
    const newBackground = background === "dark" ? "light" : "dark";
    setBackground(newBackground); // will change the button
  };

  return (
    <>
      <Button variant={background} onClick={backgroundTheme} className="m-1">
        {background}
      </Button>
    </>
  );
};

export default BackgroundTheme;
