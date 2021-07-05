import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <zero-md src="frontend/contratoTable.md">
        <template>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@4/github-markdown.min.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/PrismJS/prism@1/themes/prism.min.css">
            <style> h1{text-align: center;}</style>
        </template>
    </zero-md>
        `;
    }
}