"use client";

import styles from "./page.module.css";

export function PrintAssessmentButton() {
  return (
    <button className={styles.printButton} onClick={() => window.print()} type="button">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 8V3.5h10V8M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M7 14h10v6.5H7z" />
        <path d="M17 12h.01" />
      </svg>
      Print / Save PDF
    </button>
  );
}
