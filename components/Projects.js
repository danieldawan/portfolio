import Image from 'next/image';
import { projects } from '@/data/config';

export default function Projects() {
  return (
    <div className="-mb-4">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-5 md:w-max text-2xl">
          {projects.title}
        </h2>
      </div>
      <p className="text-lg">{projects.desc}</p>
      <div>
        {projects.projects.map((item, index) => {
          return (
            <div
              key={index}
              className="p-6 border border-lightText straight-xl mb-4 rounded"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="flex items-center flex-wrap -m-3 pt-5">
                {item.github ? (
                  // If item.github is defined, render the link
                  <a
                    href={`https://github.com/${item.github}`}
                    className="flex items-center py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/github.svg"
                      width={18}
                      height={18}
                      alt="GitHub icon"
                    />
                    <span className="ml-2 text-lightText transition-colors duration-500">
                      {item.github}
                    </span>
                  </a>
                ) : (
                  // If item.github is not defined, display the text without a link
                  <span className="flex items-center py-1 px-3">
                    <Image
                      src="/static/icons/github.svg"
                      width={18}
                      height={18}
                      alt="GitHub icon"
                    />
                    <span className="ml-2 text-lightText transition-colors duration-500">
                      Private Repository
                    </span>
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
