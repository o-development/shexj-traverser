type AssertExtends<Extended, Extends extends Extended> = Extends;
type ObjectWithFields<FieldNames extends string> = {
  [Field in keyof FieldNames]: number | string;
};
type SpecialObject = AssertExtends<
  ObjectWithFields<"a" | "b">,
  {
    a: number;
    b: string;
  }
>;
