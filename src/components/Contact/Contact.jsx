import { motion } from "framer-motion"
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const variants = {
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 1, ease: 'easeOut' },
    }),
    hidden: { opacity: 0, y: 50 },
  };

export default function Contact({handleOpenModal}) {
    const emailId = useId()
    const msgId = useId()

    const initialValues = {
        email: '',
        message: ''
    }

    const FeedbackScheme = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Required'),
    message: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!')
    })
    
    const handleSubmit = (values, actions) => {
        actions.resetForm()
    }

    function SuccesIcon ({ name }) {
        const { errors, touched } = useFormikContext()
        const isValid = touched[name] && !errors[name]
        
        return isValid ? (
            <svg className="work-success-icon" width="16" height="16">
                        <use href="/img/icons.svg#icon-ack"></use>
                      </svg>
        ) : null
    }

    return (
    <section id="contact" className="section">
      <div className="container work-wrapper">
       <div className="work-left">
        <motion.h2 className="work-title" variants={variants} custom={1} initial='hidden' whileInView='visible' viewport={{ once: true }}>
          Let's<span> work together</span>
        </motion.h2>
        <motion.p className="work-text" variants={variants} custom={2} initial='hidden' whileInView='visible' viewport={{ once: true }}>
        contact me to transform your ideas into exceptional solutions.
        </motion.p>
        <motion.ul className="work-list" variants={variants} custom={3} initial='hidden' whileInView='visible' viewport={{ once: true }}>
          <li className="work-item">
           <svg className="work-icon" width="24" height="24">
            <use href="/img/icons.svg#icon-mail"></use>
           </svg>
           <a className="work-link" href="mailto:yerashova.a@gmail.com">yerashova.a@gmail.com</a>
         </li>
         <li className="work-item">
          <svg className="work-icon" width="24" height="24">
            <use href="/img/icons.svg#icon-map"></use>
          </svg>
          <a className="work-link" href="https://www.google.com/maps?q=Seville,+Spain" target="_blank">Seville, Spain</a>
         </li>
        </motion.ul>
       </div>
        <motion.div className="work-right" variants={variants} custom={4} initial='hidden' whileInView='visible' viewport={{ once: true }}>
           <Formik initialValues={initialValues} validationSchema={FeedbackScheme} onSubmit={handleSubmit}>
                <Form className="work-form">
                    <label htmlFor={emailId} className="visually-hidden">Email</label>
                     <Field type='email' name='email' id={emailId} placeholder="Your email*" className="work-input"/>
                       <SuccesIcon name='email'/>
                       <ErrorMessage name='email' component='span' className='error-message'></ErrorMessage>
                    <label htmlFor={msgId} className="visually-hidden">Email</label>
                     <Field as='textarea' type='text' name='message' id={msgId} placeholder="Your message" className="work-message" />
                       <ErrorMessage name='message' component='span' className='error-message'></ErrorMessage>
                    <button type="submit" className="work-btn gradient-btn" onClick={handleOpenModal}>Send message</button>        
                </Form>  
            </Formik>
    </motion.div>
  </div>
</section>
    )
}