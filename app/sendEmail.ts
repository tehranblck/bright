import nodemailer from 'nodemailer';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, phone, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail', // veya kullanacağınız e-posta servisi
            auth: {
                user: process.env.EMAIL_USER, // .env dosyanızdaki kullanıcı adı
                pass: process.env.EMAIL_PASS, // .env dosyanızdaki şifre
            },
        });

        const mailOptions = {
            from: email,
            to: 'sizinemail@ornek.com', // Gelen e-posta adresi
            subject: `Yeni Mesaj: ${name}`,
            text: `Ad: ${name}\nTelefon: ${phone}\nE-posta: ${email}\nMesaj: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Mesaj gönderildi' });
        } catch (error) {
            res.status(500).json({ message: 'Mesaj gönderilemedi', error });
        }
    } else {
        res.status(405).end(); // Sadece POST isteklerini kabul eder
    }
};
