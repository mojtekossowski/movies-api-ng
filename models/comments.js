const { db, TABLES } = require('../db');

exports.getAllComments = () => {
    return db.select('*').from(TABLES.COMMENTS);
}

exports.getCommentsById = (id) => {
    return db.select('*').from(TABLES.COMMENTS)
        .where('id', id);
}

exports.getCommentsByUser = (user) => {
    return db.select('*').from(TABLES.COMMENTS)
        .where('user', 'ilike', `%${user}%`);
}

exports.saveComment = (comment) => {
    return db.insert(comment).into(TABLES.COMMENTS);
}

exports.updateComment = (id, changes) => {
    return db(TABLES.COMMENTS)
        .where('id', id)
        .update(changes);
}

exports.removeComment = (id) => {
    return db(TABLES.COMMENTS)
        .where('id', id)
        .delete();
}