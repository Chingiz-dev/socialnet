import React from "react";
import st from "./Documentation.module.css";
import BlockSchema from "../../images/BlockSchema.bmp";
import UIandBLL from "../../images/UIandBLL.bmp";
import Task33 from "../../images/Task33.png";
const Documentation = () => {
  return (
    <div>
      <div>
        Block schema
        <div>
          <img className={st.block} src={BlockSchema} alt="block schema" />
        </div>
      </div>
      <div>
        UI and BLL
        <div>
          <img className={st.block} src={UIandBLL} alt="UI and BLL" />
        </div>
      </div>
      <div>
        Task33
        <div>
          <img class={st.block} src={Task33} alt="task #33" />
        </div>
      </div>
    </div>
  );
};

export default Documentation;
