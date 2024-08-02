const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const signUpAdmin = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {

        const existingUser = await prisma.admin.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.admin.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword,

            },
        });

        res.status(201).json({ message: 'success' });
    } catch (error) {

        console.error('Error in registration:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
};
module.exports = signUpAdmin
