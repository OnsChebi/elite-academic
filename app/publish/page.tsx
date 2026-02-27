import FromBlog from "../components/publish/fromBlog";
import Post from "../components/publish/post";
import PubHeader from "../components/publish/pubHeader";

export default function PublishPage() {
  return (
    <main className="bg-white min-h-screen">
      <PubHeader />

      <div className="mx-auto w-full max-w-[720px] px-5 sm:px-6 md:px-8">
        <Post/>
      </div>

     <div className="
        mx-auto w-full
        
        px-5 sm:px-6 md:px-8 lg:px-[112px]           /* larger padding on desktop as in spec */
        mt-1  md:mt-16 lg:mt-20
      ">
        <FromBlog />
      </div>
    </main>
  );
}