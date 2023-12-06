import Image from "next/image";

export default function ExperienceItem({ job, minimal }) {
  if (minimal) {
    return (
      <>
        <div className="col-span-1 flex items-center justify-center">
          {" "}
          <Image
            src={job.companyLogo}
            alt="cassidy and ashton logo"
            className="rounded-full bg-gray-50 dark:bg-gray-200"
          />
        </div>
        <div className="col-span-7 flex items-center">
          <div>
            <p className="font-medium">{job.title}</p>{" "}
            <p className="text-gray-500 dark:text-gray-400">
              {job.companyName}
            </p>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-end">
          <p className="text-gray-600 dark:text-gray-400 text-right">
            {job.date}
          </p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="col-span-1 text-gray-500 dark:text-gray-400">
        {job.date}
      </div>
      <div className="col-span-3">
        <a href={job.companyURL} className="font-semibold hover:underline">
          {job.title} - {job.companyName}
        </a>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          {job.description}
        </p>
        <div className="flex flex-wrap mt-4 gap-y-3">
          {job.skills.map((skill, index) => (
            <div key={skill} className="flex items-center">
              <span className="text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl px-2 text-sm">
                {skill}
              </span>
              {index < job.skills.length - 1 && (
                <span className="text-gray-500 mx-1">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
