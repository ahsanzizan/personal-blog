import { upsertProjectAction } from "@/actions/admin";
import {
  BackButton,
  StandardFormButton,
} from "@/app/components/global/Buttons";
import { getProjectById } from "@/database/project.query";
import { Types } from "mongoose";

export default async function EditWork({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const project = await getProjectById(params.id);

  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <div className="w-full max-w-4xl rounded p-6">
        <BackButton />
        <h1 className="mb-7 mt-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
          {project ? "Edit" : "Create"} a Project
        </h1>
        <form action={upsertProjectAction}>
          <input
            type="hidden"
            id="_id"
            name="_id"
            value={
              project ? project._id.toString() : new Types.ObjectId().toString()
            }
          />
          <div className="mb-4">
            <label
              htmlFor="title"
              className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
            >
              Title
            </label>
            <input
              className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
              style={{ WebkitTextFillColor: "#fff" }}
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              defaultValue={project?.title}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="url"
              className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
            >
              URL
            </label>
            <input
              className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
              style={{ WebkitTextFillColor: "#fff" }}
              type="url"
              name="url"
              id="url"
              placeholder="URL"
              defaultValue={project?.url}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
            >
              Image
            </label>
            <input
              className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
              style={{ WebkitTextFillColor: "#fff" }}
              type="url"
              name="image"
              id="image"
              placeholder="Image URL"
              defaultValue={project?.image}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="link"
              className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
            >
              Link
            </label>
            <input
              className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
              style={{ WebkitTextFillColor: "#fff" }}
              type="text"
              name="link"
              id="link"
              placeholder="Project Link"
              defaultValue={project?.link}
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
            >
              Description
            </label>
            <textarea
              className="h-24 w-full rounded-xl border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
              style={{ WebkitTextFillColor: "#fff" }}
              name="description"
              id="description"
              placeholder="Description"
              defaultValue={project?.description}
              required
            />
          </div>
          <div className="mt-10">
            <StandardFormButton type="submit">
              {project ? "Save" : "Create"}
            </StandardFormButton>
          </div>
        </form>
      </div>
    </section>
  );
}