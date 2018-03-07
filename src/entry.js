import boostrap from 'bootstrap';
import css from './scss/styles.scss';
import { CommentsController } from './js/commentsController';

document.addEventListener('DOMContentLoaded', () => {

    let commenstController = new CommentsController('#comments');
    commenstController.loadComments();

});