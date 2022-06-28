import "./mylabel.css";

export interface Props {
    /**
     * Label text to be displayed
     */
    label: string;
    /**
     * Label size
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Capitalize label text
     */
    allCaps?: boolean;
    /**
     * Label color
     */
    color?: "primary" | "secondary" | "tertiary";
    /**
     * Custom label color
     */
    fontColor?: string;
}

export const MyLabel = ({
    label = "No Label",
    size = "normal",
    allCaps = false,
    color = "primary",
    fontColor
}: Props) => {
    return (
        <span 
            className={`label ${size} text-${color}`}
            style={{color: fontColor}}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    );
};
