import {getDocument} from "pdfjs-dist";

class MainTest {
    task: ReturnType<typeof getDocument> | undefined

    constructor(public file: string) {
    }

    loadPdf() {
        this.task = getDocument("file://" + this.file);
        return this.task.promise;
    }

    get pdf() {
        return this.task?.promise;
    }

    get page() {
        return this.pdf?.then(doc => doc.getPage(1));
    }

}

const mt = new MainTest("./test.pdf");
mt.loadPdf().then(() => {
    console.log("loaded");
});
