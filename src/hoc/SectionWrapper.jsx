import { motion } from 'framer-motion';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0 mt-10 xs:mt-14`}>
                
                {/* The non-breaking space character is a placeholder for the 
                actual component that this is wrapping */}
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>

                {/* This is the component prop */}
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper