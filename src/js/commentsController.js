/**
 * Comments controller
 */

import gravatar from 'gravatar';

export class CommentsController {

    // Constructor method
    constructor(selector, service, pubsub) {
        
        this.element = document.querySelector(selector);
        this.commentsService = service;

        // Subscribe to new comment create event
        pubsub.subscribe('comment:created', comment => {
            console.log('CommentsController', comment);
            this.loadComments();
        });
    }

    // Method that show a message while the page loads
    showLoadingMessage() {
        this.element.innerHTML = '<div class="alert alert-info" role="alert">Loading data ...</div>';
    }

    // Method that return a message when an error occurs
    showErrorMesage() {
        this.element.innerHTML = '<div class="alert alert-danger" role="alert">Error retrieving comments</div>';
    }

    // Method that return amessage when there isn´t comments to show
    showNoComments() {
        this.element.innerHTML = '<div class="alert alert-warning" role="alert">Post whitout comments</div>';
    }

    // Method that return and inject all available comments
    loadComments() {

        if (this.element != null) {
            this.showLoadingMessage();

            this.commentsService.list().then(comments => {
                let html = '';
                
                if (comments.length == 0) {
                    this.showNoComments();
                } else {
                    for (let comment of comments) {
                        var gravatarUrl = gravatar.url(comment.email, {s: '75', r: 'pg'});
                        html += `
                    <div class="media mt-5 mb-4">
                        <img class="d-flex mr-3 rounded-circle" src="${gravatarUrl}" alt="">
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

}


