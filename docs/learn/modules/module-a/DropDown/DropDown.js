import React, { useState,useEffect,useRef} from "react";
import Link from "@docusaurus/Link";
import "./dropdown.css";
import Data from "./dropdownData.json";
import { value } from "../../../../../src/components/PageView";
import { Datafun } from "./MainDataFunction";

let demo = {
  id: 0,
  from: "",
  prev: "",
  next: "",
};
function initialStateValueOfDropDown (){
  for(let i=0;i<value.length;i++){
    if(i===0){
      demo.from=value[i].chapter
      demo.next=`/learn/modules/module-a/${value[i+1].chapter}`
    }
  }
} initialStateValueOfDropDown ()

const FunDropdown = ({ id }) => {
  const [isActive, setisActive] = useState(false);
  const ref=useRef([])
  useEffect(()=>{
    ref.current=Datafun(Data,value)
  },[])
  

  function forPerev() {
    if (demo.id === 1) {
      demo.id = 1;
    } else {
      demo.id -= 1;
      ref.current.forEach((e) => {
        if (e.id === demo.id) {
          demo.prev = e.prev;
          demo.next = e.next;
          demo.from = e.from;
        }
      });
    }
  }

  function forNext() {
    if (demo.id === ref.current.length) {
      demo.id = ref.current.length;
    } else {
      demo.id += 1;
      ref.current.forEach((e) => {
        if (e.id === demo.id) {
          demo.next = e.next;
          demo.prev = e.prev;
          demo.from = e.from;
        }
      });
    }
  }

  return (
    <div className="dropdown">
      <Link to={demo.prev}>
        <div className={demo.prev === "" ? "disable-btn" : "button-24"} disabled={demo.prev === ""} onClick={forPerev}> &laquo; Previous</div>
      </Link>

      <div className="unit-selection">
        <button className="dropdown-btn" onClick={(e) => setisActive(!isActive)}>
          <div className="unit"> {demo.from}</div>
          <div class="arrow"></div>
        </button>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {ref.current.map((samples) => (
            <Link to={samples.to}>
              <div
                className="dropdown-item"
                onClick={(e) => {
                  demo.from = samples.from;
                  demo.id = samples.id;
                  demo.next = samples.next;
                  demo.prev = samples.prev;
                }}
              >
                {samples.from}
              </div>
            </Link>
          ))}
        </div>
      )}

      <Link to={demo.next}>
        <div className={demo.next === "" ? "disable-btn" : "button-24"} disabled={demo.next === ""} onClick={forNext}>Next &raquo;</div>
      </Link>
    </div>
  );
};

export default FunDropdown;
