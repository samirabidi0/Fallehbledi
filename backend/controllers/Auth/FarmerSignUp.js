const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.Register = [
    body('firstName')
        .isLength({ min: 4 }).withMessage('firstname must be longer than 4 characters'),
        body('lastName')
        .isLength({ min: 4 }).withMessage('lastname must be longer than 4 characters'),  
    body('email')
        .isEmail().withMessage('Email must be valid')
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).withMessage('Email must be a valid email address format'),
    body('password')
        .isLength({ min: 6 }).withMessage('Password must be longer than 6 characters')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
        .matches(/[0-9]/).withMessage('Password must contain at least one digit')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Password must contain at least one special character'),
    body('firstname').custom(async (value) => {
        const user = await prisma.user.findFirst({ where: { firstname: value } });
        if (user) {
            throw new Error('firstname already in use');
        }
        return true;
    }),
    body('email').custom(async (value) => {
        const user = await prisma.user.findFirst({ where: { email: value } });
        if (user) {
            throw new Error('Email already in use');
        }
        return true;
    }),

    async (req, res) => {
        console.log('Received register request:', req.body); // Log request body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('Validation errors:', errors.array()); // Log validation errors
            return res.status(400).json({ errors: errors.array() });
        }

        const { firstName,lastName, email, password, address, profileImage, location, status } = req.body;

        try {
            const existingUser = await prisma.user.findFirst({
                where: {
                    OR: [
                        { firstName },
                        { email }
                    ]
                }
            });

            if (existingUser) {
                console.log(existingUser.firstName === firstName ? 'firstname already in use' : 'Email already in use'); // Log existing user case
                return res.status(400).json({ errors: [{ msg: existingUser.firstName === firstName ? "firstname already in use" : "Email already in use", param: existingUser.firstName === firstName ? "firstname" : "email" }] });
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = await prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                    address,
                    location,
                    profileImage,
                    location,
                    status
                }
            });

            console.log('User registered successfully:', newUser); // Log successful registration
            res.status(201).json({ message: "User registered successfully", user: newUser });
        } catch (error) {
            console.error('Server error:', error); // Log server error
            res.status(500).json({ errors: [{ msg: "Server error", param: "general" }] });
        }
    }
];