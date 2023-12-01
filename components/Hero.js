import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Hero({ hero }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mb-5 relative"> {/* Relative positioning context for the sun icon */}
      <div className="flex justify-center w-full">
        {/* Title centered with flex container */}
        <h1 className="text-4.5xl">{"Daniel Dawan"}</h1>
      </div>
      
      {/* Sun icon absolutely positioned to the right */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <Image
          src="/static/icons/sun.svg"
          width={30}
          height={30}
          alt="Toggle theme"
          className="cursor-pointer"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </div>
    </div>
  );
}



