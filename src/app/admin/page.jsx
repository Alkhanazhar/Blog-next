import { MoveLeft } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="overflow-y-hidden">
      <div className="min-h-screen bg-gray-100 p-6">
        <header className="bg-gray-300 text-black shadow p-4 ">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </header>
        <main className="mt-6 p-4 bg-white shadow ">
          <p className="text-lg flex gap-3 items-center ">
            <MoveLeft /> You can also create your blogs here.
          </p>
          {/* Additional content and functionality can be added here */}

          <section className="mb-4">
            <h2 className="text-xl font-semibold">Feature Overview</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>
                User Management: Add, edit, or remove users from the system.
              </li>
              <li>
                Content Creation: Create and manage blogs, articles, and other
                content.
              </li>
              <li>
                System Settings: Customize the settings of your application.
              </li>
              <li>
                Analytics: View detailed analytics and reports of user activity.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Get Started</h2>
            <p className="text-gray-700 mt-2">
              Ready to create your first blog? Click the button below to get
              started.
            </p>
            <button className="mt-4 outline-none border-none">
              <Link
                href={"/admin/addBlogs"}
                className="mt-4 bg-gray-600 text-white px-4 py-2 shadow hover:bg-gray-700"
              >
                Create Blog
              </Link>
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default page;
