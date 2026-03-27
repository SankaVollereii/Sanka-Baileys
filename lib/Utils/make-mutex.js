"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeKeyedMutex = exports.makeMutex = void 0;
const makeMutex = () => {
    let task = Promise.resolve();
    let taskTimeout;
    return {
        mutex(code) {
            task = (async () => {
                try {
                    await task;
                }
                catch (_a) { }
                try {
                    const result = await code();
                    return result;
                }
                finally {
                    clearTimeout(taskTimeout);
                }
            })();
            return task;
        },
    };
};
exports.makeMutex = makeMutex;
const makeKeyedMutex = () => {
    const map = {};
    return {
        mutex(key, task) {
            if (!map[key]) {
                map[key] = (0, exports.makeMutex)();
            }
            return map[key].mutex(task);
        }
    };
};
exports.makeKeyedMutex = makeKeyedMutex;
