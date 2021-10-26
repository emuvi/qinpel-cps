bash -v clean.sh
npm install
py src/qin-assets.py
py all.py
tsc -p tsconfig.json