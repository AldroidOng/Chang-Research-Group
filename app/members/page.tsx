import Image from "next/image";
import membersConfig from "@data/members.json";
import { Metadata } from "next";
import { Button } from "@components/ui/button";

const { principalInvestigator, graduateStudents, alumni } = membersConfig;

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
            {principalInvestigator.position}, {""}
            <a
              href={principalInvestigator.universityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {principalInvestigator.university}
            </a>
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

      {/* Graduate students */}
      <section>
        <h3 className="text-3xl font-bold mb-4 pb-4">Graduate Students</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {graduateStudents.map((member) => (
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
