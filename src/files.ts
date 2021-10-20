export enum FilesNature {
    DIRECTORIES, FILES, BOTH
}

export enum FilesOperation {
    OPEN, SAVE
}

export class FilesDescriptor {
    public description: string;
    public extensions: string[];
}