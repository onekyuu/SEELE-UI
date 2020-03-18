import {ReactElement} from "react";

export interface SourceItem {
    key: string,
    value: string,
    children?: SourceItem[],
}

type multiType = {
    selected: string[],
    multiple: true,
    onChange: (checkedData: string[]) => void,
}
type singleType = {
    selected: string,
    multiple?: false,
    onChange: (checkedData: string) => void,
}

type TreeProps = {
    sourceData: SourceItem[],
    icon?: ReactElement,
    arrow?: boolean,
    isShowCheckbox?: boolean,
} & (multiType | singleType)
