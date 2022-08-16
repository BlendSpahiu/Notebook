import Joi from "joi";

export const NoteValidator = (): Joi.ObjectSchema => Joi.object({
    id: Joi.string(),
    title: Joi.string().required().label('Title').messages({
        'string.empty': 'Title cannot be empty!'
    }),
    category: Joi.string().required().label('Category').messages({
        'string.empty': 'Category cannot be empty!'
    }),
    content: Joi.string().required().label('Content').messages({
        'string.empty': 'Content cannot be empty!'
    }),
})