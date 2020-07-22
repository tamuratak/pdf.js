import {getDocument, GlobalWorkerOptions, PDFDocumentProxy, PDFPageProxy} from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/pdf.worker.entry";

GlobalWorkerOptions.workerSrc = pdfjsWorker;

class MainTest {
    page: PDFPageProxy;
    pdf: PDFDocumentProxy;

    constructor(public file: string) {
    }

    async loadPdf() {
        this.pdf = await getDocument("file://" + this.file).promise;
        this.page = await this.pdf.getPage(1);
    }
}

const mt = new MainTest("./test.pdf");
mt.loadPdf().then((done) => {
    console.log("loaded");
});
