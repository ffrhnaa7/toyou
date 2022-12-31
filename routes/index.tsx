import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>from hana</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md bg-blue-900">
        
        나는 올해 오빠랑 한국에서 볼 수 있게 되었다는 게  아직 신기한 것  같아 //
        오빠가 그동안 옆에 있어줘서 너무 감사하고 나는 오빠가 많이 행복했으면 좋겠어 //
        내가 진심으로 오빠를 많이 사랑학고 오빠랑 오래오래 이쁜 연애를 하길 바래 //
        2023년도에 오빠랑 더 많은 좋은 추억들 만들고 싶어서 노력해볼게 //
        사랑해 자기야 // 상진오빠를 많이 사랑해~
    
        <p class="my-6">
          i love you to the moon and back
        </p>
        <Counter start={Infinity} />
      </div>
    </>
  );
}
