import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { testimonials } from "../constants"

const FeedbackCard = ({index, testimonial, name, designation, company, image}) => (
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)} className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-2">
      <p className="text-white text-[18px] tracking-wider">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-3">
      <div className="flex flex-1 flex-col">
      <p className="font-medium text-white text-[16px]"><span className="blue-text-gradient">@</span> {name}</p>
      <p className="text-[12px] text-secondary">{designation} of {company}</p>
      </div>
        <img src={image} alt={`feedback-${name}`} className="h-10 w-10 rounded-full object-cover" />
      </div>
      </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary min-h-[300px] rounded-3xl`}>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What other say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.padding} -mt-20 pb-14 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
              <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")