export default function WikiCard({ item }) {
  return (
    <div class="bg-white rounded-xl border-4 border-solid border-black box-shadow-custom p-4 w-full max-w-[700px] mx-auto">
      <div class="flex flex-col justify-start">
        <h4 class="font-bold text-4xl mb-4">{item?.term}</h4>
        <span class="italic text-gray-500">{item?.partOfSpeech}</span>
        <p class="mb-4">{item?.definition}</p>
        <h6 class="font-bold text-xl">Example:</h6>
        <p>{item?.example}</p>
      </div>
    </div>
  );
}
