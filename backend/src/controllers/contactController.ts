import { Request, Response } from 'express';

interface ContactRequest {
  name: string;
  email: string;
  message: string;
  company?: string;
}

export const contactController = {
  submitContact: (req: Request, res: Response) => {
    const { name, email, message, company }: ContactRequest = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Name, email, and message are required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Please provide a valid email address'
      });
    }

    // Here you would typically save to database or send email
    console.log('Contact form submission:', { name, email, message, company });

    res.json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!',
      submittedAt: new Date().toISOString()
    });
  }
};