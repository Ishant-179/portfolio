import { useState, useRef, useEffect } from 'react'; // Added useEffect for theme management
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { EarthCanvas } from './canvas'; // Assuming EarthCanvas is correctly imported
import { slideIn } from '../utils/motion'; // Assuming slideIn utility is correctly imported
import { styles } from '../styles'; // Assuming styles are correctly imported
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'sonner'; // Import Toaster and toast from sonner

// EmailJS Public Key, Template ID, and Service ID
// bihNam5ypdoVrJT2P
// template_fjkeaaq
// service_z880057

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  // State for theme management, to ensure Toaster matches the app's theme
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Handles changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true

    // Send email using EmailJS
    emailjs.send(
      'service_z880057', // Your EmailJS Service ID
      'template_fjkeaaq', // Your EmailJS Template ID
      {
        from_name: form.name,
        to_name: 'Ishant', // Recipient name
        from_email: form.email,
        to_email: 'ishantverma7488@gmail.com', // Recipient email
        message: form.message,
      },
      'bihNam5ypdoVrJT2P' // Your EmailJS Public Key
    )
    .then(() => {
      setLoading(false); // Set loading state to false
      toast.success('Thank you. I will get back to you as soon as possible.'); // Show success notification using Sonner
      // Clear form fields after successful submission
      setForm({
        name: '',
        email: '',
        message: ''
      });
    }, (error) => {
      setLoading(false); // Set loading state to false
      console.error(error); // Log the error to the console
      toast.error("Something went wrong."); // Show error notification using Sonner
    });
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      {/* Contact form section */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>GET IN TOUCH</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          {/* Name input field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          {/* Email input field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          {/* Message textarea field */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none' // Added resize-none to prevent manual resizing
            />
          </label>
          {/* Submit button */}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit rounded-xl font-bold shadow-md shadow-primary text-white'
          >
            {loading ? "Sending..." : "Send"} {/* Dynamic button text based on loading state */}
          </button>
        </form>
      </motion.div>

      {/* EarthCanvas 3D model section */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

      {/* Sonner Toaster for notifications */}
      <Toaster position="bottom-right" richColors theme={theme} />
    </div>
  );
};

// Export the component wrapped with SectionWrapper for consistent styling/layout
export default SectionWrapper(Contact, "contact");
