import PageHeading from "../../components/ui/PageHeading";

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-4xl font-semibold animate-from-bottom">
        Hi! 👋 I'm Harry
      </h1>
      <p className="my-8"></p>
      <h2 className="text-lg font-semibold uppercase">Overview</h2>
      <p>
        Elit esse velit reprehenderit commodo ea aliquip anim dolor consectetur.
        Ipsum esse excepteur aute laboris duis ea occaecat ex in mollit ipsum.
        Duis elit sunt adipisicing magna cillum non elit nisi ullamco.
      </p>
      <h2 className="text-lg font-semibold uppercase">Free time</h2>
      <ul>
        <li>Running 🏃‍♂️ - </li>
        <li>Gym 🏋️ - </li>
        <li>Indie hacking 👨‍💻 - </li>
      </ul>
    </div>
  );
}
