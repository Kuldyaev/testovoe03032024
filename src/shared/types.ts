export interface FlexBoxProps {
  wrap?: boolean;
  direction?: "column" | "row";
  justify?:
    | "between"
    | "end"
    | "start"
    | "around"
    | "evenly"
    | "stretch"
    | "center";
  align?:
    | "between"
    | "end"
    | "start"
    | "around"
    | "evenly"
    | "stretch"
    | "center"
    | "normal";
  hide?: boolean;
  shrink?: number;
  grow?: number;
  gap?: number;
  w?: string;
  h?: string;
  m?: string;
  p?: string;
  r?: string;
  overflow?: "auto" | "hidden" | "visible" | "scroll";
  bgcolor?: string;
}
