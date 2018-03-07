/**
 * Comments service
 */

 export class CommentsService {

    async list() {
        const response = await fetch('//localhost:3001/comments/');
        return response.json();
    }

}