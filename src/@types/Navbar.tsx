import { ReactElement } from "react";

export type TNavButton = {
    title: string;
    customFunc: () => void;
    color: string;
    icon: ReactElement;
    dotColor?: string;
}