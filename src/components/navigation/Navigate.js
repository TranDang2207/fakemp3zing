import React from "react";
import TopNav from "./TopNav";
import BotNav from "./BotNav";
import "./Navigate.css";

const Navigate = () => {
  return (
    <div className="col-span-1 bg-[#231B2E]">
      <div className="w-[148px] mt-4 pl-7">
        <a href="/">
          <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg" />
        </a>
      </div>
      <div className="overflow-hidden h-[70vh]">
        <TopNav />
        <div className="seperate"></div>
        <BotNav />
      </div>
    </div>
  );
};

export default Navigate;
