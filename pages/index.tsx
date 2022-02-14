import React from "react";
import BackButton from "../components/BackButton";
import MyPage from "../components/MyPage";

export default function Home() {
  return (
    <div>
      <div>
        <BackButton />
        <MyPage />
      </div>
    </div>
  );
}
