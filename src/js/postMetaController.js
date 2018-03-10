/**
 * Comments counter controller
 */

 // Import js app library
import appLib from './appLib';

export class PostMetaController {

    constructor(selector, commentsService, postsService, pubsub) {
        
        // Select all elements with metadata
        this.element = document.querySelectorAll(selector);
        
        // Instance services
        this.commentsService = commentsService;
        this.postsService = postsService;
        
        // Run showMeta method 
        if (this.element != null) this.showMeta();
       
        // Subscribe to create new comment event
        pubsub.subscribe('comment:created', comment => {
            console.log('CommentsController', comment);
            this.showMeta();
        })
    }

    showMeta() {
        this.commentsService.list().then(comments => {
            // Go through each element and inject metadata
            for (let i = 0; i < this.element.length; i++) {
                let postedOn = appLib.postedOn(this.postsService.postPublishDates[i].publishDate);
                this.element[i].innerHTML =
                    `${postedOn} by
                        <a href="#">CodePress</a>
                        <i class="far fa-comments ml-1"></i>
                        <a class="text-secondary comments-counter" href="#"> ${comments.length}</span></a>`;
                }
        }).catch(error => {
            this.showErrorMesage();
        });
        
    }
    showErrorMesage() {
        this.element.innerHTML = '<div class="alert alert-danger" role="alert">Error retrieving data</div>';
    }
}