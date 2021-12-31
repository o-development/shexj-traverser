import * as dom from "dts-dom";

const intf = dom.create.interface("MyInterface");
intf.jsDocComment = "This is my nice interface";
intf.members.push(
  dom.create.method(
    "getThing",
    [dom.create.parameter("x", dom.type.number)],
    dom.type.void,
    dom.DeclarationFlags.Optional
  ),
  dom.create.indexSignature("y", "string", dom.type.string),
  dom.create.property("z", dom.type.string)
);

const ns = dom.create.namespace("SomeNamespace");
ns.members.push(intf);

console.log(dom.emit(ns));