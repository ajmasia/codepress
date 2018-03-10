export class CommentsFormController {

    constructor(selector, service, pubsub) {
        // Select form
        this.element = document.querySelector(selector);
        if (this.element != null) this.addEventListeners();
        
        // Config and event
        this.pubsub = pubsub;
        this.loading = false;
        this.commentService = service;

    }

    // inputs, textarea and butthon dissable while loading
    setLoading(loading) {
        this.loading = loading;
        this.element.querySelectorAll('input, textarea, button').forEach(item => { item.disabled = loading });
    }

    // Add blur event to all form imputs
    addEventListeners() {
        this.addImputListeners();
        this.addFormSubmitListener();
    }

    addFormSubmitListener() {
        this.element.addEventListener('submit', event => {
            event.preventDefault();
            if (this.loading) {
                // If form is load, we don´t anything
                return;
            }
            this.setLoading(true);
            let comment = this.buildCommentData();
            this.commentService.save(comment).then(createComment => {
                console.log('** New comment create **', createComment);
                this.element.reset();
                // Emite event comment:created
                this.pubsub.publish('comment:created', createComment);
            }).catch(error => {
                console.log('** An error ocurre trying create new comment **');
            }).finally(() => {
                this.setLoading(false);
            });
        });
    }

    buildCommentData() {
        return {
            name: this.element.querySelector('#comment-name').value,
            surname: this.element.querySelector('#comment-surname').value,
            email: this.element.querySelector('#comment-email').value,
            comment: this.element.querySelector('#comment-text').value
        }
    }

    // Add event to all inputs and textarea
    addImputListeners() {
        this.element.querySelectorAll('input, textarea').forEach(input => {
            if (input.tagName == 'INPUT') {
                input.addEventListener('blur', event => {
                
                    if (input.checkValidity() == false) {
                        input.classList.add('is-invalid');
                    } else {
                        input.classList.remove('is-invalid');
                    }
                    this.checkFormValidity();
                });
            } else {
                input.addEventListener('keyup', event => {
                
                    if (input.checkValidity() == false) {
                        input.classList.add('is-invalid');
                    } else {
                        input.classList.remove('is-invalid');
                    }
                    this.checkFormValidity();
                });
            }
        });
    }

    // Check if all inputs ara validated then active send button
    checkFormValidity() {

        let button = this.element.querySelector('button');

        if (this.element.checkValidity()) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }

}