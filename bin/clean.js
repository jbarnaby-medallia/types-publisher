"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clean = void 0;
const fs_extra_1 = require("fs-extra");
if (!module.parent) {
    clean();
}
function clean() {
    for (const dir of ["data", "logs", "output"]) {
        console.log(`Clean ${dir}`);
        fs_extra_1.removeSync(dir);
    }
}
exports.clean = clean;
//# sourceMappingURL=clean.js.map