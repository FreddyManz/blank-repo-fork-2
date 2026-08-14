import os from 'os';
import { bytesToSize } from './FreeMemory.mjs';

const printSystemInfo = () => {
    console.log(os.platform());
    console.log(os.type());
    console.log(os.arch());
    console.log(os.release());
    console.log(os.version());
    let totalMem = bytesToSize(os.totalmem());
    let freeMem = bytesToSize(os.freemem());
    console.log(totalMem);
    console.group(freeMem);
}

printSystemInfo();


