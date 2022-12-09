import React, {useRef} from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "../../css/learn/learn.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export let value=[]

export default function Breadcrumbs({ link, title, description, chapters }) {

    const redirect=useRef("") 
    const pageRedirect=()=>{
      chapters.map((item,index)=>{
        if(index===0){
          redirect.current=item.chapter
        }
      })
    }
    pageRedirect()

    const submit=()=>{value=chapters}
     
  return (
    <>
      <div className={clsx(styles.page, "item shadow--md")}>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <img
            alt="Generic Trophy Image"
            src={useBaseUrl("/img/generic-trophy.svg")}
          />
          <div style={{ padding: "2rem" }}>
            <div style={{ textAlign: "left" }}>
              <h1>{title}</h1>
            </div>
            <div style={{ textAlign: "left" }}>
              <p>{description}</p>
              <div>
                <Link
                  className="button button--outline button--secondary button--lg"
                  to={`module-a/${redirect.current}`} onClick={submit()}>
                  <div>Start</div>
                </Link>
              </div>
            </div>
            <div>
              <div style={{ padding: "2.5rem 0", textAlign: "left"  }}>
                {chapters.map((chapter) => (
                  <div className={styles.unitColumn}>
                    <Link  to={`module-a/${chapter.chapter}`} onClick={submit()}>
                      <p>{chapter.chapter}</p>
                    </Link>
                    <span>2 mins</span>  
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
