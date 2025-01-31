import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Building2,
  Calendar,
  FileText,
  Globe,
  GraduationCap,
  Mail,
  Phone,
  School,
  Send,
  Users,
} from "lucide-react";
import { VscLaw } from "react-icons/vsc";
import qrCodeImg from "../assets/images/qrCodeImg.png";
function Home() {
  const committees = {
    steeringCommittee: {
      title: "Steering Committee",
      members: [
        {
          role: "Chief Patron",
          name: "Shri Mumtaz Ali",
          position: "Honourable Chancellor",
          institution: "Maulana Azad National Urdu University, Hyderabad",
        },
        {
          role: "Chief Patron",
          name: "Prof. Syed Ainul Hasan",
          position: "Honourable Vice-Chancellor",
          institution: "Maulana Azad National Urdu University, Hyderabad",
        },
        {
          role: "Patron",
          name: "Prof. Sk. Ishtiaque Ahmed",
          position: "Registrar",
          institution: "Maulana Azad National Urdu University, Hyderabad",
        },
        {
          role: "Conference Chair",
          name: "Prof. Tabrez Ahmad",
          position: "Dean and HOD, MANUU Law School",
          institution: "Maulana Azad National Urdu University, Hyderabad",
        },
        {
          role: "Organising Secretary",
          name: "Dr. Rashmi K. S.",
          position: "Assistant Professor",
          institution: "MANUU Law School",
        },
      ],
    },
    technicalChairs: {
      title: "Technical Session Chairs",
      members: [
        {
          name: "Prof.(Dr.) Ajit Kaushal",
          position: "Professor & Head",
          institution:
            "Royal School of Law & Administration, Royal Global University, Guwahati",
        },
        {
          name: "Dr. Mohammad Nizam Ashraf Khan",
          position: "Associate Professor of Law and Head of IPR Cell",
          institution: "G D Goenka University, Gurugram, Haryana",
        },
        {
          name: "Dr. Vedashree.A",
          position: "Associate Professor",
          institution: "Alliance School of Law, Alliance University, Bengaluru",
        },
        {
          name: "Dr. Upankar Chutia",
          position: "Associate Professor",
          institution: "Alliance School of Law, Alliance University, Bengaluru",
        },
      ],
    },
    publicityChairs: {
      title: "Publicity Chairs",
      members: [
        {
          name: "Dr. Sateesh Kumar",
          institution:
            "MANUU Law School, Maulana Azad National Urdu University, Hyderabad",
        },
        {
          name: "Dr. Tausif Ur Rehman",
          institution:
            "MANUU Law School, Maulana Azad National Urdu University, Hyderabad",
        },
      ],
    },
    internalAdvisoryBoard: {
      title: "Internal Advisory Board",
      members: [
        {
          name: "Prof. Faizan Mustafa",
          institution:
            "Vice Chancellor, Chanakya National Law University, & Adjunct Professor, MANUU Law School",
        },
        {
          name: "Prof. Tabrez Ahmad",
          institution: "Dean& HOD, MANUU Law School",
        },
        {
          name: "Dr. Sudhanshu Chandra",
          institution: "Assistant Professor, MANUU Law School",
        },
        {
          name: "Dr. Rashmi K S",
          institution: "Assistant Professor, MANUU Law School",
        },
        {
          name: "Dr. Sateesh Kumar",
          institution: "Assistant Professor, MANUU Law School",
        },
        {
          name: "Dr. Tausif Ur Rehman MD",
          institution: "Assistant Professor, MANUU Law School",
        },
        {
          name: "Mr. Mohammed Tabish",
          institution: "Assistant Professor, MANUU Law School",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      {/**===== header section ======== */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base mb-4">
            Maulana Azad National Urdu University
          </p>
          <p className="text-md mb-6">
            (A Central University, Hyderabad, India)
          </p>
          <h1 className="text-lg font-semibold mb-4">MANUU LAW SCHOOL</h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            INTERNATIONAL CONFERENCE ON LAW AND TECHNOLOGY
          </h1>

          <h2 className="text-2xl md:text-3xl mb-8">ICLT 2025</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Exploring the intricate relationship between law and technology in
            the digital age
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-900 hover:bg-blue-50"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfgyCBHjdUTIbUAbnQezpzDvkwZK0RdPZG4s0BSvbcGr5n3ew/viewform",
                "_blank"
              )
            }
          >
            Register Now
          </Button>
        </div>
      </header>

      <section className="py-16 bg-white max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <School className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-center">
              About the University
            </h2>
          </div>
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Maulana Azad National Urdu University (MANUU) is a central
              university established by an Act of the Indian Parliament in the
              year 1998, with all India Jurisdiction, to promote and impart
              research, vocational and technical education through regular and
              distance modes. It is situated in the IT hub of the ever-active
              city of Hyderabad. The University has 7 Schools of Studies, 19
              departments, and 8 Colleges of Teacher Education. It also has five
              polytechnics, two satellite campuses, 14 centres and directorates
              for education and research. By acknowledging the efforts of the
              university in research and education, National Assessment and
              Accreditation Council (NAAC), has awarded an 'A+' grade to the
              University.
            </p>
          </Card>
        </div>
      </section>
      <section className="py-16 bg-white max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <VscLaw className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-center">About ICLT</h2>
          </div>
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Law & technology have an intricate relationship as they are
              connected in a way which renders it challenging to decide whether
              technology should come first or the other way around. Technology
              has contributed to our advancement, creativity, & evolution from
              the development of the wheel to the contemporary discoveries of
              artificial intelligence. The way we live, work, and interact is
              being completely transformed by new technologies including Robots,
              Cybersecurity, Dgital media, communications, Artificial
              Intelligence,Machine learning,Blockchain and Fintech. The legal
              jurisprudence should evolve at the speed of technology,
              specifically, on the issue of applicability & implication of
              current laws and regulations that govern the use of technology
              especially on issues concerning the existing
              national/international law principles of state sovereignty, state
              jurisdiction, state responsibility, & state liability. In order to
              successfully negotiate the challenges of the digital age and
              guarantee a peaceful coexistence that benefits society as a whole,
              the conference seeks to promote a symbiotic relationship between
              law & technology.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-50 max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <GraduationCap className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-center">MANUU Law School</h2>
          </div>
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Dean</h3>
                <p>Prof. (Dr.) Tabrez Ahmad</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Email</h3>
                <p>dean.law@manuu.edu.in</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Phone</h3>
                <p>8755929751</p>
              </div>
            </div>
            <ScrollArea className="h-[400px] w-full rounded-md">
              <div className="p-4">
                <p className="text-gray-700 leading-relaxed mb-4">
                  MANUU Law School aims to explore and identify novel areas of
                  law and policy through relentless engagement in developing
                  legal theory and practice, academic potential, critical
                  analytical ability and advocacy skills so as to fully equip
                  the students with a learning which is intellectually
                  stimulating, socially vital and professionally enriching.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  It has adopted multidisciplinary approach towards legal
                  education and develops a positive attitude in students to make
                  them realize that the lawyers are an integral part of the
                  system of adjudication, determination of policies and setting
                  up of standards for regulation of various activities through
                  relevant institutions.
                </p>
                <h3 className="font-bold text-lg mb-2">Programs Offered</h3>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  <li>5 Years B.A. LL.B (Hons)</li>
                  <li>3 Years LL.B</li>
                  <li>2 Years M.A. (Legal Studies)</li>
                  <li>One Year LL.M (with 6 specializations)</li>
                  <li>Ph.D. (Law)</li>
                </ul>
                <h3 className="font-bold text-lg mb-2">Learning Model</h3>
                <p className="text-gray-700 leading-relaxed">
                  Learning model focuses on activity based learning with
                  techniques including lectures, problem-based learning,
                  seminars, informal small group discussions, Moot Court, Trial
                  Advocacy, Arbitration, Mediation competitions, individually
                  supervised field and library research projects, and a variety
                  of experiential methods.
                </p>
              </div>
            </ScrollArea>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-white max-w-7xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Call for Papers
          </h2>
          <Card className="p-6">
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                MANUU Law School is excited to extend an invitation to all legal
                professionals, scholars, and enthusiasts to participate in the
                International Conference on Law and Technology-ICLT-2025. The
                conference aims to explore the crucial role of law in technology
                and will provide an opportunity to exchange knowledge, connect,
                and collaborate.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Main Theme</h3>
                <p className="text-blue-900">Law and Technology</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Sub Themes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Artificial Intelligence & Law",
                    "Cyber Security & Law",
                    "Digital Media & Law",
                    "National Security & Law",
                    "Forensic Law & Technology",
                    "IPR & Technology",
                    "International Trade Law & Technology",
                    "Law Governing Virtual Currency",
                    "Laws Relating to Robotics",
                    "Regulation of Blockchain Technology",
                    "Regulatory framework for FINTECH",
                    "Bigdata and Law",
                    "Digital Medicines and Law",
                    "Drone Technology, National Security and Law",
                    "Food Processing Technology and Law",
                    "Law and Internet of Things",
                  ].map((theme, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-3 rounded-lg text-sm"
                    >
                      {theme}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 max-w-7xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="flex items-center justify-center gap-2">
              <Users className="w-8 h-8" />
              Conference Committees
            </span>
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-blue-900">
              Steering Committee
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {committees.steeringCommittee.members.map((member, index) => (
                <Card key={index} className="p-6">
                  <h4 className="text-lg font-semibold text-blue-800">
                    {member.role}
                  </h4>
                  <h5 className="text-xl font-bold mt-2">{member.name}</h5>
                  <p className="text-gray-600 mt-1">{member.position}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {member.institution}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-blue-900">
              Technical Session Chairs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {committees.technicalChairs.members.map((member, index) => (
                <Card key={index} className="p-6">
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-gray-600 mt-1">{member.position}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {member.institution}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-blue-900">
              Publicity Chairs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {committees.publicityChairs.members.map((member, index) => (
                <Card key={index} className="p-6">
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-gray-500 text-sm mt-1">
                    {member.institution}
                  </p>
                </Card>
              ))}
            </div>
          </div> */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-blue-900">
              Internal Advisory Board
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {committees.internalAdvisoryBoard.members.map((member, index) => (
                <Card key={index} className="p-6">
                  <h4 className="text-xl font-bold">{member.name}</h4>
                  <p className="text-gray-500 text-sm mt-1">
                    {member.institution}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 max-w-7xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Send className="w-8 h-8 text-blue-900" />
            <h2 className="text-3xl font-bold text-center">Paper Submission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 h-min">
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Guidelines for submission of abstract:
              </h3>
              <div className="space-y-4">
                <h1 className="font-semibold">Title of the abstract</h1>
                <p className="text-base text-gray-600 my-2">
                  <span className="text-base font-medium text-black me-2">
                    Author details with affiliation:
                  </span>
                  Name of the first author, corresponding author & co-authors,
                  Institutional Affiliation, Correspondence Address, E-Mail ID
                  and Phone Number.
                </p>
                <p className="text-base text-gray-600 my-2">
                  <span className="text-base font-medium text-black me-2">
                    Abstract:
                  </span>
                  An abstract of about 350-500 words.
                </p>
                <p className="text-base text-gray-600 my-2">
                  <span className="text-base font-medium text-black me-2">
                    Keywords:
                  </span>
                  Minimum 5 key words.
                </p>
                <p className="text-base text-gray-600 my-2">
                  <span className="text-base font-medium text-black me-2">
                    Cover Page:
                  </span>
                  All the papers should be submitted with a cover page, if
                  scholars/students should be forwarded through research
                  supervisor/guide.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-bold text-lg mb-4">Submission Procedure</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>
                    Fill the google form on the link{" "}
                    <span
                      className="text-orange-400 underline cursor-pointer hover:text-blue-800"
                      onClick={() =>
                        window.open(
                          "https://docs.google.com/forms/d/e/1FAIpQLSfgyCBHjdUTIbUAbnQezpzDvkwZK0RdPZG4s0BSvbcGr5n3ew/viewform",
                          "_blank"
                        )
                      }
                    >
                      Iclt
                    </span>
                  </li>
                  <li>Choose ICLT 2025 and submit your paper</li>
                </ol>
              </div>
            </Card>
            {/* <Card className="p-6 h-min">
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Requirements
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Papers must use the format described in the templates below:
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Word Template
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    PDF Template
                  </Button>
                </div>
                <p className="text-gray-700">
                  Abstracts, of a maximum of 400 words, should be submitted to
                  the conference page.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-bold text-lg mb-4">Submission Procedure</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>
                    Register an account in the Conference Management Toolkit
                    (CMT) portal.
                  </li>
                  <li>Choose ICLT 2025 and submit your paper</li>
                </ol>
              </div>
            </Card> */}

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-900">
                Guidelines for submission of full length paper
              </h3>
              {/* <div className="space-y-4">
                <p className="text-gray-700">
                  Please adhere to the following steps to prepare and submit
                  your camera-ready version by December 30, 2025.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Step 1: Revision</h4>
                    <p className="text-gray-700">
                      Please revise your paper according to the reviews. Take
                      all reviewer comments seriously when preparing your final
                      submission. Special care should be taken for clarity,
                      quality of English, and writing.
                    </p>
                    <div className="mt-2 bg-yellow-50 p-3 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        Note: Papers containing plagiarism or similarity more
                        than 10% will not appear in the conference proceedings.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Step 2: Formatting</h4>
                    <p className="text-gray-700">
                      The camera-ready version should not exceed 12 pages.
                      Prepare your paper strictly following the new ICLT
                      templates:
                    </p>
                    <div className="flex gap-4 mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        Word Template
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        PDF Template
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">
                      Step 3: Final Submission
                    </h4>
                    <p className="text-gray-700">
                      Send the final version via email with:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                      <li>Final PDF version (e.g., ICLT2025-paper-481.PDF)</li>
                      <li>ZIP file with source files or Word document</li>
                    </ul>
                    <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold text-blue-900">
                        Submission Details:
                      </p>
                      <div className="mt-2 space-y-1 text-sm">
                        <p>
                          <span className="font-medium">Email:</span>{" "}
                          ICLT2025@gmail.com
                        </p>
                        <p>
                          <span className="font-medium">Subject Format:</span>{" "}
                          ICLT2025 Camera-Ready Submission [Paper ID]
                        </p>
                        <p>
                          <span className="font-medium">Example:</span> ICLT2025
                          Camera-Ready Submission 481
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="">
                <p className="text-base text-gray-600 my-2">
                  <span className="text-base font-medium text-black me-2">
                    Author details with affiliation:
                  </span>
                  Name of the first author, corresponding author & co-authors,
                  Institutional Affiliation, Correspondence Address, E-Mail ID
                  and Phone Number.
                </p>
                <p className="text-base text-gray-600 my-2">
                  <span className="text-base font-medium text-black me-2">
                    Abstract:
                  </span>
                  An abstract of about 350-500 words with 5 keywords.
                </p>
                <p className="text-base text-gray-600 my-2">
                  <span className="text-base font-medium text-black me-2">
                    Full Paper:
                  </span>
                  The word limit of the paper should be between 4000 to 6000
                  words. The Editorial Board reserves the right to make changes
                  to these conditions and guidelines mentioned herein.
                </p>
                <p className="text-base text-gray-600 my-2">
                  <span className="text-base font-medium text-black me-2">
                    Main Text:
                  </span>
                  Times New Roman, font size 12, 1.5 spacing, justified, with a
                  margin left 1.5 inch and right 1.0-inch, top 1 inch and bottom
                  1 inch. The first line of the paragraph is not to be indented.
                </p>
                <h2 className="text-base font-medium"></h2>
                <p className="text-base text-gray-600 my-2">
                  <span className="text-base font-medium text-black me-2">
                    Sub-titles:
                  </span>
                  Sub titles in Times New Roman, font size 12, bold, capital
                  letters, 1.5 line spacing.
                </p>
                {/* <h2 className="text-base font-medium">Citation:</h2> */}
                <p className="text-base text-gray-600 my-2">
                  <span className="text-base font-medium text-black me-2">
                    Citation:
                  </span>
                  Submissions are required to strictly adhere to <br />
                  <span className="font-semibold"> The Bluebook:</span>A Uniform
                  Method of Citation, 20th Edition.
                  <br />
                  <span className="font-semibold">Similarity:</span> Should not
                  exceed 10%
                </p>
                <p className="text-base text-gray-600 my-2">
                  All papers shall include an 'Introduction' and 'Conclusion',
                  all pages shall be numbered. All tables, charts, graphs,
                  figures etc. should be kept to the minimum. They should be on
                  separate sheets with sources indicated at the bottom.
                </p>
                <p className="text-orange-400 font-medium my-2">
                  Submission to: MS Word file must be sent to iclt.law@manuu.ed
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 max-w-7xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Important Dates & payment details
          </h2>
          <div className="flex w-full gap-6">
            <Card className="w-5/12">
              <CardContent className="p-4">
                <p className="text-base text-gray-800 my-3">
                  <span className="font-semibold text-black text-lg me-2">
                    Last date for submitting Abstract:
                  </span>
                  25th January,2025
                </p>
                <p className="text-base text-gray-800 my-3">
                  <span className="font-semibold text-black text-lg me-2">
                    Acceptance of Abstract:
                  </span>
                  27th January,2025
                </p>
                <p className="text-base text-gray-800 my-3">
                  <span className="font-semibold text-black text-lg me-2">
                    Last date for registration:
                  </span>
                  30th January,2025
                </p>
                <p className="text-base text-gray-800 my-3">
                  <span className="font-semibold text-black text-lg me-2">
                    Last date for submitting full length paper:
                  </span>
                  15th February 2025
                </p>
                <p className="text-base text-gray-800 my-3">
                  <span className="font-semibold text-black text-lg me-2">
                    Conference Date:
                  </span>
                  25th February 2025
                </p>
                <p className="text-base text-gray-800 my-3">
                  <span className="font-semibold text-black text-lg me-2">Email:</span>
                  iclt.law@manuu.edu.in
                </p>
              </CardContent>
            </Card>
            <Card className="w-7/12">
              <CardContent className="p-4 flex gap-[20px]">
                <div className=" h-[300px] w-[300px] overflow-hidden rounded-xl border p-2">
                  <img src={qrCodeImg} alt="" className=" h-full w-full" />
                </div>
                <div className="">
                  <h1 className="text-lg font-bold"> Payment Details:</h1>
                  <p className="text-base text-gray-600 my-2">
                    <span className="text-base font-medium text-black me-2">
                      Account Number:
                    </span>
                    187901000011247
                  </p>
                  <p className="text-base text-gray-600 my-2">
                    <span className="text-base font-medium text-black me-2">
                      Name (Account Holder):
                    </span>
                    Dean MANUU Law School
                  </p>
                  <p className="text-base text-gray-600 my-2">
                    <span className="text-base font-medium text-black me-2">
                      Bank Name:
                    </span>
                    Indian Overseas Bank
                  </p>
                  <p className="text-base text-gray-600 my-2">
                    <span className="text-base font-medium text-black me-2">
                      Branch:
                    </span>
                    1879 Gachibowli IFSC Code: IOBA0001879
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 max-w-7xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Registration Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Research Scholars/Students
              </h3>
              <p className="text-3xl font-bold text-blue-900">₹500</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">
                Professionals & Academicians
              </h3>
              <p className="text-3xl font-bold text-blue-900">₹1,000</p>
            </Card>
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Foreign Nationals</h3>
              <p className="text-3xl font-bold text-blue-900">$50</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 max-w-7xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Building2 className="w-6 h-6 text-blue-900" />
                <div>
                  <h3 className="font-semibold">Venue</h3>
                  <p>Maulana Azad National Urdu University, Hyderabad</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-blue-900" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>iclt.law@manuu.edu.in</p>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-900" />
                <div>
                  <h3 className="font-semibold">Contact</h3>
                  <p>Dr. Rashmi K. S. (9448355047)</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-6 h-6 text-blue-900" />
                <div>
                  <h3 className="font-semibold">Payment Details</h3>
                  <p>Account Number: 187901000011247</p>
                  <p>Name: Dean MANUU Law School</p>
                  <p>Bank: Indian Overseas Bank</p>
                  <p>Branch: 1879 Gachibowli</p>
                  <p>IFSC Code: IOBA0001879</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
