import emailjs from "@emailjs/browser";

export const sendContactEmail = (form) =>
  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: form.name,
      email: form.email,
      message: form.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );