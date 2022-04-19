import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import SlideBar from "../../components/Edit/SlideBar";
import { menu as tabInfo } from "../../assets/Data/menu";

export default function EditLayout() {
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <Fragment>
      <SlideBar
        value={value}
        setValue={setValue}
        tabInfo={tabInfo}
        handleChange={handleChange}
      />
      <Outlet />
    </Fragment>
  );
}
