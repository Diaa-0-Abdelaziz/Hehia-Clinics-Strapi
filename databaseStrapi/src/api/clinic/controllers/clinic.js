'use strict';

/**
 * clinic controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::clinic.clinic', ({strapi}) => ({
    async findOne(ctx){
        const {id} = ctx.params;
        const entity = await strapi.db.query('api::clinic.clinic').findOne({
            where: {clinicName: id},
            populate: ['doctorName', 'image']
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    }
}));
