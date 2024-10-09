import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeIncrement } from "../store/homeSlicer";
import { mainIncrement } from "@/components/store/mainSlicer";

export default function HomeHeader() {
  const value = useSelector((state) => state.homeData.value);
  const dispatch = useDispatch();
  const value2 = useSelector((state) => state.mainData.value);

  return (
    <div>
      <p>MAIN STORE</p>
      aaaaa
      <div>{value}</div>
      <div>{value2}</div>
      <button onClick={() => dispatch(mainIncrement())}>STORE 1</button>
      <button onClick={() => dispatch(homeIncrement())}>STORE 2</button>
    </div>
  );
}
