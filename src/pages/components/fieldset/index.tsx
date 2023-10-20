import Fieldset from "@/components/fieldset";

export default function FieldsetExample() {
  return (
    <div className="flex gap-4">
      <Fieldset label="text" className="rounded-lg">
        <input type="text" className="h-[2rem] px-2 py-1" />
      </Fieldset>
      <Fieldset label="select" className="rounded-lg">
        <select
          className="h-[2rem] w-40 px-2 [&>*]:bg-transparent"
          defaultValue={""}
        >
          <option disabled value="">
            select
          </option>
          <option>option 1</option>
          <option>option 2</option>
          <optgroup label="group 1">
            <option>option 3</option>
            <option>option 4</option>
          </optgroup>
        </select>
      </Fieldset>
      <Fieldset label="texteria" className="  rounded-lg ">
        <textarea className="mx-0 px-2 py-1" />
      </Fieldset>
    </div>
  );
}
