import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { TreeTablePreviewProps } from "../typings/TreeTableProps";

export function getProperties(
    values: TreeTablePreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: TreeTablePreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
