import {
  N3_presentation,
  N2_presentation,
  N1_presentation,
} from "../../assets/presentation";
import {
  N1airframe,
  n2launch,
  n3,
  n3_launch,
  perkerra2,
  tana,
  tembo_launch,
} from "../../assets/rockets";

const rockets = [
  {
    name: "N-3 rocket (2023)",
    description:
      "The N-3 rocket improves on several issues experienced with the N-2 rocket, including a parachute with improved reliability, on-board flight logging, and a comprehensive redesign of the airframe and launch pad. The solid-state motor is KNSB, as on the N-2 rocket, and the apogee has been upgraded to 1,600 meters.",
    specifications: [
      {
        name: "N3-F (Simba, Kifaru)",
        airframeMaterial: "Fibreglass",
        length: "192 cm",
        diameter: "86 mm",
        dryMass: "5.1 kg",
        totalMass: "10.5 kg",
        simulatedApogee: "1,636 m",
        propellant: "KNSB (K1149 motor)",
        simulatedImpulse: "2,104 [N•s]",
      },
      {
        name: "N3-A (Tembo, Kabura)",
        airframeMaterial: "Aluminum",
        length: "200 cm",
        diameter: "82 mm",
        dryMass: "5.1 kg",
        totalMass: "10.5 kg",
        simulatedApogee: "1,637 m",
        propellant: "KNSB (K1149 motor)",
        simulatedImpulse: "2,104 [N•s]",
      },
    ],
    launchDate: "January 30, 2024",
    internshipReport: N3_presentation,
    image: n3_launch,
    image1: tembo_launch,
    image2: n3,
    video: "https://www.youtube.com/embed/Flo1cixbKFA",
  },
  {
    name: "N-2 rocket (2022)",
    description:
      "The N-2 rocket aims to bring the payload up to 500m altitudes. The casing and the nozzle of the solid rocket motor are made with mild steel, and the fuselage is made with the fiberglass. It will demonstrate the performance of the flight controller to stabilize the rocket using reaction wheel and active canard fins. The payload camera records the video during flight. The payload is recovered by a parachute and telemetry system using GPS. Due to the higher apogee, the launch was conducted assisted by the Kenya Space Agency (KSA).",
    specifications: [
      {
        name: "Tana",
        airframeMaterial: "Fibreglass",
        length: "",
        diameter: "56mm",
        dryMass: "",
        totalMass: "",
        simulatedApogee: "",
        propellant: "KNSB (I229 class 50mm SRM.)",
        simulatedImpulse: "503 N•s",
      },
      {
        name: "Galana",
        airframeMaterial: "Fibreglass",
        length: "",
        diameter: "56mm",
        dryMass: "",
        totalMass: "",
        simulatedApogee: "",
        propellant: "KNSB (I229 class 50mm SRM.)",
        simulatedImpulse: "503 N•s",
      },
      {
        name: "Perkerra",
        airframeMaterial: "Fibreglass",
        length: "",
        diameter: "75mm",
        dryMass: "",
        totalMass: "",
        simulatedApogee: "",
        propellant: "KNSB (I229 class 50mm SRM.)",
        simulatedImpulse: "503 N•s",
      },
    ],
    launchDate: [
      "November 23, 2022",
      "April 22, 2022 (Low altitude test flight. Report)",
    ],
    internshipReport: N2_presentation,
    image: tana,
    image1: perkerra2,
    image2: n2launch,
    video: "https://www.youtube.com/embed/fNx5h-SQzBk",
  },
  {
    name: "N-1 rocket (2021)",
    description:
      "N-1 rocket is our first rocket powered by a solid rocket motor that uses sugar and potassium nitrate as the propellant. The airframe is 3D printed and equips the minimum required flight electronics. Through the development of the N-1 rocket, we aimed to acquire basic rocketry techniques and establish a safety launch sequence.",
    specifications: [
      {
        name: "",
        airframeMaterial: "PLA (3D printed)",
        length: "99.6 cm",
        diameter: "",
        dryMass: "",
        totalMass: "1.28 kg",
        simulatedApogee: "285 m",
        propellant: "KNSU (G146 class 40mm SRM)",
        simulatedImpulse: "110 N•s",
      },
    ],
    launchDate: [
      "April 20, 2021",
      "May 3, 2021 (Recorded apogee: 34m)",
      "May 7, 2021",
    ],
    internshipReport: N1_presentation,
    image: N1airframe,
    image1: "",
    image2: "",
    video: "https://www.youtube.com/embed/iMHYXUQMb2I",
  },
];

export default rockets;
