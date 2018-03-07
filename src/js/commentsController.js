/**
 * Comments controller
 */

import { CommentsService } from './commentsService';

export class CommentsController {

    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    showLoadingMessage() {
        this.element.innerHTML = '<div class="alert alert-info" role="alert">Loading data ...</div>';
    }

    showErrorMesage() {
        this.element.innerHTML = '<div class="alert alert-danger" role="alert">Error retrieving comments</div>';
    }

    showNoComments() {
        this.element.innerHTML = '<div class="alert alert-warning" role="alert">Post whitout comments</div>';
    }

    loadComments() {
        let commentsService = new CommentsService();

        this.showLoadingMessage();

        commentsService.list().then(comments => {
            let html = '';
            if (comments.length == 0) {
                this.showNoComments();
            } else {
                for (let comment of comments) {
                    html += `
                    <div class="media mt-5 mb-4">
                        <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
                        <div class="media-body">
                            <h5 class="mt-0">${comment.name} ${comment.surname}</h5>
                            ${comment.comment}
                        </div>
                    </div>`;
                }
                this.element.innerHTML = html;
            }
        }).catch(error => {
            this.showErrorMesage();
        });
    }

}