// File: about.js
// Author: Rodrigo Soto
// Student number: 301295478
// Date: 01-10-2023

module.exports.about = function (req, res, next) {
    res.render('about',
        {
            title: "About me",
            asset1: "Skills",
            asset2: "Work experience",
            asset3: "Education",
            asset4: "Extracurricular activities",
            jobTitle1:"IoT Project Development Junior Engineer          (Jan 2022- Dec 2022)",
            jobDesc1:"Experienced Technical Professional with a proven track record in enhancing efficiency and performance. Skilled in code optimization, hardware design, and automation. Proficient in Python programming, solving connectivity issues, and evaluating cloud databases. Adept in improving UX/UI and providing exceptional client service. Strong documentation and project management skills.",
            jobTitle2:"IoT Project Development Intern          (Aug 2021- Dec 2021)",
            jobDesc2:"Results-driven Technical Professional with expertise in 3D design simulation, UI development for HMI systems, and software testing. Active participant in collaborative project discussions, offering valuable insights. Skilled in troubleshooting and assisting in device repairs and modifications. Proven track record in optimizing production processes, reducing production time by 50%. Proficient in circuit design and testing.",
            Education1: "SOFTWARE ENGINEERING DIPLOMA - SCHOOL OF ENGINEERING TECHNOLOGY AND APPLIED SCIENCE CENTENNIAL COLLEGE, TORONTO, ON CANADA",
            EdDesc1: "Jan 2023 – Present",
            Education2:"BACHELOR IN MECHATRONICS ENGINEERING - FACULTY OF APPLIED SCIENCES AND ENGINEERING PONTIFICAL CATHOLIC UNIVERSITY OF PERU, LIMA PERU",
            EdDesc2: "Dec 2022"
        }
    );
}

