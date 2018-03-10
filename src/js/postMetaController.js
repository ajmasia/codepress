/**
 * Comments counter controller
 */

 // Import js app library
import appLib from './appLib';

export class PostMetaController {

    constructor(metaSelector, imgSelector, commentsService, postsService, pubsub) {
        
        // Select all elements with metadata
        this.metaElement = document.querySelectorAll(metaSelector);
        this.imgElement = document.querySelectorAll(imgSelector);
        
        // Instance services
        this.commentsService = commentsService;
        this.postsService = postsService;
        
        // Run showMeta method 
        if (this.metaElement != null) this.showMeta();
        if (this.imgElement != null) this.insertPlaceholder();
       
        // Subscribe to create new comment event
        pubsub.subscribe('comment:created', comment => {
            console.log('CommentsController', comment);
            this.showMeta();
        })
    }

    showMeta() {
        this.commentsService.list().then(comments => {
            // Go through each metaElement and inject metadata
            for (let i = 0; i < this.metaElement.length; i++) {
                let postedOn = appLib.postedOn(this.postsService.postPublishDates[i].publishDate);
                this.metaElement[i].innerHTML =
                    `${postedOn} by
                        <a href="#">CodePress</a>, <a href="#">${this.postsService.postPublishDates[i].category}</a>
                        <i class="far fa-comments ml-1"></i>
                        <a class="text-secondary comments-counter" href="#"> ${comments.length}</span></a>`;
                }
        }).catch(error => {
            this.showErrorMesage();
        });
        
    }
    showErrorMesage() {
        this.metaElement.innerHTML = '<div class="alert alert-danger" role="alert">Error retrieving data</div>';
    }

    insertPlaceholder() {
        this.imgElement.forEach(img => {
            if (img.getAttribute('src') == '') {
                img.src = 'http://placehold.it/750x300';
            }
        })
    }
}