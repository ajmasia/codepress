import boostrap from 'bootstrap';
import css from './scss/styles.scss';
import { CommentsController } from './js/commentsController';
import { CommentsFormController } from './js/commentsFormController';
import { CommentsService } from './js/commentsService';
import { PostMetaController } from './js/postMetaController'
import { PubSub } from 'pubsub-js';

document.addEventListener('DOMContentLoaded', () => {

    let commentsService = new CommentsService('http://localhost:3001/comments/');

    let commenstController = new CommentsController('#comments', commentsService, PubSub);
    commenstController.loadComments();

    let commentsFormController = new CommentsFormController('#comments-form', commentsService, PubSub);

    let postMetaController = new PostMetaController('.meta', commentsService, PubSub);

});