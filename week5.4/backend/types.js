const z = require('zod');

const userSchema = z.object({
    username: z.string().min(3).max(20),
    description: z.string(),
    interests: z.array(z.string()).min(1),
    socials: z.array(z.string()).min(1)
});

module.exports = {
    userSchema
}