import type { WinningLineLabel } from "../types/winning-line";

export type WinningLineTransformations = {
  $top: string;
  $left: string;
  $transform: string;
};

export function getWinningLineTransformations(
  label: WinningLineLabel
): WinningLineTransformations {
  switch (label) {
    case "horizontal_top":
      return {
        $top: `${100 / 6}%`,
        $left: "50%",
        $transform: "translate(-50%, -50%)",
      };

    case "horizontal_middle":
      return {
        $top: "50%",
        $left: "50%",
        $transform: "translate(-50%, -50%)",
      };

    case "horizontal_bottom":
      return {
        $top: `${100 - 100 / 6}%`,
        $left: "50%",
        $transform: "translate(-50%, -50%)",
      };

    case "vertical_left":
      return {
        $top: "50%",
        $left: `${100 / 6}%`,
        $transform: "translate(-50%, -50%) rotate(90deg)",
      };

    case "vertical_middle":
      return {
        $top: "50%",
        $left: "50%",
        $transform: "translate(-50%, -50%) rotate(90deg)",
      };

    case "vertical_right":
      return {
        $top: "50%",
        $left: `${100 - 100 / 6}%`,
        $transform: "translate(-50%, -50%) rotate(90deg)",
      };

    case "diagonal_descending":
      return {
        $top: "50%",
        $left: "50%",
        $transform: "translate(-50%, -50%) rotate(45deg)",
      };

    default: // diagonal_ascending
      return {
        $top: "50%",
        $left: "50%",
        $transform: "translate(-50%, -50%) rotate(-45deg)",
      };
  }
}
