/**
 * Create bans table
 * @param {import('knex')} knex 
 */
exports.up = async (knex) => {
    await knex.schema.createTable('moderation_user_ban', (t) => {
        t.bigIncrements('id').notNullable().unsigned();
        // user id
        t.bigInteger('user_id').notNullable().unsigned(); // id of the user banned

t.string('internal_reason', 255).notNullable(); // the reason
        t.bigInteger('author_user_id').notNullable().unsigned(); // userid who did the ban
        t.string('reason', 255).notNullable(); // the reason
        t.dateTime("created_at").notNullable().defaultTo(knex.fn.now()); // date ban was created

t.dateTime("expired_at").defaultTo(knex.fn.now()); // date ban expires
        t.dateTime("updated_at").defaultTo(knex.fn.now()); // date ban was last updated

        t.index(['author_user_id']);
        t.index(['user_id']);
    });
};

/**
 * Drop the bans table
 * @param {import('knex')} knex 
 */
exports.down = async (knex) => {
    await knex.schema.dropTable('moderation_user_ban');
};
