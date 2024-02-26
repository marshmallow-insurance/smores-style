import { FC, ReactNode } from 'react';
import { MarginProps } from '../utils/space';
export type IconWrapperProps = {
    /** className attribute to apply classes from props */
    className?: string;
    children: ReactNode;
    /** specify what Icon to render  */
    render: string;
    /** set size of the Icon  */
    size?: number;
    /** TOP-RIGHT-BOTTOM-LEFT position of the Icon */
    t?: string;
    r?: string;
    b?: string;
    l?: string;
} & MarginProps;
export declare const IconWrapper: FC<IconWrapperProps>;
