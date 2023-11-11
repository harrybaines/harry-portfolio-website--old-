function ExperienceItem({ job }) {
  return (
    <>
      <div className="col-span-1 font-medium text-gray-500">{job.date}</div>
      <div className="col-span-3">
        <a href={job.companyURL} className="hover:underline">
          <p className="text-lg">
            {job.title} - {job.companyName}
          </p>
        </a>
        <p className="mt-1 text-gray-400">{job.description}</p>
        <div className="flex mt-3 gap-4 divide-x divide-dotted divide-gray-500">
          {job.skills.map((skill) => (
            <div key={skill} className="text-gray-500">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ExperienceItem;
