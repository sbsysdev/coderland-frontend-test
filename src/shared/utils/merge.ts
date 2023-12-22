interface MergeString {
    join: string;
    values: (false | null | undefined | string)[];
}

export const mergeString = ({ join: joinValue, values = [] }: MergeString): string =>
    values.filter(Boolean).join(joinValue);

export const classNames = (...names: (false | null | undefined | string)[]) =>
    mergeString({ values: names, join: ' ' });
