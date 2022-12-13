import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "../../css/learn/learn.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { BreadValue } from "../PageView"
import { BreadLink } from "../PageView";

export default function Breadcrumbs({ link, title, Value }) {
  return (
    <>
      <nav
        aria-label="breadcrumbs"
        itemscope=""
        itemtype="https://schema.org/BreadcrumbList"
        className={styles.breadcrumbs}>
        <ul class="breadcrumbs breadcrumbs--lg" style={{ padding: "5px 10px" }}>
          <Link
            to="/"
            className={clsx(
              styles.breadcrumbsLink,
              "breabreadcrumbs__link",
              "breadcrumbs__item--active"
            )}
          >
            Learn
          </Link>
          <span style={{ padding: 0 }}>/</span>
          <Link
            to={link ? `/learn/modules/${link}` : `/learn/modules/${BreadLink}`}
            className={BreadValue ? clsx(
              styles.breadcrumbsLink,
            ) : clsx(
              styles.breadcrumbsLink,
              styles.breadcrumbsLinkActive
            )}
          >
            {title ? title : BreadValue}
          </Link>
          {BreadValue ? <span style={{ padding: 0 }}>/</span> : ""}
          <Link className={clsx(
            styles.breadcrumbsLink,
            styles.breadcrumbsLinkActive
          )}
          >
            {Value}
          </Link>
        </ul>
      </nav>
    </>
  );
}
