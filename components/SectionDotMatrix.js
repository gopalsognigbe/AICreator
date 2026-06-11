"use client";

import { useState, useEffect, useMemo } from "react";

const DESKTOP_ROWS = 18;
const DESKTOP_COLS = 50;
const MOBILE_ROWS = 12;
const MOBILE_COLS = 20;

const heartMatrix = [
  [0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
];

const personMatrix = [
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
];

const aiMatrix = [
  [0, 1, 1, 1, 0, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 0, 1, 1, 1],
];

const MATRICES = [heartMatrix, personMatrix, aiMatrix];

function centerPattern(matrix, rows, cols) {
  const patternRows = matrix.length;
  const patternCols = matrix[0].length;
  const rowOffset = Math.floor((rows - patternRows) / 2);
  const colOffset = Math.floor((cols - patternCols) / 2);

  const litDots = new Set();
  matrix.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (cell === 1) {
        litDots.add(`${r + rowOffset}-${c + colOffset}`);
      }
    });
  });
  return litDots;
}

function useGridSize() {
  const [gridSize, setGridSize] = useState({
    rows: DESKTOP_ROWS,
    cols: DESKTOP_COLS,
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");

    const update = () => {
      setGridSize(
        mq.matches
          ? { rows: MOBILE_ROWS, cols: MOBILE_COLS }
          : { rows: DESKTOP_ROWS, cols: DESKTOP_COLS }
      );
    };

    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return gridSize;
}

export default function SectionDotMatrix() {
  const [activePattern, setActivePattern] = useState(0);
  const { rows, cols } = useGridSize();

  const patternSets = useMemo(
    () => MATRICES.map((matrix) => centerPattern(matrix, rows, cols)),
    [rows, cols]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePattern((prev) => (prev + 1) % MATRICES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const isLit = (row, col) =>
    patternSets[activePattern].has(`${row}-${col}`);

  return (
    <section
      id="section-final"
      className="section-dot-matrix w-full bg-gray-100 dark:bg-gray-800 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="grid w-full gap-1.5 p-4 md:p-8 bg-gray-100 dark:bg-gray-800"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: rows * cols }, (_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const lit = isLit(row, col);

          return (
            <div
              key={i}
              className={`aspect-square w-full rounded-full transition-all duration-500 ease-in-out ${
                lit
                  ? "bg-gray-800 dark:bg-gray-200"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
