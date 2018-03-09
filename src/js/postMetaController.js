/**
 * Comments counter controller
 */

export class PostMetaController {

    constructor(selector, service, pubsub) {
        this.element = document.querySelectorAll(selector);
        this.commentsService = service;
        if (this.element != null) this.showCommentsCounter();
        pubsub.subscribe('comment:created', comment => {
            console.log('CommentsController', comment);
            this.showCommentsCounter();
        })
    }

    showCommentsCounter() {
        this.commentsService.list().then(comments => {
            this.element.forEach(element => {
                element.innerHTML = 
                `Posted on January 1, 2017 by
                    <a href="#">Start Bootstrap</a>
                    <i class="far fa-comments ml-1"></i>
                    <a class="text-secondary comments-counter" href="#"> ${comments.length}</span></a>`;
            });
        }).catch(error => {
            this.showErrorMesage();
        });
    }
    showErrorMesage() {
        this.element.innerHTML = '<div class="alert alert-danger" role="alert">Error retrieving comments</div>';
    }

}