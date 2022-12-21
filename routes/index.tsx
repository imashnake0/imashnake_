import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>imashnake_</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/shnake_.svg"
          class="w-32 h-32"
          alt="imashnake_"
        />
        <p class="my-6">
          hi guy.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
