// Each project can have a full case study. Fill in placeholders marked
// [ADD_...] as you get real content, images, results and specifications.
// `image` paths point to /public/assets/... — drop your photos in the
// matching folder and keep the filename, or update the path here.

export const projects = [
  {
    id: "gearbox-sand-loosening",
    number: "01",
    name: "Gearbox Design for Electric Sand Loosening Machine",
    category: "Mechanical Design",
    year: "Ongoing",
    tools: ["SolidWorks", "MATLAB", "Engineering Calculations"],
    size: "large",
    shortDescription:
      "Group project to design a gearbox for an electric sand loosening machine — gear ratio calculations, component selection and CAD modelling.",
    heroImage: "/assets/gearbox/gearbox-hero.jpg",
    gallery: [
      "/assets/gearbox/gearbox-cad.jpg",
      "/assets/gearbox/gearbox-calculation.jpg",
      "/assets/gearbox/gearbox-component.jpg",
      "/assets/gearbox/gearbox-assembly.jpg",
    ],
    overview:
      "A group project focused on designing a gearbox for an electric sand loosening machine, covering the full path from gear ratio calculations through to a manufacturable assembly.",
    myRole:
      "[ADD PROJECT DETAILS — describe your specific contribution within the group: which calculations, components or drawings you were responsible for.]",
    challenge:
      "[ADD PROJECT DETAILS — what mechanical or performance constraint made this gearbox non-trivial to design?]",
    approach: ["Understand", "Concept", "Design", "Analyse", "Build", "Test"],
    technicalDetails: {
      calculations: "[ADD_CALCULATION_HERE]",
      materials: "[ADD PROJECT DETAILS]",
      constraints: "[ADD PROJECT DETAILS]",
      simulationResults: "[ADD_FEA_RESULT_HERE]",
      performanceResults: "[ADD_TEST_RESULT_HERE]",
    },
    lessonsLearned: "[ADD PROJECT DETAILS]",
  },
  {
    id: "rice-cooker-reverse-engineering",
    number: "02",
    name: "Reverse Engineering of a Rice Cooker",
    category: "Reverse Engineering",
    year: "Semester 4",
    tools: ["SolidWorks", "Production Drawings", "Measurement Tools"],
    size: "small",
    shortDescription:
      "Reverse engineered a household rice cooker through physical measurement, component analysis and material identification, personally modelling the outer-body component.",
    heroImage: "/assets/rice-cooker/rice-cooker-photo.jpg",
    gallery: [
      "/assets/rice-cooker/measurements.jpg",
      "/assets/rice-cooker/cad-model.jpg",
      "/assets/rice-cooker/drawing.jpg",
      "/assets/rice-cooker/final-component.jpg",
    ],
    overview:
      "A full teardown and reverse-engineering exercise on a household rice cooker: physical measurement, component analysis, assembly modelling, material identification and manufacturing-process identification.",
    myRole:
      "Personally developed the outer-body component from raw measurements through to SolidWorks 3D modelling and production drawings.",
    challenge:
      "[ADD PROJECT DETAILS — what made the outer-body geometry or tolerances difficult to capture accurately from measurement alone?]",
    approach: ["Understand", "Concept", "Design", "Analyse", "Build", "Test"],
    technicalDetails: {
      calculations: "[ADD PROJECT DETAILS]",
      materials: "[ADD PROJECT DETAILS — identified material of the outer body]",
      constraints: "[ADD PROJECT DETAILS]",
      simulationResults: "[ADD_FEA_RESULT_HERE]",
      performanceResults: "[ADD_TEST_RESULT_HERE]",
    },
    lessonsLearned: "[ADD PROJECT DETAILS]",
  },
  {
    id: "table-serving-robot",
    number: "03",
    name: "Table Serving Robot",
    category: "Mechatronics",
    year: "Mechatronics Project",
    tools: ["Arduino", "C++", "Sensors", "Motor Control"],
    size: "small",
    shortDescription:
      "An Arduino-based table serving robot — programming, sensor integration, motor control, circuit wiring, fabrication, testing and debugging.",
    heroImage: "/assets/robot/robot-hero.jpg",
    gallery: [
      "/assets/robot/robot-cad.jpg",
      "/assets/robot/robot-electronics.jpg",
      "/assets/robot/robot-build.jpg",
      "/assets/robot/robot-testing.jpg",
    ],
    overview:
      "A table serving robot built around Arduino-based control, combining mechanical fabrication with sensor integration and motor control logic.",
    myRole:
      "[ADD PROJECT DETAILS — describe your specific responsibilities: programming, wiring, fabrication, or a mix.]",
    challenge:
      "[ADD PROJECT DETAILS — what was the hardest part to get reliable: navigation, sensing, or mechanical build?]",
    approach: ["Understand", "Concept", "Design", "Analyse", "Build", "Test"],
    technicalDetails: {
      calculations: "[ADD PROJECT DETAILS]",
      materials: "[ADD PROJECT DETAILS]",
      constraints: "[ADD PROJECT DETAILS]",
      simulationResults: "[ADD_TEST_RESULT_HERE]",
      performanceResults: "[ADD_TEST_RESULT_HERE]",
    },
    lessonsLearned: "[ADD PROJECT DETAILS]",
  },
  {
    id: "multifunctional-pen-holder",
    number: "04",
    name: "Multifunctional Pen Holder",
    category: "Manufacturing",
    year: "Manufacturing Technology Project",
    tools: ["Woodworking", "Arc Welding", "Sheet Metal Fabrication"],
    size: "small",
    shortDescription:
      "A designed and manufactured multifunctional pen holder — hands-on experience in woodworking, arc welding and sheet-metal fabrication.",
    heroImage: "/assets/pen-holder/pen-holder-hero.jpg",
    gallery: [
      "/assets/pen-holder/pen-holder-design.jpg",
      "/assets/pen-holder/pen-holder-manufacturing.jpg",
      "/assets/pen-holder/pen-holder-final.jpg",
    ],
    overview:
      "A product design and manufacturing project: a multifunctional pen holder built using a mix of woodworking, arc welding and sheet-metal fabrication techniques.",
    myRole:
      "[ADD PROJECT DETAILS — describe your specific contribution to design and manufacture.]",
    challenge:
      "[ADD PROJECT DETAILS — what functional or manufacturing constraint shaped the final design?]",
    approach: ["Understand", "Concept", "Design", "Build", "Test"],
    technicalDetails: {
      calculations: "[ADD PROJECT DETAILS]",
      materials: "[ADD PROJECT DETAILS]",
      constraints: "[ADD PROJECT DETAILS]",
      simulationResults: "[ADD_FEA_RESULT_HERE]",
      performanceResults: "[ADD_TEST_RESULT_HERE]",
    },
    lessonsLearned: "[ADD PROJECT DETAILS]",
  },
];
