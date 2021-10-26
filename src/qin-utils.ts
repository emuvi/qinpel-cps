export enum QinFilesNature {
    DIRECTORIES = "directories",
    FILES = "files",
    BOTH = "both",
}

export enum QinFilesOperation {
    OPEN = "open",
    SAVE = "save",
}

export class QinFilesDescriptor {
    public description: string;
    public extensions: string[];
}

export class QinDimension {
    width: number;
    height: number;
};

export class QinBounds {
    posX: number;
    posY: number;
    width: number;
    height: number;
};

export enum QinGrandeur {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
}

export enum QinStyles {
    ColorBack = "#fff9ef",
    ColorFont = "#270036",
    FontName = "Poppins",
    FontSize = "12px",
}