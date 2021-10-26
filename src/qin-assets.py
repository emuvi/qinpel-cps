import os


def getIdentifierName(fromFileName: str) -> str:
    dot = fromFileName.rfind(".")
    if dot > 0:
        fromFileName = fromFileName[0:dot]
    result = ""
    for part in fromFileName.split("-"):
        result += part.capitalize()
    return result


if __name__ == "__main__":
    source = "export enum QinAsset {\n"
    for asset in os.listdir("../qinpel-app/public/assets"):
        source += "    " + \
            getIdentifierName(asset) + " = \"" + asset + "\",\n"
    source += "}\n"
    source += "\n"
    source += "export function qinAssetUrl(asset: QinAsset) {\n"
    source += "    return \"/run/app/qinpel-app/assets/\" + asset;\n"
    source += "}\n"
    with open("src/qin-assets.ts", "w") as file:
        file.write(source)
    print("Finish to generate the source code of src/qin-assets.ts")
