import boostrap from 'bootstrap';
import css from './scss/styles.scss';
import config from './config';
import { CommentsController } from './js/commentsController';
import { CommentsFormController } from './js/commentsFormController';
import postsService from './js/postsService';
import { CommentsService } from './js/commentsService';
import { PostMetaController } from './js/postMetaController'
import { PubSub } from 'pubsub-js';

document.addEventListener('DOMContentLoaded', () => {

    // App services
    let commentsService = new CommentsService(config.serviceURL + config.servicePORT + '/' + config.commentsCollection);
    //console.log(postsService);

    // App controllers
    let commenstController = new CommentsController('#comments', commentsService, PubSub);
    commenstController.loadComments();

    let commentsFormController = new CommentsFormController('#comments-form', commentsService, PubSub);
    let postMetaController = new PostMetaController('.meta', commentsService, postsService, PubSub);

});