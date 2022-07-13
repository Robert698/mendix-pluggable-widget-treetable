import { useMemo } from "react";
import { TreeTableContainerProps } from "../typings/TreeTableProps";
import { ValueStatus } from "mendix";

export default function (props: TreeTableContainerProps) {
    console.log(props);
    const value = useMemo(() => {
        if (props.attribute && props.attribute.status === ValueStatus.Available) {
            return props.attribute.value;
        }
    }, [props.attribute]);

    return (
        <div>
            hello {props.sampleText} and your value is {value}
        </div>
    );
}
