import { component$ } from "@builder.io/qwik";

export default component$(
  ({ src, className }: { src: string; className?: string }) => {
    return (
      <video
        class={`${className} mb-6 border-black border`}
        muted
        autoPlay
        loop
        src={src}
      ></video>
    );
  }
);
