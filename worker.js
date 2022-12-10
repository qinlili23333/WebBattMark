console.log("New Worker Thread.");
self.importScripts("./7zz.umd.js");
let originLog = console.log;
console.log = log => {
    if (log.startsWith("Avr:")) {
        //记录结果
        let analy = log.split(" ");
        let analy2 = [];
        for (let i = 0; i < analy.length; i++) {
            if (!analy[i] == "") {
                analy2.push(analy[i]);
            }
        }
        console.log("Submit Value " + analy2[4]);
        postMessage(analy2[4]);
    }
    originLog(log);
};
(async () => {
    const sevenZip = await SevenZip();
    for (; true;) {
        console.log("Start Test...");
        let result = sevenZip.callMain(["b", "-md16"]);
    }
})()