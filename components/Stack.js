import { stack } from '@/data/config';

export default function Stack() {
  return (
    <div>
      <div className="-mb-4">
        <div className="overflow-x-hidden w-full">
          <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-5 md:w-max text-2xl">
            {stack.title}
          </h2>
        </div>
        <div className="w-full flex md:justify-start justify-center flex-wrap -m-2">
          {stack.stack.map((item, index) => (
            <span
              className="border  border-lightText straight-lg m-2 px-3 py-1 rounded"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}