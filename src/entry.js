import boostrap from 'bootstrap';
import css from './scss/styles.scss';
import config from './config';
import SmoothScroll from 'smooth-scroll';

import postsService from './js/postsService';
import { CommentsService } from './js/commentsService';
import { PostLikeService } from './js/postLikeService';

import { CommentsController } from './js/commentsController';
import { CommentsFormController } from './js/commentsFormController';
import { PostMetaController } from './js/postMetaController'
import { PostLikeController } from './js/postLikeController';
import { PubSub } from 'pubsub-js';

document.addEventListener('DOMContentLoaded', () => {

    // Instance smooth scroll
    var easeOutQuad = new SmoothScroll('[data-easing="easeOutQuad"]', {
        easing: 'easeOutQuad',
        speed: 1000,
        header: '[data-scroll-header]'
    });

    // App services
    let commentsService = new CommentsService(config.serviceURL + config.servicePORT + '/' + config.commentsCollection);
    let postLikeService = new PostLikeService();

    // Instance app controllers
    let commenstController = new CommentsController('#comments', commentsService, PubSub);
    commenstController.loadComments();
    let commentsFormController = new CommentsFormController('#comments-form', commentsService, PubSub);
    let postMetaController = new PostMetaController('.meta', 'img', commentsService, postsService, PubSub);
    let postLikeController = new PostLikeController('.like', postLikeService);

});