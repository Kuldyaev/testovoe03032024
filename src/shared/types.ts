export interface FlexBoxProps {
  wrap?: boolean;
  class?: string;
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
  gap?: number | string;
  w?: string;
  h?: string;
  m?: string;
  p?: string;
  r?: string;
  overflow?: "auto" | "hidden" | "visible" | "scroll";
  bgcolor?: string;
}

export interface BtnProps {
  category?: "primary" | "close";
  class?: string;
  w?: string;
  h?: string;
}
export interface RequestFormProps {
  width: number;
}

export interface stateFS {
  closeIconWidth: number;
  closeIconHeght: number;
}
