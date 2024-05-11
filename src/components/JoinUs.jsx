const JoinUs = () => {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            We are seeking members
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Nakuja project is a student-driven project. Most of the students
            come from Jomo Kenyatta University of Agriculture And Technology
            (JKUAT). There are also students from other universities, such as
            Kenyatta University and Dedan Kimathi University of Technology.
          </p>
          <img
            src="https://nakujaproject.com/image/gallery/dryrun.webp"
            alt="image"
            className="mt-4 rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-extrabold text-gray-900">Internship</h3>
          <p className="mt-4 text-lg text-gray-500">
            The best way to catch up with the team is to join the internship
            program. In 2024, we will offer the internship for 12 weeks from
            January to April. We will offer another batch from May to September
            2024 for the same 12 weeks.
          </p>
          <p className="mt-2 text-lg text-gray-500">
            The internship program is open to all students in Kenya, but we need
            commitment for the whole period. This is not suitable for the
            students who intend to just fulfill the requirements for their
            curriculum. It is an intensive program, and the participants will
            learn a lot from interacting with the other participants.
          </p>
          <p className="mt-2 text-lg text-gray-500">
            The students are also expected to learn by themselves actively. We
            recommend the participants will acquire the following skills through
            the program.
          </p>
          <ul className="mt-4 list-disc pl-6 text-lg text-gray-500">
            <li>
              Mechanical &amp; Mechatronics : Mechanical design, 3D CAD
              (SolidWorks/Fusion 360), Mechanics of materials and FEM (ANSYS),
              Fluid dynamics and CFD (ANSYS Fluent), Machining (lathe, drilling,
              CNC), Welding, 3D printing
            </li>
            <li>
              Electrical &amp; Electronics: PCB design (KiCAD), Embedded
              programming (Arduino, ESP32, Raspberry Pi, FPGA), Controller
              design and signal processing (MATLAB/Simulink)
            </li>
            <li>
              Telecommunications: Antenna design, Vector network analyzer, Web
              and server side programming
            </li>
            <li>Software programming: C/C++, Python, Linux, FreeRTOS</li>
          </ul>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-extrabold text-gray-900">
            Final year project
          </h3>
          <p className="mt-4 text-lg text-gray-500">
            For JKUAT students, the final year student can conduct their final
            year project under the Nakuja project. Below is the list of the
            final year projects that were done in the previous years.
          </p>
          <div className="mt-6">
            <h4 className="text-xl font-bold text-gray-900">2023</h4>
            <ul className="mt-2 list-disc pl-6 text-lg text-gray-500">
              <li>
                Ignition System for Liquid Rocket Engine (P. Munyao, I. Mercy,
                V. Barasa, S. Tinega)
              </li>
              <li>Active Fin Control System Using Tail Fins (B. Gatai)</li>
              <li>
                Solid Rocket Propellant Grain Packing Machine (L. Mukeni, B.
                Munge)
              </li>
              <li>LoRa Telemetry (S. Osman, J. Kisaka, R. Naibei)</li>
              <li>Wireless Power Transmission (J. Hope)</li>
            </ul>
          </div>
          <div className="mt-6">
            <h4 className="text-xl font-bold text-gray-900">2022</h4>
            <ul className="mt-2 list-disc pl-6 text-lg text-gray-500">
              <li>
                Liquid rocket engine closed loop control cooling system (F.
                Gateru, M. Kimani)
              </li>
              <li>Active fin control system (N. Musliah, F. Wambui)</li>
              <li>
                Controlled plumbing system for a liquid rocket engine (M.
                Gichia, J. Too)
              </li>
              <li>
                Fuel injector for a liquid engine rocket (M. Kamau, S. Muga)
              </li>
              <li>Thrust vector control (R. Mukono, M. Thuku)</li>
              <li>Rocket recovery system (C. Mucheru, G. Bange, M. Munialo)</li>
              <li>Rocket telemetry system (I. Muchiri, C. Yator)</li>
            </ul>
          </div>
        </div>
        <p className="mt-4">
          We are seeking members. Please send an email to info@nakujaproject.com
          or come to the JKUAT Engineering Laboratory Building 2nd floor
          (ELB213).
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
