import { createWorker } from "tesseract.js";

const worker = createWorker({
    logger: m => console.log(m)
});


export async function readTextFile(path) {
    await worker.load();
    await worker.loadLanguage('spa');
    await worker.initialize('spa');
    const { data: {text} } = await worker.recognize(path);
    await worker.terminate();
    return text;
}