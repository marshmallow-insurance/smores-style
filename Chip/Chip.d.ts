import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { MarginProps } from '../utils/space';
type Props = {
    children: ReactNode;
    handleClick: (e: React.FormEvent<HTMLButtonElement>) => void;
    primary?: boolean;
    secondary?: boolean;
    icon?: string;
    disabled?: boolean;
    loading?: boolean;
} & MarginProps;
export type ChipProps = Props & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const Chip: FC<ChipProps>;
export {};
