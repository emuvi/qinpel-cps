export declare enum QinFilesNature {
    DIRECTORIES = "directories",
    FILES = "files",
    BOTH = "both"
}
export declare enum QinFilesOperation {
    OPEN = "open",
    SAVE = "save"
}
export declare class QinFilesDescriptor {
    description: string;
    extensions: string[];
}
export declare class QinDimension {
    width: number;
    height: number;
}
export declare class QinBounds {
    posX: number;
    posY: number;
    width: number;
    height: number;
}
export declare enum QinGrandeur {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}
export declare enum QinStyles {
    ColorBack = "#fff9ef",
    ColorFont = "#270036",
    FontName = "Poppins",
    FontSize = "12px"
}
//# sourceMappingURL=qin-utils.d.ts.map