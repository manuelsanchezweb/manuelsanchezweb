import { component$ } from "@builder.io/qwik";

interface VideoProps {
  src: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default component$(({ src, className, height, width }: VideoProps) => {
  return (
    <video
      {...{ height, width }}
      class={`${className} mb-6 border-black border`}
      muted
      autoPlay
      loop
      src={src}
    ></video>
  );
});
