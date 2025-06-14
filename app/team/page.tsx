import Image from "next/image";

const principalInvestigator = {
  name: "Dr. Chang Wei Sea",
  imageUrl: "/images/team/chang.png",
  title: "Principal Investigator",
  position: "CEng (UK), MIMechE",
  bio: "Dr. Chang Wei Sea has her PhD from the National University of Singapore. She is an Associate Professor at the School of Engineering (Mechanical Discipline), Monash University Malaysia. She is also an Associate Fellow at the Institute of Microengineering & Nanoelectronics (IMEN), UKM. Currently, she serves as an Associate Editor for the Journal of American Ceramics Society (JACerS). In 2018, she was the visiting scholar in SSLEEC, UCSB for six-month. She is a member of the Young Scientists Network-Academy of Sciences Malaysia (YSN-ASM) since 2019.",
  email: "chang.wei.sea@monash.edu",
  phone: "+603 – 5514 5677",
};

const groupMembers = [
  {
    name: "Dr NSK Gowthaman",
    imageUrl: "/images/team/gowthaman.jpg",
    position: "Postdoctoral researcher",
  },
  {
    name: "Edward Chu",
    imageUrl: "/images/team/edward-chu.jpg",
    position: "PhD student",
  },
];

const alumni = [
  "Dr Tan Kok Hong",
  "Dr Lim Fang Sheng",
  "Mr Abdulhakeem Adefioye",
  "Dr Loo Chin Chyi",
  "Dr Tan Kah Hui",
  "Dr Jesu Anthoniappen",
  "Dr Flora Mae Ruiz",
  "Mr Wu Wen-Hao",
  "Mr Wu Yu-Jie",
];

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Principal Investigator */}
      <h3 className="text-3xl font-bold mb-4 pb-4">Principal Investigator</h3>
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-gray-300">
          <Image
            src={principalInvestigator.imageUrl}
            alt={principalInvestigator.name}
            width={500}
            height={500}
            className="object-cover object-top"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{principalInvestigator.name}</h2>
          <p className="text-gray-600 font-medium">
            {principalInvestigator.position}
          </p>
          <p className="mt-4 text-gray-700">{principalInvestigator.bio}</p>
          <p className="mt-2 text-gray-700">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${principalInvestigator.email}`}
              className="text-blue-600 hover:underline"
            >
              {principalInvestigator.email}
            </a>
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> {principalInvestigator.phone}
          </p>
        </div>
      </section>

      {/* Group Members */}
      <section>
        <h3 className="text-3xl font-bold mb-4 pb-4">Group Members</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {groupMembers.map((member) => (
            <div key={member.name} className="text-center space-y-2">
              <div className="w-28 h-28 mx-auto relative rounded-full overflow-hidden border-2 border-gray-300">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-gray-900 font-medium">{member.name}</p>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni */}
      <section>
        <h3 className="text-3xl font-bold mb-4 pb-4">Alumni</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {alumni.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
