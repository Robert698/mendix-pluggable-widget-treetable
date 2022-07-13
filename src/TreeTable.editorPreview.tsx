import { parseStyle } from "./piw-utils-internal";
import { TreeTablePreviewProps } from "../typings/TreeTableProps";

declare function require(name: string): string;

export function preview(props: TreeTablePreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
