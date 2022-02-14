import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Hamburger from "../components/Hamburger";
import MyPage from "../components/MyPage";

export default function Home() {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  useEffect(() => {
    console.log(isSideBarOpened);
  }, [isSideBarOpened]);
  return (
    <div>
      <div>
        <Hamburger
          isSideBarOpened={isSideBarOpened}
          setIsSideBarOpened={setIsSideBarOpened}
        />
        <MyPage isSideBarOpened={isSideBarOpened} />
      </div>
    </div>
  );
}
