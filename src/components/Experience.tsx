import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

type Experience = {
  id: string;
  title: string;
  description: string;
};

const experiences: Experience[] = [
  {
    id: "2018 - Present",
    title: "AD-IOS Digital Marketing Company",
    description: `
      <h3>Web Team Manager / Former Web Developer</h3>
      <p>I began my career as a web designer and developer, initially handling small projects. Over time, I was offered the opportunity to lead a team of three web designers. This team eventually grew to 15 members, including web designers, full stack developers, SEO specialists, graphic designers, and content writers.</p>
      <hr/><h4>TASKS</h4></h4></h3><ul><li>Manage Team</li><li>Web Design</li><li>Web Development</li><li>Client Communication</li><li>Server Maintenance</li></ul>
      `,
  },
  {
    id: "2018 - Open Contract",
    title: "Digital HP",
    description: `
    <h3>Senior Web Developer / Webmaster</h3>
  <p>I worked as a webmaster, managing all websites and servers. My responsibilities included creating staging links, building websites from scratch, developing custom WordPress themes and plugins, and publishing sites live. We utilized various CRMs, including WordPress, Duda, Kajabi, Webflow, GoHighLevel, and more. Additionally, I handled server management across platforms such as Cloudways and other hosting providers.</p>
  <hr/>
  <h4>TASKS</h4>
  <ul>
    <li>Server Management</li>
    <li>Web Design</li>
    <li>Web Development</li>
    <li>Client Communication</li>
  </ul>
`,
  },
  {
    id: "2017 - 2018",
    title: "Mopro Philippines",
    description: `
    <h3>Junior Web Designer</h3>
  <p>Build website using a platform owned by the company. We build it from scratch using a template and redesign existingsite. We also cater revisions using css, javascript or jquery.</p>
  <hr/>
  <h4>TASKS</h4>
  <ul>
    <li>Web Design</li>
  </ul>
`,
  },
  {
    id: "2015 - 2017",
    title: "Dynata / Former Survey Sampling International",
    description: `
    <h3>Survey Programmer</h3>
  <p>Web program online surveys for our clients. We are using a company owned platform called confirmit and builder, php, html/css, javascript, Mysql</p>
  <hr/>
  <h4>TASKS</h4>
  <ul>
    <li>Program Online Surveys</li>
    <li>Data Structure</li>
  </ul>
`,
  },
  {
    id: "2015",
    title: "Accenture",
    description: `
    <h3>Data Analyt</h3>
  <p>Claim insurance processing, accepting / updating and rejecting insurance, constructing data using SQL</p>
  <hr/>
  <h4>TASKS</h4>
  <ul>
    <li>Claims Processing</li>
  </ul>
`,
  },
];

const AccordionSection = () => {
  const [activeId, setActiveId] = useState<String | null>(null);

  const toggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="accordion-wrapper">
      {experiences.map((Experience) => (
        <motion.div
          className="accordion-item"
          key={Experience.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* shine effect */}
          <motion.div
            className="shine"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: 0,
            }}
            whileHover={{
              x: ["-100%", "100%"],
            }}
          />

          <div
            className="accordion-header"
            onClick={() => toggle(Experience.id)}
          >
            <div className="left">
              <div className="header-top">
                <span className="experience-id">{Experience.id}</span>
                <h3 className="experience-title">{Experience.title}</h3>
              </div>
            </div>

            <motion.div
              className="icon"
              animate={{ rotate: activeId === Experience.id ? 180 : 0 }}
              transition={{ duration: 0.1 }}
            >
              <FiChevronDown />
            </motion.div>
          </div>

          <AnimatePresence initial={false}>
            {activeId === Experience.id && (
              <motion.div
                className="accordion-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="experience-description"
                  dangerouslySetInnerHTML={{ __html: Experience.description }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </section>
  );
};

export default AccordionSection;
