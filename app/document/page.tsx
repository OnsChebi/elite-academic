import BacDocuments from "../components/document/bac";
import DocumentsHeader from "../components/document/docHeader";
import MastersDocuments from "../components/document/master";
import Pricing from "../components/home/pricing";

export default function DocPage() {
  return (
    <main className="bg-white min-h-screen">
      <DocumentsHeader/>
      <BacDocuments/>
      <MastersDocuments/>
      <Pricing/>

    </main>
  );
}