/**
 * Comments service
 */

export class CommentsService {

    constructor(url) {
        this.url = url;
    }

    // Method to list all comments
    async list() {
        const response = await fetch(this.url);
        // reponse.json() return a promise
        return response.json();
    }

    // Method to save new comments
    async save(comment) {
        const response = await fetch(this.url, {
            method: 'post',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // reponse.json() return a promise
        return response.json();
    }

}