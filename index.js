exports.handlers = {
    jsdocCommentFound: function (e) {
        if (e.comment.indexOf('@jsdoc-prevent-comment-parse') !== -1) {
            e.preventDefault = true
        }
    }
};