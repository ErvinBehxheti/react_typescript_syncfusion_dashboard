export type TSparkLine = {
    id: string;
    height: string;
    width: string;
    color: string;
    data: {
        x: number;
        yval: number;
    }[];
    type: "Line" | "Column" | "WinLoss" | "Pie" | "Area";
    currentColor: string;
}